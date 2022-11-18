import { useState } from "react"
import EditorialTextComponent from "./EditorialText"
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
  title: "Atoms/Editorial/Editorial Text",
  component: EditorialTextComponent,
  parameters: {
    docs: {
      description: {
        component: "The Editorial Text atom is used within the Editorial Component to display a heading and text in a variety of positions.",
      }
    },
    cssprops: {
      "et-font-size": {
        value: "16px",
        description: "Editorial Text  Font Size",
        control: "text"
      },
      "et-font-weight": {
        value: "200",
        description: "Editorial Text  Font Weight",
        control: "text"
      },
      "et-line-height": {
        value: "25.6px",
        description: "Editorial Text Font Line Height",
        control: "text"
      },
      "et-text-color": {
        value: "#4B4C53",
        description: "Editorial Text Colour"
      },
      "et-sup-font-size": {
        value: "12px",
        description: "Editorial Text <sup> Font Size",
        control: "text"
      },
      "et-sup-font-weight": {
        value: "700",
        description: "Editorial Text <sup> Font Weight",
        control: "text"
      },   
      "et-sub-font-size": {
        value: "12px",
        description: "Editorial Text <sub> Font Size",
        control: "text"
      },
      "et-sub-font-weight": {
        value: "700",
        description: "Editorial Text <sub> Font Weight",
        control: "text"
      },
      "et-mark-font-weight": {
        value: "600",
        description: "Editorial Text <mark> Font Weight",
        control: "text"
      },
      "et-mark-text-color": {
        value: "#000",
        description: "Editorial Text <mark> Font Colour"
      },
      "et-text-align": {
        value: "left",
        description: "Editorial Text Alignment",
        control: "text"
      },
      "et-mark-bgcolor": {
        value: "#ffff00",
        description: "Editorial Text <mark> Background Colour"
      },
      "et-caption-font-size": {
        value: "16px",
        description: "Editorial Text Caption Font Size",
        control: "text"
      },
      "et-caption-font-weight": {
        value: "600",
        description: "Editorial Text Caption Font Weight",
        control: "text"
      },
      "et-caption-line-height": {
        value: "25.6px",
        description: "Editorial Text Caption Line Height",
        control: "text"
      },
      "et-headline-font-size": {
        value: "28px",
        description: "Editorial Text Headline Font Size",
        control: "text"
      },
      "et-headline-font-weight": {
        value: "400",
        description: "Editorial Text Headline Font Weight",
        control: "text"
      },
      "et-headline-line-height": {
        value: "33.6px",
        description: "Editorial Text Headline Line Height",
        control: "text"
      },
      "et-headline-margin": {
        value: "0 0 24px 0",
        description: "Editorial Text Headline margin",
        control: "text"
      },
      "et-primary-btn-text-color": { 
         value: "#fff", 
         description: "Editorial Text Item Primary Button Text Colour"
       },
       "et-primary-btn-bgcolor": { 
         value: "#6267A1", 
         description: "Editorial Text Item Primary Button Background Colour"
       },
       "et-primary-btn-border-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Primary Button Border Colour"
       },
       "et-primary-btn-hover-text-color": { 
         value: "#fff", 
         description: "Editorial Text Item Primary Button Hover Text Colour"
       },
       "et-primary-btn-hover-bgcolor": { 
         value: "#757AB5", 
         description: "Editorial Text Item Primary Button Hover Background Colour"
       },
       "et-primary-btn-hover-border-color": { 
         value: "#757AB5", 
         description: "Editorial Text Item Primary Button Hover Border Colour"
       },
       "et-primary-btn-active-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Primary Button Active Text Colour"
       },
       "et-primary-btn-active-bgcolor": { 
         value: "transparent", 
         description: "Editorial Text Item Primary Button Active Background Colour"
       },
       "et-primary-btn-active-border-color": { 
         value: "#fff", 
         description: "Editorial Text Item Primary Button Active Border Colour"
       },
      "et-secondary-btn-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Secondary Button Text Colour"
       },
       "et-secondary-btn-bgcolor": { 
         value: "transparent", 
         description: "Editorial Text Item Secondary Button Background Colour"
       },
       "et-secondary-btn-border-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Secondary Button Border Colour"
       },
       "et-secondary-btn-hover-text-color": { 
         value: "#fff", 
         description: "Editorial Text Item Secondary Button Hover Text Colour"
       },
       "et-secondary-btn-hover-bgcolor": { 
         value: "#6267A1", 
         description: "Editorial Text Item Secondary Button Hover Background Colour"
       },
       "et-secondary-btn-hover-border-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Secondary Button Hover Border Colour"
       },
       "et-secondary-btn-active-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Secondary Button Active Text Colour"
       },
       "et-secondary-btn-active-bgcolor": { 
         value: "#F5F5F6", 
         description: "Editorial Text Item Secondary Button Active Background Colour"
       },
       "et-secondary-btn-active-border-color": { 
         value: "#F5F5F6", 
         description: "Editorial Text Item Secondary Button Active Border Colour"
       },
       "et-tertiary-btn-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Tertiary Button Text Colour"
       },
       "et-tertiary-btn-hover-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Tertiary Button Hover Text Colour"
       },
       "et-tertiary-btn-active-text-color": { 
         value: "#6267A1", 
         description: "Editorial Text Item Tertiary Button Active Text Colour"
       },
       "et-tertiary-btn-active-bgcolor": { 
         value: "#F5F5F6", 
         description: "Editorial Text Item Tertiary Button Active Background Colour"
       }
    }
  },
  args: {
    align: 'left',
    caption: 'Lorem ipsum dolor sit amet',
    title: 'Editorial Title Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    titleTag: 'h2',
    columns: 1
  },
  argTypes: {
    align: {
      description: 'The alignment of the editorial text atom.',
      options: ['left', 'right', 'center'],
      type: { 
        name: 'enum', 
        required: true 
      },
      control: {
        type: 'select'
      },
      table: {}
    },
    caption: {
      description: 'The caption to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },    
    title: {
      description: 'The title to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },    
    titleTag: {
      description: 'The heading tag to wrap around the title.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    columns: {
      description: 'The number of columns that the text should be split across.',
      type: { 
        name: 'number', 
        required: false 
      },
      control: {
        type: 'number'
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
    <EditorialTextComponent {...args}>
      <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" onClick={toggleModal} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" iconAlign="right" onClick={toggleModal} />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" onClick={toggleModal} />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol>
      <Button {...PrimaryButtonArgs.default.args} />
      <Button {...SecondaryButtonArgs.default.args} />
      <Button {...TertiaryButtonArgs.default.args} />
    </EditorialTextComponent>
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
          <EditorialTextComponent align="center">
            <p>You are about to leave this website, are you sure you want to continue?</p>
          </EditorialTextComponent>            
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

export const EditorialText = Template.bind({})
EditorialText.args = {
  align: 'left',
  caption: 'Lorem ipsum dolor sit amet',
  title: 'Editorial Title Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  titleTag: 'h2',
  columns: 1
}