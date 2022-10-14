import { useState } from "react"
import GlobalCookieBarComponent from "./GlobalCookieBar"
import Button from '../../atoms/button/Button'
import * as PrimaryButtonArgs from "../../atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "../../atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "../../atoms/button/TertiaryButton.stories"
import Modal from "../../components/modal/Modal"
import ModalContent from '../../components/modal/ModalContent'
import ModalFooter from '../../components/modal/ModalFooter'
import CookiePreferences from "../cookiePreferences/CookiePreferences"
import Switch from "../../atoms/formElements/switch/Switch"

export default {
  title: "**NOT IN USE - DEPRECATED**/Global Cookie Bar",
  component: GlobalCookieBarComponent,
  parameters: {
    docs: {
      description: {
        component: "The Global Cookie component allows the end-user to agree to the data privacy terms and conditions for the site at the beginning of their journey."
      },
    },
    cssprops: {
      "gc-bgcolor": {
        value: "fff",
        description: "Global Cookie Component background color"
      },
      "gc-font-size": {
        value: "16px",
        description: "Global Cookie Component font size",
        control: "text"
      },
      "gc-font-weight": {
        value: "200",
        description: "Global Cookie Component font weight",
        control: "text"
      },
      "gc-line-height": {
        value: "25.6px",
        description: "Global Cookie Component line height",
        control: "text"
      },
      "gc-text-color": {
        value: "#4B4C53",
        description: "Global Cookie Component text colour"
      },
      "gc-headline-font-size": {
        value: "24px",
        description: "Global Cookie Component heading font size",
        control: "text"
      },
      "gc-headline-font-weight": {
        value: "600",
        description: "Global Cookie Component heading font weight",
        control: "text"
      },
      "gc-headline-line-height": {
        value: "38px",
        description: "Global Cookie Component heading line height",
        control: "text"
      },
      "gc-primary-btn-text-color": { 
        value: "#fff", 
        description: "Global Cookie Item Primary Button Text Colour"
      },
      "gc-primary-btn-bgcolor": { 
        value: "#6267A1", 
        description: "Global Cookie Item Primary Button Background Colour"
      },
      "gc-primary-btn-border-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Primary Button Border Colour"
      },
      "gc-primary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Global Cookie Item Primary Button Hover Text Colour"
      },
      "gc-primary-btn-hover-bgcolor": { 
        value: "#757AB5", 
        description: "Global Cookie Item Primary Button Hover Background Colour"
      },
      "gc-primary-btn-hover-border-color": { 
        value: "#757AB5", 
        description: "Global Cookie Item Primary Button Hover Border Colour"
      },
      "gc-primary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Primary Button Active Text Colour"
      },
      "gc-primary-btn-active-bgcolor": { 
        value: "transparent", 
        description: "Global Cookie Item Primary Button Active Background Colour"
      },
      "gc-primary-btn-active-border-color": { 
        value: "#fff", 
        description: "Global Cookie Item Primary Button Active Border Colour"
      },
     "gc-secondary-btn-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Secondary Button Text Colour"
      },
      "gc-secondary-btn-bgcolor": { 
        value: "transparent", 
        description: "Global Cookie Item Secondary Button Background Colour"
      },
      "gc-secondary-btn-border-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Secondary Button Border Colour"
      },
      "gc-secondary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Global Cookie Item Secondary Button Hover Text Colour"
      },
      "gc-secondary-btn-hover-bgcolor": { 
        value: "#6267A1", 
        description: "Global Cookie Item Secondary Button Hover Background Colour"
      },
      "gc-secondary-btn-hover-border-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Secondary Button Hover Border Colour"
      },
      "gc-secondary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Secondary Button Active Text Colour"
      },
      "gc-secondary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Global Cookie Item Secondary Button Active Background Colour"
      },
      "gc-secondary-btn-active-border-color": { 
        value: "#F5F5F6", 
        description: "Global Cookie Item Secondary Button Active Border Colour"
      },
      "gc-tertiary-btn-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Tertiary Button Text Colour"
      },
      "gc-tertiary-btn-hover-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Tertiary Button Hover Text Colour"
      },
      "gc-tertiary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Global Cookie Item Tertiary Button Active Text Colour"
      },
      "gc-tertiary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Global Cookie Item Tertiary Button Active Background Colour"
      },
      "cp-bgcolor": {
        value: "fff",
        description: "Global Cookie Preferences Component background color"
      },
      "cp-font-size": {
        value: "16px",
        description: "Global Cookie Preferences Component font size",
        control: "text"
      },
      "cp-font-weight": {
        value: "200",
        description: "Global Cookie Preferences Component font weight",
        control: "text"
      },
      "cp-line-height": {
        value: "25.6px",
        description: "Global Cookie Preferences Component line height",
        control: "text"
      },
      "cp-description-font-size": {
        value: "24px",
        description: "Global Cookie Preferences Component description font size",
        control: "text"
      },
      "cp-description-font-weight": {
        value: "200",
        description: "Global Cookie Preferences Component description font weight",
        control: "text"
      },
      "cp-description-line-height": {
        value: "38.4px",
        description: "Global Cookie Preferences Component description line height",
        control: "text"
      },
      "cp-headline-font-size": {
        value: "24px",
        description: "Global Cookie Preferences Component heading font size",
        control: "text"
      },
      "cp-headline-font-weight": {
        value: "600",
        description: "Global Cookie Preferences Component heading font weight",
        control: "text"
      },
      "cp-headline-line-height": {
        value: "38px",
        description: "Global Cookie Preferences Component heading line height",
        control: "text"
      }, 
    },
  },
  args: {
    title:  "We need your consent",
    titleTag: "h3",
    description: "This site uses cookies to improve your online experience and measure traffic to this website. By clicking ACCEPT, you are agreeing to Kyowa Kirin's use of cookies. You can change your cookie preferences or find out more in our privacy notice."
  },
  argTypes: {
    titleTag: {
      description: 'The heading tag wrapped around the Cookie Bar title.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    title: {
      description: 'The heading tag wrapped around the Cookie Bar title.',
      type: { 
        name: "string", 
        required: true 
      },
      control: {
        type: "text",
      },
      table: {},
    },
    description: {
      description: 'The heading tag wrapped around the Cookie Bar title.',
      type: { 
        name: "string", 
        required: false 
      },
      control: {
        type: "text",
      },
      table: {},
    }
  },
}

