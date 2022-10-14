import ModalComponent from './Modal'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
import EditorialText from "@atoms/editorialText/EditorialText"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"

export default {
  title: 'Components/Global/Modal',
  component: ModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'Modal pop-ups are overlays that can be launched directly from the page and display information without having to navigate away.',
      }
    },
    cssprops: {            
      "modal-width-medium": {
        value: "80%",
        description: "Modal width (Medium)",
        control: "text"
      },
      "modal-width-large": {
        value: "70%",
        description: "Modal width (Large)",
        control: "text"
      },
      "modal-width-extraLarge": {
        value: "60%",
        description: "Modal width (Extra Large)",
        control: "text"
      },
      "modal-width-extraExtraLarge": {
        value: "60%",
        description: "Modal width (Extra Extra Large)",
        control: "text"
      },
      "modal-headline-font-size": {
        value: "28px",
        description: "Modal Pop-up Headline Font Size",
        control: "text"
      },
      "modal-headline-font-weight": {
        value: "400",
        description: "Modal Pop-up Headline Font Weight",
        control: "text"
      },
      "modal-headline-line-height": {
        value: "33.6px",
        description: "Modal Pop-up Headline Font Weight",
        control: "text"
      },
      "modal-font-size": {
        value: "14px",
        description: "Modal Pop-up Font Size",
        control: "text"
      },
      "modal-font-weight": {
        value: "200",
        description: "Modal Pop-up Font Weight",
        control: "text"
      },
      "modal-line-height": {
        value: "25.6px",
        description: "Modal Pop-up Line Height",
        control: "text"
      },
      "modal-bgcolor": {
        value: "#fff",
        description: "Modal Pop-up Background Colour"
      },
      "modal-text-color": {
        value: "#4b4c53",
        description: "Modal Pop-up Text Colour"
      },
      "modal-border-radius": {
        value: "8px",
        description: "Modal Pop-up Border Radius",
        control: "text"
      },
      "modal-scroll-color": {
        value: "#C3C4CA",
        description: "Modal Pop-up Scrollbar Colour"
      },
      "modal-scroll-radius": {
        value: "20px",
        description: "Modal Pop-up Scrollbar Radius",
        control: "text"
      },      
      "modal-primary-btn-text-color": { 
        value: "#fff", 
        description: "Modal Pop-up Primary Button Text Colour"
      },
      "modal-primary-btn-bgcolor": { 
        value: "#6267A1", 
        description: "Modal Pop-up Primary Button Background Colour"
      },
      "modal-primary-btn-border-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Primary Button Border Colour"
      },
      "modal-primary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Modal Pop-up Primary Button Hover Text Colour"
      },
      "modal-primary-btn-hover-bgcolor": { 
        value: "#757AB5", 
        description: "Modal Pop-up Primary Button Hover Background Colour"
      },
      "modal-primary-btn-hover-border-color": { 
        value: "#757AB5", 
        description: "Modal Pop-up Primary Button Hover Border Colour"
      },
      "modal-primary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Primary Button Active Text Colour"
      },
      "modal-primary-btn-active-bgcolor": { 
        value: "transparent", 
        description: "Modal Pop-up Primary Button Active Background Colour"
      },
      "modal-primary-btn-active-border-color": { 
        value: "#fff", 
        description: "Modal Pop-up Primary Button Active Border Colour"
      },
     "modal-secondary-btn-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Secondary Button Text Colour"
      },
      "modal-secondary-btn-bgcolor": { 
        value: "transparent", 
        description: "Modal Pop-up Secondary Button Background Colour"
      },
      "modal-secondary-btn-border-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Secondary Button Border Colour"
      },
      "modal-secondary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Modal Pop-up Secondary Button Hover Text Colour"
      },
      "modal-secondary-btn-hover-bgcolor": { 
        value: "#6267A1", 
        description: "Modal Pop-up Secondary Button Hover Background Colour"
      },
      "modal-secondary-btn-hover-border-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Secondary Button Hover Border Colour"
      },
      "modal-secondary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Secondary Button Active Text Colour"
      },
      "modal-secondary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Modal Pop-up Secondary Button Active Background Colour"
      },
      "modal-secondary-btn-active-border-color": { 
        value: "#F5F5F6", 
        description: "Modal Pop-up Secondary Button Active Border Colour"
      },
      "modal-tertiary-btn-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Tertiary Button Text Colour"
      },
      "modal-tertiary-btn-hover-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Tertiary Button Hover Text Colour"
      },
      "modal-tertiary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Modal Pop-up Tertiary Button Active Text Colour"
      },
      "modal-tertiary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Modal Pop-up Tertiary Button Active Background Colour"
      }
    }
  },
  args: {
    show: true,
    title: 'Modal Title',
    titleTag: 'h3',
    align: 'left',
    onClose: false
  },
  argTypes: {  
    show: {
      description: 'Is the modal to be shown or hidden?',
      type: { 
        name: 'boolean',
        required: true
      },
      control: false,
      table: {}
    },
    title: {
      description: 'The title to be displayed within the modal pop-up.',
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
      description: 'The heading tag wrapped around the modal title.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    align: {
      description: 'The alignment of the Modal content to be displayed.',
      options: ['left', 'center'],
      type: { 
        name: 'enum' 
      },
      control: {
        type: 'select'
      },
      table: {}
    },    
    onClose: {
      description: 'Track the state of the modal to allow it to be open and closed as required.',
      type: { 
        name: 'boolean',
        required: true
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <ModalComponent {...args}>
      <ModalContent>
        <EditorialText align={args.align}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </EditorialText>
      </ModalContent>
      <ModalFooter>
        <Button {...PrimaryButtonArgs.default.args} />
        <Button {...SecondaryButtonArgs.default.args} />
      </ModalFooter>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})
Modal.args = {
  show: true,
  title: 'Modal Title',
  titleTag: 'h3'
}