import { useState } from "react"
import ListComponent from './List'
import ListItem from './ListItem'
import Button from '@atoms/button/Button'
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

export default {
  title: 'Atoms/Editorial/List',
  component: ListComponent,
  parameters: {
    docs: {
      description: {
        component: 'List items Editorial Atom (ordered/unordered).',
      }
    },
    cssprops: {     
      "list-font-size": {
        value: "16px",
        description: "List Font Size",
        control: "text"
      },
      "list-font-weight": {
        value: "200",
        description: "List Font Weight",
        control: "text"
      },
      "list-line-height": {
        value: "25.6px",
        description: "List Font Line Height",
        control: "text"
      },
      "list-text-color": {
        value: "#4b4c53",
        description: "List Font Colour"
      },
      "list-ul-item-padding": {
        value: "16px 0 8px 16px",
        description: "List <ul> Item Padding",
        control: "text"
      },
      "list-ol-item-padding": {
        value: "16px 0 8px 40px",
        description: "List <ol> Item Padding",
        control: "text"
      },
      "list-item-border-color": {
        value: "transparent",
        description: "List Item Border Colour"
      },
      "list-item-before-content-position": {
        value: "10px",
        description: "List Item Custom Content Position",
        control: "text"
      },
      "list-item-before-font-size": {
        value: "16px",
        description: "List Item Font Size",
        control: "text"
      },
      "list-item-tertiary-btn-font-size": {
        value: "16px",
        description: "List Tertiary Button Font Size",
        control: "text"
      },
      "list-item-tertiary-btn-text-color": {
        value: "#6267a1",
        description: "List Tertiary Button Font Colour"
      },
      "list-item-tertiary-btn-hover-text-color": {
        value: "#6267a1",
        description: "List Tertiary Button Hover Font Colour"
      },
      "list-item-tertiary-btn-active-text-color": {
        value: "#6267a1",
        description: "List Tertiary Button Active Font Colour"
      },
      "list-item-tertiary-btn-active-bgcolor": {
        value: "#f5f5f6",
        description: "List Tertiary Button Active Background Colour"
      }
    }
  },
  args: {
    type: 'ordered',
    itemStyle: '',
    columns: 1,
    startValue: 1,
    isReversed: false
  },
  argTypes: {
    type: {
      description: 'The type of list to be displayed.',
      type: { 
        name: 'enum' 
      },
      control: false,
      table: {}
    },
    itemStyle: {
      description: 'For <ul> the type of bullet to display.',
      type: { 
        name: 'string' 
      },
      control: {
        type: 'text'
      },
      table: {
        category: 'Unordered'
      }
    },
    columns: {
      description: 'The the number of columns the list should be displayed across.',
      type: { 
        name: 'number' 
      },
      control: {
        type: 'number'
      },
      table: {}
    },
    startValue: {
      description: 'The start value of the list to be displayed.',
      type: { 
        name: 'number' 
      },
      control: {
        type: 'number'
      },
      table: {        
        category: 'Ordered'
      }
    },      
    isReversed: {
      description: 'Should the list be displayed in reverse order? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Ordered'
      }
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
    <ListComponent {...args}>
      <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="Link" /></ListItem>
      <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="www.Link@example.com sed do eiusmod tempor" /></ListItem>
      <ListItem>Author. publication, 2011. 26(7): p. 1381-8.</ListItem>
      <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.DownloadLink.args} type="tertiary" text="Download this resource" download /></ListItem>
    </ListComponent>    
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

export const Unordered = Template.bind()
Unordered.args = {
  type: 'unordered',
  itemStyle: '',
  columns: 1,
  startValue: 1,
  isReversed: false
}

export const Ordered = Template.bind()
Ordered.args = {
  type: 'ordered',
  itemStyle: '',
  columns: 1,
  startValue: 1,
  isReversed: false
}