const Template = (args) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  return (
    <>
    <GlobalCookieBarComponent {...args}>
      <Button {...PrimaryButtonArgs.default.args} text="Accept" />
      <Button {...SecondaryButtonArgs.default.args} text="Reject" />      
      <Button {...TertiaryButtonArgs.default.args} text="Cookie settings" onClick={toggleModal} />
    </GlobalCookieBarComponent>    
    <Modal
      show={showModal}
      title="Privacy preference center"
      titleTag="h3"
      onClose={(value) => {
        setShowModal(value)
      }}
    >
      <ModalContent>
        <CookiePreferences 
          CookiePreferenceTitle="Manage consent preferences"
          CookiePreferenceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
          <Switch
            label="Functional cookies"
            name="functionalCookies"
            fullWidth={true}
          />
          <p>
            Cookie description lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <Switch
            label="Strictly necessary cookies (always on)"
            name="necessaryCookies"
            fullWidth={true}
            disabled={true}
            value={true}
          />
          <p>
            Cookie description lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </CookiePreferences>
      </ModalContent>
      <ModalFooter>
        <Button {...PrimaryButtonArgs.default.args} text="Accept all" onClick={toggleModal} />
        <Button {...SecondaryButtonArgs.default.args} text="Accept my choices" onClick={toggleModal} />
        <Button {...TertiaryButtonArgs.default.args} text="Reject" onClick={toggleModal} />
      </ModalFooter>
    </Modal>
    </>
  )
}

export const GlobalCookieBar = Template.bind({})
GlobalCookieBar.args = {
  title: "We need your consent",
  titleTag: "h3",
  description: "This site uses cookies to improve your online experience and measure traffic to this website. By clicking ACCEPT, you are agreeing to Kyowa Kirin's use of cookies. You can change your cookie preferences or find out more in our privacy notice."
}
