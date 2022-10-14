import GlobalFooterComponent from './GlobalFooter';
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
        description: "Background Colour of Toastbar",
        control: "text"
      },
      "gf-font-size-lg": {
        value: "16px",
        description: "Toastbar Text Colour",
        control: "text"
      },
      "gf-font-weight": {
        value: "300",
        description: "Link Text Colour",
        control: "text"
      },
      "gf-line-height": {
          value: "22.4px",
          description: "Button Text Colour (Hover)",
          control: "text"
      },
      "gf-text-color": {
          value: "#4B4C53",
          description: "Button Text Colour (Active)",
      },
      "gf-scroll-circle-color": {
          value: "#4B4C53",
          description: "Button Background Colour (Active)",
      },
      "gf-scroll-arrow-color": {
          value: "#fff",
          description: "Button Text Colour (Focus)",
      },
      "gf-country-link-font-size": {
          value: "14px",
          description: "Button Background Colour (Focus)",
          control: "text"
      },
      "gf-country-link-font-size-lg": {
          value: "16px",
          description: "Button Background Colour (Focus)",
          control: "text"
      },
      "gf-country-link-font-weight": {
          value: "700",
          description: "Button Text Colour (Disabled)",
          control: "text"
      },
      "gf-country-link-text-color": {
          value: "#6267A1",
          description: "Button Text Colour (Disabled)",
          control: "text"
      },
      "gf-country-link-hover-text-color": {
          value: "#6267A1",
          description: "Button Text Colour (Disabled)",
      },
      "gf-country-link-active-text-color": {
          value: "#6267A1",
          description: "Button Text Colour (Disabled)",
      },
      "gf-country-link-active-bgcolor": {
          value: "#F5F5F6",
          description: "Button Text Colour (Disabled)",
      },
      "gf-menu-link-rows": {
          value: "4",
          description: "Button Text Colour (Disabled)",
          control: "text"
      },
      "gf-menu-link-font-size": {
          value: "14px",
          description: "Button Text Colour (Disabled)",
          control: "text"
      },
      "gf-menu-link-text-color": {
          value: "#4B4C53",
          description: "Button Text Colour (Disabled)",
      },
      "gf-menu-link-hover-text-color": {
          value: "#4B4C53",
          description: "Button Text Colour (Disabled)",
      },
      "gf-menu-link-active-text-color": {
          value: "#4B4C53",
          description: "Button Text Colour (Disabled)",
      },
      "gf-menu-link-active-bgcolor": {
          value: "#F5F5F6",
          description: "Button Text Colour (Disabled)",
      },
    }
  },
  args: {
    complianceCode:  'KKI/INT/IST/0125',
    datePublished:   'August 2021',
    menuItems: {values: [
      { linkText: "Page Link 1", linkURL: "https://www.google.com/", id: 0 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 4 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 5 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 6 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 7 }
    ]}
  },
  argTypes: {        
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
    },
    menuItems: {
      description: 'Menu Items',
      type: { 
        name: "string", 
        required: false 
      },
      control: false,
      table: {}
    },
  }
}

// Template Wrapper
const Template = (args) => { return (
  <>
  <ToastBar {...ToastBarArgs.default.args} toastBarAlign='left'  />
  <GlobalFooterComponent {...args}>
    {args.children}
  </GlobalFooterComponent>
  </>
)} 

// Basic Usage Story
export const GlobalFooter = Template.bind({})
GlobalFooter.args = {
  menuItems: {
    values: [
      { linkText: "Page Link 1", linkURL: "https://www.google.com/", id: 0 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 4 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 5 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 6 },
      { linkText: "Page Link", linkURL: "https://www.google.com/", id: 7 }
    ],
  },
  datePublished: 'August 2021',
  complianceCode: 'KKI/INT/IST/0125',
}