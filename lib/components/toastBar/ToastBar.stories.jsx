import { useState } from "react"
import ToastBarComponent from './ToastBar'
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

export default {
  title: 'Components/Global/Toast Bar',
  component: ToastBarComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Toast Bar is a highly visible, optional content bar that can contain a key message that the user needs to be aware of (e.g. Orientation of purpose of site, Adverse Event resources).Toast bars contain an optional simple message and an optional tertiary text link.'
      }
    },
    cssprops: {
      "tb-text-color": {
        value: "#fff",
        description: "Toastbar Text Colour"
      },
      "tb-font-size": {
        value: "16px",
        description: "Toastbar Atom Default Font Size",
        control: "text"
      },
      "tb-font-weight": {
        value: "200",
        description: "Toastbar Atom Default Font Weight",
        control: "text"
      },
      "tb-line-height": {
        value: "24px",
        description: "Toastbar Atom Default Font Line Height",
        control: "text"
      },
      "tb-bgcolor": {
        value: "#4b4c53",
        description: "Toastbar Atom Background Colour"
      },
      "tb-link-color": {
        value: "#fff",
        description: "Toastbar Atom Link Text Colour"
      },
      "tb-link-color-hover": {
        value: "#fff",
        description: "Toastbar Atom Link Text Hover Colour"
      },
      "tb-link-color-active": {
        value: "#fff",
        description: "Toastbar Atom Link Text Active Colour"
      },
      "tb-link-bgcolor-active": {
        value: "#4b4c53",
        description: "Toastbar Atom Link Text Active Background Colour"
      },
    }
  },
  args: {
    text:   'This website is for the general public. Are you a Healthcare Professional?',
    align:  'center'
  },
  argTypes: {  
    text: {
      description: 'The toastbar text to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    align: {
      description: 'The alignment of the toastbar text',
      options: ['left', 'center'],
      type: { 
        name: 'enum', 
        required: true 
      },
      control: {
        type: 'select'
      },
      table: {}
    }
  }
}

const Template = (args) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(TertiaryButtonArgs.ExternalLink.args.link, '_blank')  
      setShowModal(!showModal)
    }
  }
  return (
    <>
    <ToastBarComponent {...args}>
      <Button {...TertiaryButtonArgs.default.args} {...TertiaryButtonArgs.ExternalLink.args} text="Visit our Healthcare Professional site" onClick={toggleModal} />
    </ToastBarComponent>
    <ConfirmationDialog>
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
          <EditorialText align="center">
            <p>You are about to leave this website, are you sure you want to continue?</p>
          </EditorialText>            
        </ModalContent>
        <ModalFooter>
          <Button {...PrimaryButtonArgs.default.args} text="Confirm" onClick={openWindow} />
          <Button {...SecondaryButtonArgs.default.args} text="Cancel" onClick={toggleModal} />
        </ModalFooter>
      </Modal>
    </ConfirmationDialog>
    </>
  )
}
export const ToastBar = Template.bind()
ToastBar.args = {
  text:   'This website is for the general public. Are you a Healthcare Professional?',
  align:  'center'
}
