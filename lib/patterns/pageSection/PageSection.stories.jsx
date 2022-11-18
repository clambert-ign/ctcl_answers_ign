import { useState } from 'react'
import PageSectionComponent from './PageSection'
import SectionTitle from '@atoms/sectionTitle/SectionTitle'
import Editorial from "@patterns/editorial/Editorial"
import * as EditorialArgs from "@patterns/editorial/Editorial.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

export default {
  title: 'Patterns/Global/Page Section',
  component: PageSectionComponent,
  parameters: {
    docs: {
      description: {
        component: 'Page sections define the spaces within which components can be placed on a page. Page sections allow the author to add titles and sub titles to a section, and change the background colour or imagery.'
      }
    },
    cssprops: {     
      "ps-bgcolor": {
        value: "#fff",
        description: "Page Section Background Colour"
      },   
      "ps-text-color": {
        value: "#4B4C53",
        description: "Page Section Text Colour"
      }
    }
  },
  args: {
    bgImage: '',
    bgColor: '',
    textColor: '',
    cssClass: ''
  },
  argTypes: {        
    bgImage: {
      description: 'Background image to be displayed',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
      table: {}
    },
    bgColor: {
      description: 'Background colour to be displayed',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {        
        type: 'color'
      },
      table: {}
    },
    textColor: {
      description: 'Text colour to be displayed',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {        
        type: 'color'
      },
      table: {}
    },
    cssClass: {
      description: 'Custom CSS class(es) to display',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
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
    <PageSectionComponent {...args}>
      <SectionTitle
        title="Section title"
        titleTag="h3"
        description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
      />
      <Editorial {...EditorialArgs.Editorial.args}>
        <EditorialText {...EditorialTextArgs.EditorialText.args}>
          <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" iconAlign="right" onClick={toggleModal} />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" onClick={toggleModal} />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol>      
          <Button {...SecondaryButtonArgs.default.args} />
          <Button {...TertiaryButtonArgs.default.args} />
        </EditorialText>
        <EditorialText {...EditorialTextArgs.EditorialText.args}>
          <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magnav aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>       
          <Button {...SecondaryButtonArgs.default.args} />
          <Button {...TertiaryButtonArgs.default.args} />
        </EditorialText>
      </Editorial>
    </PageSectionComponent>
    <PageSectionComponent {...args} cssClass="demo-black">
      <SectionTitle align="center" title="Section title" titleTag="h3"/>
      <EditorialText {...EditorialTextArgs.EditorialText.args} align="center">
        <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>       
        <Button {...SecondaryButtonArgs.default.args} />
        <Button {...TertiaryButtonArgs.default.args} />
      </EditorialText>
    </PageSectionComponent>
    <PageSectionComponent {...args} cssClass="demo-purple">
      <SectionTitle title="Section title" titleTag="h3" description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
      <Editorial {...EditorialArgs.Editorial.args}>
        <EditorialText {...EditorialTextArgs.EditorialText.args}>
          <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </EditorialText>
        <EditorialText {...EditorialTextArgs.EditorialText.args}>
          <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </EditorialText>
      </Editorial>
    </PageSectionComponent>
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

export const PageSection = Template.bind({})
PageSection.parameters = {
  controls: { 
    hideNoControlsWarning: false
  }
}