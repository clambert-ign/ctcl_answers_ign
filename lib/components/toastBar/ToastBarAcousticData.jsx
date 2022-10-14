import { useState } from "react"
import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import ToastBar from './ToastBar'
import Button from '@atoms/button/Button'
import EditorialText from "@atoms/editorialText/EditorialText"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"


const ToastBarAcousticData = (props) => {
  const { align, link, text } = props.data
  
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(link?.value?.elements?.link?.value, '_blank')  
      setShowModal(!showModal)
    }
  }

  return (
    <>
    <ToastBar text={getValue(text)} align={getSelectionValue(align)}>
      <Button 
        type={link.value?.elements?.type?.value?.selection} 
        text={link?.value?.elements?.text?.value}
        icon={link?.value?.elements?.icon?.value?.selection}
        iconAlign={link?.value?.elements?.iconAlign?.value?.selection}
        onClick={toggleModal} 
      />
    </ToastBar>
    <ConfirmationDialog>
      <Modal 
        show={showModal} 
        title="Warning!"
        align="center"
        onClose={(value) => {
          setShowModal(value)
        }}
      >
        <ModalContent>
          <EditorialText align="center">
            <p>{link?.value?.elements?.externalText?.value}</p>
          </EditorialText>            
        </ModalContent>
        <ModalFooter>
          <Button text="Confirm" onClick={openWindow} />
          <Button text="Cancel" onClick={toggleModal} />
        </ModalFooter>
      </Modal>
    </ConfirmationDialog>
    </>
  )
}

export default ToastBarAcousticData
