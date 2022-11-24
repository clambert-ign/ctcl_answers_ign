import { useDispatch, useSelector } from 'react-redux'
import { getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'
import { getComponentName } from '@services/utilities/acousticMappings'
import '@i18n/config'
import { useTranslation } from 'react-i18next'
import { setModalOpen } from '@src/ducks/modalSlice'
import Modal from "./Modal"
import ModalContent from "./ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"
import Button from '@atoms/button/Button'
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import EditorialAcousticData from "@patterns/editorial/EditorialAcousticData"

const ModalAcousticData = (props) => {
  const { 
    data,
    type
  } = props

  const modalData = data?.value?.elements
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const showModal = useSelector((state) => state?.modal?.open)

  const toggleModal = (e) => {
    e ? e.preventDefault() : null
    dispatch(setModalOpen(!showModal))
  }
  
  const openWindow = (e) => {
    e ? e.preventDefault() : null   
    dispatch(setModalOpen(!showModal))
    if (typeof window !== 'undefined') {
      window.open(getValue(data.link), '_blank')
    }
  }

  return type === 'modal' ? (
    <Modal 
      show={showModal} 
      title={getValue(modalData?.title)}
      titleTag={getSelectionValue(modalData?.titleTag)}
      align={getSelectionValue(modalData?.align)}
      onClose={(value) => {
        toggleModal(value)
      }}
    >
      <ModalContent>
        {getValues(modalData?.content).map((content, index) => {
          if(getComponentName(content.type) === 'Editorial') {
            return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
          }
        })}
      </ModalContent>      
      {(getValues(modalData?.footerLinks)) && (
        <ModalFooter>
          {getValues(modalData?.footerLinks).map((button, i) => {
            return (
              <ButtonAcousticData key={i} data={button?.elements} />
            )
          })}
        </ModalFooter>
      )}      
    </Modal>
  ) : (
    <ConfirmationDialog>
      <Modal 
        show={showModal} 
        title={t('warning')}
        titleTag="h3"
        align="center"
        onClose={(value) => {
          toggleModal(value)
        }}
      >
        <ModalContent>
          <p>{getValue(data.text)}</p>
        </ModalContent>
        <ModalFooter>
          <Button type="primary" text={t('confirm')} onClick={openWindow} />
          <Button type="secondary" text={t('cancel')} onClick={toggleModal} />
        </ModalFooter>
      </Modal>
    </ConfirmationDialog>
  )
}

export default ModalAcousticData