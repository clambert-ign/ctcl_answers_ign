import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import GlobalNavigationAcousticData from '@components/globalNavigation/GlobalNavigationAcousticData'
import GlobalFooterAcousticData from '@components/globalFooter/GlobalFooterAcousticData'
import ToastBarAcousticData from '@components/toastBar/ToastBarAcousticData'
import ModalAcousticData from "@components/modal/ModalAcousticData"
import ShareMenuAcousticData from "@components/shareMenu/ShareMenuAcousticData"
import AlertAcousticData from "@components/alert/AlertAcousticData"

const Layout = ({children}) => {
  const { 
    navigationToastbar,
    globalNavigation,
    footerToastbar,
    globalFooter
  } = useSelector((state) => state.acoustic.data)

  const loading = useSelector((state) => state?.acoustic?.loading)
  const showModal = useSelector((state) => state?.modal?.open)
  const showModalData = useSelector((state) => state?.modal?.modalData?.content)
  const showModalType = useSelector((state) => state?.modal?.modalData?.type)
  const showShare = useSelector((state) => state?.share?.shareOpen)
  const showShareData = useSelector((state) => state?.share?.shareData?.content)
  const elementRef = useSelector((state) => state?.share?.shareData?.elementRef)
  const showAlert = useSelector((state) => state?.alert?.alertOpen)
  const showAlertData = useSelector((state) => state?.alert?.alertData?.content)
  const router = useRouter()
  const globalNavigationData = {...globalNavigation}
  globalNavigationData.routerPath = router.asPath

  return (
    <>
      {!loading && (
        <>
          <div>
            {navigationToastbar && (
              <ToastBarAcousticData data={navigationToastbar} />
            )}
            
            {globalNavigation && (
              <GlobalNavigationAcousticData data={globalNavigationData} />
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

          {showShare && showShareData && (
            <ShareMenuAcousticData data={showShareData} elementRef={elementRef} />
          )}

          {showAlert && showAlertData && (
            <AlertAcousticData data={showAlertData} />
          )}
        </>
      )}
    </>
  )
}

export default Layout
