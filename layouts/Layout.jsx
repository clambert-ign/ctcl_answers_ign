import { useSelector } from 'react-redux'
import Head from 'next/head'
import { getOneTrustDomainId, getOneTrustScriptURL } from '@services/utilities/libraryUtils'
import GlobalNavigationAcousticData from '@components/globalNavigation/GlobalNavigationAcousticData'
import GlobalFooterAcousticData from '@components/globalFooter/GlobalFooterAcousticData'
import ToastBarAcousticData from '@components/toastBar/ToastBarAcousticData'
import ModalAcousticData from "@components/modal/ModalAcousticData"

const Layout = ({children}) => {
  const { 
    navigationToastbar,
    globalNavigation,
    footerToastbar,
    globalFooter
  } = useSelector((state) => state.acoustic.data)

  const loading = useSelector((state) => state.acoustic.loading)
  const languagePath = useSelector((state) => state.acoustic.language)
  const OneTrustScriptURL = getOneTrustScriptURL(languagePath)
  const OneTrustDomainId = getOneTrustDomainId(languagePath)
  const showModal = useSelector((state) => state?.modal?.open)
  const showModalData = useSelector((state) => state?.modal?.modalData.content)
  const showModalType = useSelector((state) => state?.modal?.modalData.type)
  
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

            {showModal && showModalData && (
              <ModalAcousticData data={showModalData} type={showModalType} />
            )}
          </>
        </>
      )}
    </>
  )
}

export default Layout
