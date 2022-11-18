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
      "toast-font-size": {
        value: "16px",
        description: "Toastbar Atom Font Size",
        control: "text"
      },
      "toast-font-weight": {
        value: "200",
        description: "Toastbar Atom Font Weight",
        control: "text"
      },
      "toast-line-height": {
        value: "25.6px",
        description: "Toastbar Atom Line Height",
        control: "text"
      },
      "toast-text-color": {
        value: "#fff",
        description: "Toastbar Atom Text Colour"
      },
      "toast-bgcolor": {
        value: "#4b4c53",
        description: "Toastbar Atom Background Colour"
      },
      "toast-link-font-size": {
        value: "16px",
        description: "Toastbar Atom Font Size",
        control: "text"
      },
      "toast-link-font-weight": {
        value: "700",
        description: "Toastbar Atom Font Weight",
        control: "text"
      },
      "toast-link-line-height": {
        value: "22.4px",
        description: "Toastbar Atom Line Height",
        control: "text"
      },
      "toast-link-text-color": {
        value: "#fff",
        description: "Toastbar Atom Link Text Colour"
      },
      "toast-link-icon-color": {
        value: "#fff",
        description: "Toastbar Atom Link Icon Colour"
      },
      "toast-link-text-decoration": {
        value: "none",
        description: "Toastbar Atom Link Decoration",
        control: "text"
      },
      "toast-link-bgcolor": {
        value: "transparent",
        description: "Toastbar Atom Link Background Colour",
        control: "text"
      },
      "toast-link-hover-text-color": {
        value: "#F5F5F6",
        description: "Toastbar Atom Link Hover Text Colour"
      },
      "toast-link-hover-icon-color": {
        value: "#F5F5F6",
        description: "Toastbar Atom Link Hover Icon Colour"
      },
      "toast-link-hover-text-decoration": {
        value: "underline",
        description: "Toastbar Atom Hover Link Decoration",
        control: "text"
      },
      "toast-link-hover-bgcolor": {
        value: "transparent",
        description: "Toastbar Atom Hover Background Colour",
        control: "text"
      },
      "toast-link-active-text-color": {
        value: "#F5F5F6",
        description: "Toastbar Atom Link Active Text Colour"
      },
      "toast-link-active-icon-color": {
        value: "#F5F5F6",
        description: "Toastbar Atom Link Active Icon Colour"
      },
      "toast-link-active-text-decoration": {
        value: "underline",
        description: "Toastbar Atom Active Link Decoration",
        control: "text"
      },
      "toast-link-active-bgcolor": {
        value: "transparent",
        description: "Toastbar Atom Active Background Colour",
        control: "text"
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
      <Button {...TertiaryButtonArgs.default.args} {...TertiaryButtonArgs.ExternalLink.args} iconAlign="right" text="Visit our Healthcare Professional site" onClick={toggleModal} />
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
          <EditorialText align="center" text={<><p>You are about to leave this website, are you sure you want to continue?</p></>} />            
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
