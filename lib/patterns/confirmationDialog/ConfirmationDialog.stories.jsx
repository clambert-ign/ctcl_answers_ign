import { useState } from "react"
import ConfirmationDialogComponent from './ConfirmationDialog'
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import EditorialText from "@atoms/editorialText/EditorialText"

export default {
    title: 'Patterns/Confirmation Dialog',
    component: ConfirmationDialogComponent,
    parameters: {
      docs: {
        description: {
          component: 'Confirmation dialogue is a small C16 Modal Pop-up with a C1 Editorial that appears when the user clicks on an external link (informs the user that they are leaving the current website) or performs an action that requires a confirmation of acceptance.'
        }
      }
    },
    args: {},
    argTypes: {}
}

const Template = () => {

  const [showModal, setShowModal] = useState(true)

  const toggleModal = (e) => {
    e.preventDefault()
    setShowModal(!showModal)
  }

  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open('https://www.google.co.uk', '_blank')
    }
  }

  return (
    <ConfirmationDialogComponent>
      <Modal 
        {...ModalArgs.Modal.args}
        show={showModal} 
        title="Warning!"
        align="center"
        onClose={(value) => {
          setShowModal(value)
        }}
      >
        <ModalContent>
          <EditorialText align="center" text={<><p>You are about to leave this website, are you sure you want to continue?</p></>} />
        </ModalContent>
        <ModalFooter>
          <Button {...PrimaryButtonArgs.default.args} text="Confirm" onClick={openWindow} />
          <Button {...SecondaryButtonArgs.default.args} text="Cancel" onClick={toggleModal} />
        </ModalFooter>
      </Modal>
    </ConfirmationDialogComponent>
  )
}

export const ConfirmationDialog = Template.bind()
ConfirmationDialog.parameters = {
  controls: { hideNoControlsWarning: true }
}