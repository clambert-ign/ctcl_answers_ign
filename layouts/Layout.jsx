import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '@i18n/config'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

import { getOneTrustDomainId, getOneTrustScriptURL } from '@services/utilities/libraryUtils'

import GlobalNavigationAcousticData from '@components/globalNavigation/GlobalNavigationAcousticData'
import GlobalFooterAcousticData from '@components/globalFooter/GlobalFooterAcousticData'
import GlobalFooter from '@components/globalFooter/GlobalFooter'
import ToastBarAcousticData from '@components/toastBar/ToastBarAcousticData'

const Layout = ({ children }) => {
  const { 
    navigationToastbar, 
    globalNavigation, 
    footerToastbar, 
    globalFooter 
  } = useSelector((state) => state.acoustic.data)

  const loading = useSelector((state) => state.acoustic.loading)
  const { t } = useTranslation()
  const languagePath = useSelector((state) => state.acoustic.language)
  const OneTrustScriptURL = getOneTrustScriptURL(languagePath)
  const OneTrustDomainId = getOneTrustDomainId(languagePath)

  return (
    <>
      {!loading && (
        <>                    
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {OneTrustDomainId && OneTrustScriptURL ?
              <script src={OneTrustScriptURL} type="text/javascript" data-document-language="true" charset="UTF-8" data-domain-script={OneTrustDomainId}></script> : ""
            }
          </Head>
          <>
            <div>
              {navigationToastbar && (
                <ToastBarAcousticData data={navigationToastbar} />
              )}
              
              {globalNavigation && (
                <GlobalNavigationAcousticData data={globalNavigation} />
              )}
              
              {children}

              {footerToastbar && (
                <ToastBarAcousticData data={footerToastbar} />
              )}
              {globalFooter && (
                <>
                  <GlobalFooterAcousticData data={globalFooter} />
                </>
              )}
              
            </div>
          </>
        </>
      )}
    </>
  )
}

export default Layout
