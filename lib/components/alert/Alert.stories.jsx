import { useState } from "react"
import AlertComponent from './Alert'
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
  title: 'Components/Global/Alert',
  component: AlertComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Alert Component positions in a highly visible area that can contain a key message that the user needs to be aware of (e.g. Orientation of purpose of site, Adverse Event resources).'
      }
    },
    cssprops: {
      "alert-font-size": {
        value: "16px",
        description: "Alert Atom Font Size",
        control: "text"
      },
      "alert-font-weight": {
        value: "200",
        description: "Alert Atom Font Weight",
        control: "text"
      },
      "alert-line-height": {
        value: "25.6px",
        description: "Alert Atom Line Height",
        control: "text"
      },
      "alert-text-color": {
        value: "#fff",
        description: "Alert Atom Text Colour"
      },
      "alert-bgcolor": {
        value: "#4b4c53",
        description: "Alert Atom Background Colour"
      },
      "alert-link-font-size": {
        value: "16px",
        description: "Alert Atom Font Size",
        control: "text"
      },
      "alert-link-font-weight": {
        value: "700",
        description: "Alert Atom Font Weight",
        control: "text"
      },
      "alert-link-line-height": {
        value: "22.4px",
        description: "Alert Atom Line Height",
        control: "text"
      },
      "alert-link-text-color": {
        value: "#fff",
        description: "Alert Atom Link Text Colour"
      },
      "alert-link-icon-color": {
        value: "#fff",
        description: "Alert Atom Link Icon Colour"
      },
      "alert-link-text-decoration": {
        value: "none",
        description: "Alert Atom Link Decoration",
        control: "text"
      },
      "alert-link-bgcolor": {
        value: "transparent",
        description: "Alert Atom Link Background Colour",
        control: "text"
      },
      "alert-link-hover-text-color": {
        value: "#F5F5F6",
        description: "Alert Atom Link Hover Text Colour"
      },
      "alert-link-hover-icon-color": {
        value: "#F5F5F6",
        description: "Alert Atom Link Hover Icon Colour"
      },
      "alert-link-hover-text-decoration": {
        value: "underline",
        description: "Alert Atom Hover Link Decoration",
        control: "text"
      },
      "alert-link-hover-bgcolor": {
        value: "transparent",
        description: "Alert Atom Hover Background Colour",
        control: "text"
      },
      "alert-link-active-text-color": {
        value: "#F5F5F6",
        description: "Alert Atom Link Active Text Colour"
      },
      "alert-link-active-icon-color": {
        value: "#F5F5F6",
        description: "Alert Atom Link Active Icon Colour"
      },
      "alert-link-active-text-decoration": {
        value: "underline",
        description: "Alert Atom Active Link Decoration",
        control: "text"
      },
      "alert-link-active-bgcolor": {
        value: "transparent",
        description: "Alert Atom Active Background Colour",
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
      description: 'The Alert text to be displayed.',
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
      description: 'The alignment of the Alert text',
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
    <AlertComponent {...args}>
      <Button {...TertiaryButtonArgs.default.args} {...TertiaryButtonArgs.ExternalLink.args} iconAlign="right" text="Visit our Healthcare Professional site" onClick={toggleModal} />
    </AlertComponent>
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
export const Alert = Template.bind()
Alert.args = {
  text:   'This website is for the general public. Are you a Healthcare Professional?',
  align:  'center'
}
