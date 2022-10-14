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
  title: 'Atoms/Buttons & Links/Tertiary Link',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Links are used as a navigation element when the call to action is not the primary function of the component, when Primary and Secondary buttons have already been used within the viewable area or when multiple links are required in a single component.',
      }
    },
    cssprops: {
      "tertiary-btn-text-color": {
        value: "#fff",
        description: "Button Text Colour",
      },
      "tertiary-btn-bgcolor": {
        value: "#6267A1",
        description: "Button Background Colour",
      },
      "tertiary-btn-border-color": {
        value: "#6267A1",
        description: "Button Border Colour",
      },
      "tertiary-btn-hover-text-color": {
        value: "#fff",
        description: "Button Text Colour (Hover)",
      },
      "tertiary-btn-hover-bgcolor": {
        value: "#757AB5",
        description: "Button Background Colour (Hover)",
      },
      "tertiary-btn-hover-border-color": {
        value: "#757AB5",
        description: "Button Border Colour (Hover)",
      },
      "tertiary-btn-active-text-color": {
        value: "#6267A1",
        description: "Button Text Colour (Active)",
      },
      "tertiary-btn-active-bgcolor": {
        value: "#fff",
        description: "Button Background Colour (Active)",
      },
      "tertiary-btn-active-border-color": {
        value: "#fff",
        description: "Button Border Colour (Active)",
      },
      "tertiary-btn-focus-text-color": {
        value: "#4B4C53",
        description: "Button Text Colour (Focus)",
      },
      "tertiary-btn-focus-bgcolor": {
        value: "#FFDD00",
        description: "Button Background Colour (Focus)",
      },
      "tertiary-btn-focus-border-color": {
        value: "#FFDD00",
        description: "Button Border Colour (Focus)",
      },
      "tertiary-btn-disabled-text-color": {
        value: "#4B4C53",
        description: "Button Text Colour (Disabled)",
      },
      "tertiary-btn-disabled-bgcolor": {
        value: "#F5F5F6",
        description: "Button Background Colour (Disabled)",
      },
      "tertiary-btn-disabled-border-color": {
        value: "#F5F5F6",
        description: "Button Border Colour (Disabled)",
      },
    }
  },
  args: {
    type: 'tertiary',
    text: 'Tertiary Link',
    link: '/',
    icon: undefined,
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
        required: true
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
        required: true
      },
      control: false,
      table: {}
    },
    icon: {
      description: 'Do you want an icon to appear?',
      type: { 
        name: 'enum' ,
        required: false 
      },
      options:  ['download', 'externalLink'],
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },
    iconAlign: {
      description: 'How do you want the icon to be aligned?',
      type: { 
        name: 'enum' 
      },
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
      table: {
        category: 'Icon'
      }
    },       
    isExternal: {
      description: 'Is this an external link? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {
        category: 'External'
      }
    },    
    externalText: {
      description: 'The text you want to display in the external link dialog.',
      type: { 
        name: 'string',
        required: true
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
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Download'
      }
    },       
    downloadFilename: {
      description: 'Input the filename that you want to be downloaded (must include extension).',
      type: { 
        name: 'string' 
      },
      control: {
        type: 'text',
      },
      table: {
        category: 'Download'
      }
    },     
    isDisabled: {
      description: 'Should we disable this button? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },    
    onClick: {
      description: 'Pass the click event',
      type: { 
        name: 'object' 
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
  type: 'tertiary',
  text: 'Tertiary Link',
  link: '/',
  icon: undefined,
  iconAlign: 'left',
  isExternal: false,
  externalText: null,
  isDownload: false,
  downloadFilename: null,
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
export const ExternalLink = TemplateExternalLink.bind()
ExternalLink.args = {
  link: 'https://www.google.co.uk',
  icon: 'externalLink',
  isExternal: true,
  externalText: <EditorialText><p>You are about to navigate away from this website, please click on OK to continue.</p></EditorialText>
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
        <EditorialText {...EditorialTextArgs.EditorialText.args} caption="" title="">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </EditorialText>            
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
