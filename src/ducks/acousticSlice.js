import { createSlice } from '@reduxjs/toolkit'
import acousticAPI from '@services/api/acousticAPI'
import config from '@config/config'
import acousticHelper from '@services/utilities/acousticHelper'

const initialState = {
    data: {
        seo: {
            title: config.app.title,
            description: config.app.description
        },
        header: [],
        footer: [],
        //cookie: [],
        faviconImg: [],
        content: {
            data: [],
            contentList: [],
            contentPaths: []
        }
    },
    homePageData: [],
    language: null,
    loading: true,
    error: null,
    complianceCode: null,
    homePageId: null,
    domain: null
}

// Acoustic Slice
const acousticSlice = createSlice({
    name: 'acoustic',
    initialState,
    reducers: {
        data: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        updateContent: (state, action) => {
            state.data.content.contentList[action.payload.index].page = action.payload.page
            state.data.content.contentList[action.payload.index].content = action.payload.data
            state.error = null
        },
        addContentData: (state, action) => {
            state.data.content.data = action.payload
            state.loading = false
        },
        languagePath: (state, action) => {
            state.language = action.payload
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        complianceCode: (state, action) => {
            state.complianceCode = action.payload
        },
        apiError: (state, action) => {
            const { error } = action.payload
            state.loading = false
            state.error = error
        },
        homePageId: (state, action) => {
            state.homePageId = action.payload
        },
        homePageData: (state, action) => {
            state.homePageData = action.payload
            state.loading = false
            state.error = null
        },
        domain: (state, action) => {
            state.domain = action.payload
        }
    }
})

// Export Actions
export const { data, updateContent, languagePath, loading, apiError, addContentData, complianceCode, homePageId, homePageData, domain } = acousticSlice.actions

// Init Acoustic Content
export const initAcoustic = (locale, pageName) => async (dispatch) => {
    // Set loading indicator active
    dispatch(loading(true))
    // Set path
    dispatch(languagePath(locale))

    // Get requested Website Configuration Id Path
    const websiteConfigEndpoint = acousticHelper.getWebsiteConfigurationUrl(locale)

    // With libraryId and "Website Configuration" type, get WebsiteConfigurationId
    let websiteConfigurationId
    try {
        const websiteConfiguration = await acousticAPI.get(websiteConfigEndpoint)
        websiteConfigurationId = websiteConfiguration.data.documents[0].id
    } catch (error) {
        dispatch(apiError({ error: `Can't get Acoustic Website Configuration Id.` }))
    }

    if (websiteConfigurationId) {
        // Get related configuration endpoint with websiteConfigurationId
        const websiteConfigurationEndpoint = acousticHelper.getDeliveryRenderingContextUrl(websiteConfigurationId)

        // Get Website Configuration Elements
        let websiteConfigData
        try {
            websiteConfigData = await acousticAPI.get(websiteConfigurationEndpoint)
        } catch (error) {
            dispatch(
                apiError({
                    error: `Can't get Acoustic Website Configuration data`
                })
            )
        }

        if (websiteConfigData) {
            // Response Data
            const responseData = websiteConfigData?.data?.elements

            // Check Response for required objects
            const missingResponse = []
            if (!responseData.globalNavigation) missingResponse.push('Global navigation')
            if (!responseData.globalFooter) missingResponse.push('Global footer')
            //if(!responseData.cookie) missingResponse.push('cookie')

            // If any of the required objects missing
            if (missingResponse.length > 0) {
                const tmpError = {
                    error: missingResponse.join(', ') + ' object(s) are missing in Acoustic Website Configuration.'
                }

                dispatch(apiError(tmpError))
            } else {
                const tmpData = {}

                // Seo
                tmpData.seo = {
                    title: responseData?.seoTitle?.value || config.app.title,
                    description: responseData?.seoDescription?.value || config.app.description,
                    googleAnalyticsId: responseData?.googleAnalyticsId?.value || null
                }

                // Nav toastbar
                tmpData.navigationToastbar = responseData?.navigationToastbar?.value?.elements

                // Global navigation
                tmpData.globalNavigation = responseData?.globalNavigation?.value?.elements

                // Footer toastbar
                tmpData.footerToastbar = responseData?.footerToastbar?.value?.elements

                // Global footer
                tmpData.globalFooter = responseData?.globalFooter?.value?.elements

                // Cookie Consent
                //tmpData.cookieConsent = responseData?.cookie?.value?.elements

                //faviconImg
                tmpData.faviconImg = responseData?.favicon

                dispatch(homePageId(responseData?.homepageUuid?.value))
                dispatch(data(tmpData))
            }
        }
    }
}

// Init Requested Content **leaving this here for now but currently not in use**
export const loadContent = (uuid) => async (dispatch, getState) => {
    try {
        // Find index of item in store
        const index = getState().acoustic.data.content.contentList.findIndex((item) => item.uuid === uuid)

        // Get content data
        const { data } = await acousticAPI.get(acousticHelper.getDeliveryRenderingContextUrl(uuid))

        // Dispatch
        dispatch(updateContent({ index, data: data?.elements, page: data?.type }))
    } catch (error) {
        dispatch(apiError({ error: error.message }))
    }
}

export const setFooterComplianceCode = (code) => (dispatch) => {
    dispatch(complianceCode(code))
}

export const setDomain = (value) => (dispatch) => {
    dispatch(domain(value))
}

export default acousticSlice.reducer
