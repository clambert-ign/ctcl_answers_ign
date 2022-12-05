import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { initAcoustic, apiError } from '@src/ducks/acousticSlice'
import ipstackAPI from '@services/api/ipstackAPI'
import { getLanguagePath } from '@services/utilities/ipstackHelper'
import { getLibraryLanguage } from '@services/utilities/libraryUtils'
import { useTranslation } from 'react-i18next'

const AppRouter = (props) => {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const [ipstackData, setIpstackData] = useState('')
  const [ipStackError, setIpStackError] = useState(false)
  const [routerLocale, setRouterLocale] = useState(`/${router.locale}`)
  const [defaultLocale, setDefaultLocale] = useState(`/${router.defaultLocale}`)
  const [languageCode, setLanguageCode] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await ipstackAPI.get().then((resp) => {
          if (resp) {
            resp.data.error ? setIpStackError(true) : setIpStackError(false)
            if (!ipStackError) {
              setIpstackData(resp)                      
              let currentUrl = window.location.href.split('/')
              let urlLocale = `/${currentUrl[3]}`
              let localeStr = getLanguagePath(resp.data.country_code, resp.data.location.languages[0].code)
              setLanguageCode(localeStr)              
              if (routerLocale === defaultLocale) {                    
                if (!urlLocale && defaultLocale !== localeStr) {
                  router.push(`${localeStr}${router.asPath}`, `${localeStr}${router.asPath}`, { localeStr })
                  setRouterLocale(localeStr)
                }
                if (urlLocale !== defaultLocale && defaultLocale !== localeStr) {
                  router.push(`${localeStr}${router.asPath}`, `${localeStr}${router.asPath}`, { localeStr })
                  setRouterLocale(localeStr)
                }
              }
            }
            i18n.changeLanguage(getLibraryLanguage(routerLocale))
            dispatch(initAcoustic(routerLocale))
          }
        })
      } catch (error) {
        dispatch(apiError({ error: t('error404') }))
      }
    }
    getLocation()
  }, [])
  {
    ipstackData && languageCode
    return props.children
  }
}

export default AppRouter
