import { useState } from "react"
import Button from './Button'
import * as PrimaryButtonArgs from "./PrimaryButton.stories"
import * as SecondaryButtonArgs from "./SecondaryButton.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

export default {
  title: 'Atoms/Buttons & Links/Primary Buttons',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary buttons indicate the main action that should be taken on a page or within a set of primary and secondary actions to indicate the primary action.'
      }
    },
    cssprops: {
      "primary-btn-text-color": {
        value: "#fff",
        description: "Button Text Colour"
      },
      "primary-btn-bgcolor": {
        value: "#6267A1",
        description: "Button Background Colour"
      },
      "primary-btn-border-color": {
        value: "#6267A1",
        description: "Button Border Colour"
      },
      "primary-btn-hover-text-color": {
        value: "#fff",
        description: "Button Text Colour (Hover)",
      },
      "primary-btn-hover-bgcolor": {
        value: "#757AB5",
        description: "Button Background Colour (Hover)",
      },
      "primary-btn-hover-border-color": {
        value: "#757AB5",
        description: "Button Border Colour (Hover)",
      },
      "primary-btn-active-text-color": {
        value: "#6267A1",
        description: "Button Text Colour (Active)",
      },
      "primary-btn-active-bgcolor": {
        value: "#fff",
        description: "Button Background Colour (Active)",
      },
      "primary-btn-active-border-color": {
        value: "#fff",
        description: "Button Border Colour (Active)",
      },
      "primary-btn-focus-text-color": {
        value: "#4B4C53",
        description: "Button Text Colour (Focus)",
      },
      "primary-btn-focus-bgcolor": {
        value: "#FFDD00",
        description: "Button Background Colour (Focus)",
      },
      "primary-btn-focus-border-color": {
        value: "#FFDD00",
        description: "Button Border Colour (Focus)",
      },
      "primary-btn-disabled-text-color": {
        value: "#4B4C53",
        description: "Button Text Colour (Disabled)",
      },
      "primary-btn-disabled-bgcolor": {
        value: "#F5F5F6",
        description: "Button Background Colour (Disabled)",
      },
      "primary-btn-disabled-border-color": {
        value: "#F5F5F6",
        description: "Button Border Colour (Disabled)",
      }
    }
  },
  args: {
    type: 'primary',
    text: 'Primary Button',
    link: '/',
    icon: null,
    iconAlign: 'left',
    isExternal: false,
    externalText: null,
    isDownload: false,
    downloadFilename: null,
    isDisabled: false,
    onClick: undefined
  },
  argTypes: {
    type: {
      description: 'What type of button/link are we using? Accepted values are "primary", "secondary" or "tertiary".',
      type: { 
        name: 'enum',
        required: true
      },
      control: false,
      table: {}
    },
    text: {
      description: 'The text you want to display on the button/link.',
      type: { 
        name: 'string',
        required: false
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    link: {
      description: 'The URL that you want the button/link to redirect to.',
      type: { 
        name: 'string',
        required: false
      },
      control: false,
      table: {}
    },
    icon: {
      description: 'Do you want an icon to appear?',
      options: ['download', 'externalLink'],
      type: { 
        name: 'enum',
        required: false
      },
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },
    iconAlign: {
      description: 'How do you want the icon to be aligned?',
      options: ['left', 'right'],
      type: { 
        name: 'enum',
        required: false
      },
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },       
    isExternal: {
      description: 'Is this an external link? Boolean.',
      type: { 
        name: 'boolean',
        required: false
      },
      control: {
        type: 'boolean'
      },
      table: {
        category: 'External'
      }
    }, 
    externalText: {
      description: 'The text you want to display in the external link dialog.',
      type: { 
        name: 'string',
        required: false
      },
      control: { 
        type: 'text' 
      },
      table: {
        category: 'External'
      }
    },        
    isDownload: {
      description: 'Is this a download link? Boolean.',
      type: { 
        name: 'boolean',
        required: false
      },
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Download'
      }
    },       
    downloadFilename: {
      description: 'Input the filename that you want to be downloaded (must include extension).',
      type: { 
        name: 'string',
        required: false
      },
      control: {
        type: 'text'
      },
      table: {
        category: 'Download'
      }
    },     
    isDisabled: {
      description: 'Should we disable this button? Boolean.',
      type: { 
        name: 'boolean',
        required: false
      },
      control: {
        type: 'boolean'
      },
      table: {}
    },    
    onClick: {
      description: 'Pass the click event',
      type: { 
        name: 'object',
        required: false
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <Button {...args}>{args.children}</Button>
  )
}

export const Default = Template.bind()
Default.args = {
  type: 'primary',
  text: 'Primary Button',
  link: '/',
  icon: undefined,
  iconAlign: 'left',
  isExternal: false,
  externalText: null,
  isDisabled: false,
  onClick: undefined
}

export const Icon = Template.bind()
Icon.args = {
  icon: 'download'
}

const TemplateDownloadLink = (args) => {
  return (
    <Button {...args}>{args.children}</Button>
  )
}
export const DownloadLink = TemplateDownloadLink.bind()
DownloadLink.args = {
  text: 'Download Link',
  link: '/audio/audio_sample.txt',
  icon: 'download',
  isDownload: true,
  downloadFilename: 'customFilename.txt'
}

const TemplateExternalLink = (args) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(ExternalLink.args.link, '_blank')
    }
  }
  return (
    <>
    <Button {...args} onClick={toggleModal}>
      {args.children}
    </Button>
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
export const ExternalLink = TemplateExternalLink.bind()
ExternalLink.args = {
  link: 'https://www.google.co.uk',
  icon: 'externalLink',
  isExternal: true,
  externalText: <EditorialText align="center" text={<><p>You are about to leave this website, are you sure you want to continue?</p></>} />
}

const TemplateModal = (args) => {    
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }        
  return (
    <>
    <Button {...args} onClick={toggleModal} >
        {args.children}
    </Button>
    <Modal 
      {...ModalArgs.Modal.args}
      show={showModal} 
      onClose={(value) => {
          setShowModal(value)
      }}
    >
      <ModalContent>
        <EditorialText {...EditorialTextArgs.EditorialText.args}  caption="" title="" text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
      </ModalContent>
      <ModalFooter>
        <Button {...PrimaryButtonArgs.default.args} onClick={toggleModal} />
        <Button {...SecondaryButtonArgs.default.args} onClick={toggleModal} />
      </ModalFooter>
    </Modal>
    </>
  )
}
export const ModalLink = TemplateModal.bind()
ModalLink.args = {
    text: 'Open Modal'
}