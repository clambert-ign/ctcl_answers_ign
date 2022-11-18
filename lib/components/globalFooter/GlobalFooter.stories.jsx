import { useState } from 'react'
import GlobalFooterComponent from './GlobalFooter';
import Image from "@atoms/image/Image"
import Button from '@atoms/button/Button'
import EditorialText from "@atoms/editorialText/EditorialText"
import List from '@atoms/list/List'
import ListItem from '@atoms/list/ListItem'
import Divider from '@atoms/divider/Divider'
import Modal from '@components/modal/Modal'
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import CountrySelector from '@patterns/countrySelector/CountrySelector'
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"
import ToastBar from "@components/toastBar/ToastBar";
import * as ToastBarArgs from "@components/toastBar/ToastBar.stories";

export default {
  title: 'Components/Global/Global Footer',
  component: GlobalFooterComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Global Footer component provides the user with additional information on the website as well as access to additional links such as Terms & Conditions, Privacy Policy or Regulatory information.'
      }
    },
    cssprops: {
      "gf-font-size": {
        value: "14px",
        description: "Global Footer Component Font Size",
        control: "text"
      },
      "gf-font-weight": {
        value: "300",
        description: "Global Footer Component Font Weight",
        control: "text"
      },
      "gf-line-height": {
        value: "22.4px",
        description: "Global Footer Component Line Height",
        control: "text"
      },
      "gf-text-color": {
        value: "#4B4C53",
        description: "Global Footer Component Text Colour"
      },
      "gf-div-bgcolor": {
        value: "#C3C4CA",
        description: "Global Footer Component Divider Colour"
      },
      "gf-div-margin": {
        value: "25px 0",
        description: "Global Footer Component Divider Margin",
        control: "text"
      },
      "gf-div-height": {
        value: "1px",
        description: "Global Footer Component Divider Height",
        control: "text"
      },
      "gf-scroll-box-shadow": {
        value: "0px 7.48582px 30px rgba(50, 50, 50, 0.2)",
        description: "Global Footer Component Scroll Icon Box Shadow",
        control: "text"
      },
      "gf-scroll-circle-color": {
        value: "#4B4C53",
        description: "Global Footer Component Scroll Icon Circle Colour"
      },
      "gf-scroll-arrow-color": {
        value: "#fff",
        description: "Global Footer Component Scroll Icon Arrow Colour"
      },
      "gf-country-link-font-size": {
        value: "16px",
        description: "Global Footer Component Country Link Font Size",
        control: "text"
      },
      "gf-country-link-font-weight": {
        value: "700",
        description: "Global Footer Component Country Link Font Weight",
        control: "text"
      },
      "gf-country-link-line-height": {
        value: "22.4px",
        description: "Global Footer Component Country Link Line Height",
        control: "text"
      },
      "gf-country-link-text-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Colour"
      },
      "gf-country-link-icon-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Icon Colour"
      },
      "gf-country-link-text-decoration": {
        value: "none",
        description: "Global Footer Component Country Link Decoration",
        control: "text"
      },
      "gf-country-link-bgcolor": {
        value: "transparent",
        description: "Global Footer Component Country Link Background Colour"
      },
      "gf-country-link-hover-text-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Hover Colour"
      },
      "gf-country-link-hover-icon-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Icon Hover Colour"
      },
      "gf-country-link-hover-text-decoration": {
        value: "underline",
        description: "Global Footer Component Country Link Hover Decoration",
        control: "text"
      },
      "gf-country-link-hover-bgcolor": {
        value: "transparent",
        description: "Global Footer Component Country Link Hover Background Colour"
      },      
      "gf-country-link-active-text-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Active Colour"
      },
      "gf-country-link-active-icon-color": {
        value: "#6267A1",
        description: "Global Footer Component Country Link Icon Active Colour"
      },
      "gf-country-link-active-text-decoration": {
        value: "underline",
        description: "Global Footer Component Country Link Active Decoration",
        control: "text"
      },
      "gf-country-link-active-bgcolor": {
        value: "transparent",
        description: "Global Footer Component Country Link Active Background Colour"
      },
      "gf-menu-link-font-size": {
        value: "14px",
        description: "Global Footer Component Menu Link Font Size",
        control: "text"
      },
      "gf-menu-link-font-weight": {
        value: "300",
        description: "Global Footer Component Menu Link Font Weight",
        control: "text"
      },
      "gf-menu-link-line-height": {
        value: "22.4px",
        description: "Global Footer Component Menu Link Line Height",
        control: "text"
      },
      "gf-menu-link-text-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Colour",
      },
      "gf-menu-link-icon-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Icon Colour",
      },
      "gf-menu-link-text-decoration": {
        value: "none",
        description: "Global Footer Component Menu Link Decoration",
        control: "text"
      },
      "gf-menu-link-bgcolor": {
        value: "none",
        description: "Global Footer Component Menu Link Background Colour",
        control: "text"
      },
      "gf-menu-link-hover-text-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Hover Colour",
      },
      "gf-menu-link-hover-icon-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Hover Icon Colour",
      },
      "gf-menu-link-hover-text-decoration": {
        value: "underline",
        description: "Global Footer Component Menu Link Hover Decoration",
        control: "text"
      },
      "gf-menu-link-hover-bgcolor": {
        value: "none",
        description: "Global Footer Component Menu Link Hover Background Colour",
        control: "text"
      },
      "gf-menu-link-active-text-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Active Colour",
      },
      "gf-menu-link-active-icon-color": {
        value: "#4B4C53",
        description: "Global Footer Component Menu Link Active Icon Colour",
      },
      "gf-menu-link-active-text-decoration": {
        value: "underline",
        description: "Global Footer Component Menu Link Active Decoration",
        control: "text"
      },
      "gf-menu-link-active-bgcolor": {
        value: "none",
        description: "Global Footer Component Menu Link Active Background Colour",
        control: "text"
      }
    }
  },
  args: {
    logo: <Image src="/images/kki-logo.png" altText="" />,
    languageIcon: 'globe',
    languageText: 'Country / Language: ',
    languageLink: null,
    datePublished: 'August 2021',
    complianceCode: 'KKI/INT/IST/0125'
  },
  argTypes: {
    logo: {
      description: 'The Global Footer Component logo to be displayed.',
      type: { 
        name: "object", 
        required: false 
      },
      control: false,
      table: {}
    },
    languageIcon: {
      description: 'The Global Footer Component language icon to be displayed.',
      type: { 
        name: "string", 
        required: false 
      },
      control: false,
      table: {}
    },
    languageText: {
      description: 'The Global Footer Component language text to be displayed.',
      type: { 
        name: "string", 
        required: false 
      },
      control: false,
      table: {}
    },
    languageLink: {
      description: 'The Global Footer Component language link to be displayed.',
      type: { 
        name: "object", 
        required: false 
      },
      control: false,
      table: {}
    },
    complianceCode: {
      description: 'The Global Footer Component compliance code to be displayed.',
      type: { 
        name: "string", 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    datePublished: {
      description: 'Compliance Date',
      type: { 
        name: "string", 
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
  const [openModal, setOpenModal] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const toggleDialog = (e) => {
    e.preventDefault()           
    setOpenDialog(!openDialog)
  }
  const openWindow = (e) => {
    e.preventDefault()             
    setOpenDialog(!openDialog)
    if (typeof window !== 'undefined') {
      window.open('https://www.google.com/', '_blank')
    }
  }
  return (
    <>
    <ToastBar {...ToastBarArgs.default.args} align="left"  />
    <GlobalFooterComponent 
      {...args} 
      languageLink={
        <Button type='tertiary' text="United Kingdom" onClick={() => setOpenModal(true)} returnedState={(value) => {setOpenModal(value)}} />
      }
    >
      <List columns="4">
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 1" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 2" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 3" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 4" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 5" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 6" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 7" onClick={toggleDialog} /></ListItem>
        <ListItem><Button type="tertiary" link="https://www.google.com/" text="Page Link 8" onClick={toggleDialog} /></ListItem>
      </List>
    </GlobalFooterComponent>
    <Modal show={openModal} title='Please select your country or region' onClose={setOpenModal}>
      <ModalContent>
        <CountrySelector>
          <EditorialText title="Europe" />
          <Divider />
          <List columns="2">
            <ListItem><Button type="tertiary" link="#" text="United Kingdom" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Italy" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Norway" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Sweden" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Spain" /></ListItem>
          </List>
          <EditorialText title="Middle East" />
          <Divider />
          <List columns="2">
            <ListItem><Button type="tertiary" link="#" text="Turkey" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Egypt" /></ListItem>
            <ListItem><Button type="tertiary" link="#" text="Bahrain" /></ListItem>
          </List>
          <EditorialText title="Asia" />
          <Divider />
          <List columns="2">
            <ListItem><Button type="tertiary" link="#" text="Vietnam" /></ListItem>
          </List>
        </CountrySelector>
      </ModalContent>
    </Modal>
    <ConfirmationDialog>
      <Modal 
        show={openDialog} 
        title="Warning!"
        align="center"
        onClose={(value) => {
          setOpenDialog(value)
        }}
      >
        <ModalContent>
          <EditorialText align="center" text={<><p>You are about to leave this website, are you sure you want to continue?</p></>} />            
        </ModalContent>
        <ModalFooter>
          <Button type="primary" text="Confirm" onClick={openWindow} />
          <Button type="secondary" text="Cancel" onClick={toggleDialog} />
        </ModalFooter>
      </Modal>
    </ConfirmationDialog>
    </>
  )
} 

export const GlobalFooter = Template.bind()
GlobalFooter.args = {
  logo: <Image src="/images/kki-logo.png" altText="" />,
  languageIcon: 'globe',
  languageText: 'Country / Language: ',
  languageLink: null,
  datePublished: 'August 2021',
  complianceCode: 'KKI/INT/IST/0125'
}