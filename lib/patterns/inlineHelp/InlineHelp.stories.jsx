import { useState } from "react"
import InlineHelpComponent from "./InlineHelp"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"

export default {
  title: "Patterns/Editorial/Inline Help",
  component: InlineHelpComponent,
  parameters: {
    docs: {
      description: {
        component: "In-line help can be used to provide additional information directly against a piece of content without the need to navigate away from the current view. It is composed by combining a teritiary link atom and modal pop-up component."
      }
    }
  },
  args: {},
  argTypes: {}
}

const Template = (args) => {

  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  
  return (
    <>
    <InlineHelpComponent {...args}>
      <Button 
        type='tertiary' 
        text='Did you know?'
        icon="terminology"
        onClick={toggleModal}
      />
    </InlineHelpComponent>    
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
        <Button {...PrimaryButtonArgs.default.args} />
        <Button {...SecondaryButtonArgs.default.args} />
      </ModalFooter>
    </Modal>
    </>
  )
}

export const InlineHelp = Template.bind()
InlineHelp.parameters = {
  controls: { hideNoControlsWarning: true }
}
