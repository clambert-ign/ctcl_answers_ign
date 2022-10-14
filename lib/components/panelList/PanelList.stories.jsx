import { useState } from "react"
import PanelListComponent from './PanelList'
import List from '@atoms/list/List'
import ListItem from '@atoms/list/ListItem'
import * as ListArgs from "@atoms/list/List.stories"
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
  title: 'Components/Editorial/Panel List',
  component: PanelListComponent,
  parameters: {
    docs: {
      description: {
        component: 'This panel is used to display content related to the main editorial e.g. references, related links, resources.',
      }
    },
    cssprops: {     
      "pl-font-size": {
        value: "16px",
        description: "Panel List Font Size",
        control: "text"
      },
      "pl-font-weight": {
        value: "200",
        description: "Panel List Font Weight",
        control: "text"
      },
      "pl-line-height": {
        value: "25.6px",
        description: "Panel List Font Line Height",
        control: "text"
      },
      "pl-text-color": {
        value: "#4b4c53",
        description: "Panel List Font Colour"
      },
      "pl-bgcolor": {
        value: "#F5F5F6",
        description: "Panel List Background Colour"
      },
      "pl-border-radius": {
        value: "0 8px 8px 0",
        description: "Panel List Border Radius",
        control: "text"
      },
      "pl-heading-font-size": {
        value: "28px",
        description: "Panel List Heading Font Size",
        control: "text"
      },
      "pl-heading-font-weight": {
        value: "400",
        description: "Panel List Heading Font Weight",
        control: "text"
      },
      "pl-heading-line-height": {
        value: "33.6px",
        description: "Panel List Heading Font Line Height",
        control: "text"
      },
      "pl-item-border-color": {
        value: "#6267a1",
        description: "Panel List Item Border Colour"
      },
      "pl-compliance-font-size": {
        value: "16px",
        description: "Panel List Compliance Text Font Size",
        control: "text"
      },
      "pl-compliance-font-weight": {
        value: "400",
        description: "Panel List Compliance Text Font Weight",
        control: "text"
      },
      "pl-list-tertiary-btn-font-size": {
        value: "16px",
        description: "Panel List Tertiary Button Font Size",
        control: "text"
      },
      "pl-list-tertiary-btn-text-color": {
        value: "#6267a1",
        description: "Panel List Tertiary Button Font Colour"
      },
      "pl-list-tertiary-btn-hover-text-color": {
        value: "#6267a1",
        description: "Panel List Tertiary Button Hover Font Colour"
      },
      "pl-list-tertiary-btn-active-text-color": {
        value: "#6267a1",
        description: "Panel List Tertiary Button Active Font Colour"
      },
      "pl-list-tertiary-btn-active-bgcolor": {
        value: "#f5f5f6",
        description: "Panel List Tertiary Button Active Background Colour"
      }
    }
  },
  args: {
    title: 'Resources &amp; Links',
    titleTag: 'h3',
    complianceCode: 'KKI/INT/KKI/0420'
  },
  argTypes: {
    title: {
      description: 'The panel title to be displayed.',
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
      description: 'The heading tag wrapped around the panel title.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    complianceCode: {
      description: 'The panel compliance code to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
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
    <PanelListComponent {...args}>
      <List {...ListArgs} type="ordered">
        <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="Link" /></ListItem>
        <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="www.Link@example.com sed do eiusmod tempor" /></ListItem>
        <ListItem>Author. publication, 2011. 26(7): p. 1381-8.</ListItem>
        <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.DownloadLink.args} type="tertiary" text="Download this resource" download /></ListItem>
      </List>
    </PanelListComponent>
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

export const PanelList = Template.bind()
PanelList.args = {
  title: 'Resources & Links',
  titleTag: 'h3',
  complianceCode: 'KKI/INT/KKI/0420'
}