import GlobalNavigationComponent from "./GlobalNavigation"
import ToastBar from "@components/toastBar/ToastBar"
import * as ToastBarArgs from "@components/toastBar/ToastBar.stories"

export default {
  title: "Components/Global/Global Navigation",
  component: GlobalNavigationComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Global Navigation component provides the primary and secondary level navigation for the site as well as any additional global components such as Logos, Search or User Accounts.'
      }
    },
    cssprops: {
      "gn-background-color": {
        value: "fff",
        description: "Global Navigation Component background color"
      },
      "gn-menu-desktop-font-size": {
        value: "16px",
        description: "Global Navigation Component desktop font size",
        control: "text"
      },
      "gn-menu-desktop-font-weight": {
        value: "400",
        description: "Global Navigation Component desktop font weight",
        control: "text"
      },
      "gn-menu-desktop-line-height": {
        value: "22.4px",
        description: "Global Navigation Component desktop line height",
        control: "text"
      },
      "gn-menu-desktop-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component desktop text colour"
      },
      "gn-menu-desktop-hover-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component desktop hover text colour"
      },
      "gn-menu-desktop-active-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component desktop active text colour"
      },
      "gn-menu-desktop-selected-bgcolor": {
        value: "#4B4C53",
        description: "Global Navigation Component desktop selected text background colour"
      },
      "gn-menu-desktop-selected-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop selected text colour"
      },
      "gn-menu-desktop-selected-hover-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop selected hover text colour"
      },
      "gn-menu-desktop-selected-active-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop selected active text colour"
      },
      "gn-menu-desktop-selected-active-bgcolor": {
        value: "transparent",
        description: "Global Navigation Component desktop selected active text background colour"
      },      
      "gn-menu-desktop-subnav-bgcolor": {
        value: "#4B4C53",
        description: "Global Navigation Component desktop subnav background colour"
      },    
      "gn-menu-desktop-subnav-font-size": {
        value: "14px",
        description: "Global Navigation Component desktop subnav font size",
        control: "text"
      },
      "gn-menu-desktop-subnav-font-weight": {
        value: "400",
        description: "Global Navigation Component desktop subnav font weight",
        control: "text"
      },
      "gn-menu-desktop-subnav-line-height": {
        value: "22.6px",
        description: "Global Navigation Component desktop subnav font line height",
        control: "text"
      },
      "gn-menu-desktop-subnav-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop subnav text colour"
      },
      "gn-menu-desktop-subnav-hover-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop subnav hover text colour"
      },
      "gn-menu-desktop-subnav-active-text-color": {
        value: "#fff",
        description: "Global Navigation Component desktop subnav active text colour"
      },
      "gn-menu-desktop-subnav-active-bgcolor": {
        value: "transparent",
        description: "Global Navigation Component desktop subnav active text background color"
      },
      "gn-menu-desktop-fixed-bgcolor": {
        value: "#fff",
        description: "Global Navigation Component fixed background colour"
      },
      "gn-menu-hamburger-icon-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout burger icon colour"
      },
      "gn-menu-slideout-bgcolor": {
        value: "#fff",
        description: "Global Navigation Component slideout background colour"
      },
      "gn-menu-slideout-icon-close-font-size": {
        value: "24px",
        description: "Global Navigation Component slideout close icon font size",
        control: "text"
      },
      "gn-menu-slideout-icon-close-font-weight": {
        value: "200",
        description: "Global Navigation Component slideout close icon font weight",
        control: "text"
      },
      "gn-menu-slideout-icon-close-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout close icon colour"
      },
      "gn-menu-slideout-active-bgcolor": {
        value: "#F5F5F6",
        description: "Global Navigation Component slideout background colour"
      },
      "gn-menu-slideout-font-size": {
        value: "16px",
        description: "Global Navigation Component slideout font size",
        control: "text"
      },
      "gn-menu-slideout-font-weight": {
        value: "700",
        description: "Global Navigation Component slideout font weight",
        control: "text"
      },
      "gn-menu-slideout-line-height": {
        value: "19.2px",
        description: "Global Navigation Component slideout line height",
        control: "text"
      },
      "gn-menu-slideout-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout text colour"
      },
      "gn-menu-slideout-hover-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout hover text colour"
      },
      "gn-menu-slideout-active-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout active text colour"
      },
      "gn-menu-slideout-active-bgcolor": {
        value: "transparent",
        description: "Global Navigation Component slideout active text background colour"
      },
      "gn-menu-slideout-subnav-font-size": {
        value: "16px",
        description: "Global Navigation Component slideout subnav font size",
        control: "text"
      },
      "gn-menu-slideout-subnav-font-weight": {
        value: "600",
        description: "Global Navigation Component slideout subnav font weight",
        control: "text"
      },
      "gn-menu-slideout-subnav-line-height": {
        value: "19.2px",
        description: "Global Navigation Component slideout subnav line height",
        control: "text"
      },
      "gn-menu-slideout-subnav-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout subnav text colour"
      },
      "gn-menu-slideout-subnav-hover-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout subnav hover text colour"
      },
      "gn-menu-slideout-subnav-active-text-color": {
        value: "#4B4C53",
        description: "Global Navigation Component slideout subnav active text colour"
      },
      "gn-menu-slideout-subnav-active-bgcolor": {
        value: "transparent",
        description: "Global Navigation Component slideout subnav active background colour"
      }
    }
  },
  args: {
    menuData:  {
      menu: [
        {
          menuItem: { linkUrl: '/', linkText: 'Menu 1' },
          menuItems: [
            { linkUrl: '/', linkText: 'Go to Menu 1' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2 Menu 1 Level 2 Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' },
            { linkUrl: '/', linkText: 'Menu 1 Level 2' }
          ]
        },
        {
          menuItem: { linkUrl: '/', linkText: 'Menu 2' },
          menuItems: [
            { linkUrl: '/', linkText: 'Go to Menu 2' },
            { linkUrl: '/', linkText: 'Menu 2 Level 2' },
            { linkUrl: '/', linkText: 'Menu 2 Level 2' },
            { linkUrl: '/', linkText: 'Menu 2 Level 2' },
            { linkUrl: '/', linkText: 'Menu 2 Level 2' },
            { linkUrl: '/', linkText: 'Menu 2 Level 2' }
          ]
        },
        {
          menuItem: { linkUrl: '/', linkText: 'Menu 3' },
          menuItems: [
            { linkUrl: '/', linkText: 'Go to Menu 3' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' },
            { linkUrl: '/', linkText: 'Menu 3 Level 2' }
          ]
        },
        {
          menuItem: { linkUrl: '/', linkText: 'Menu 4' },
          menuItems: [
            { linkUrl: '/', linkText: 'Go to Menu 4' },
            { linkUrl: '/', linkText: 'Menu 4 Level 2' },
            { linkUrl: '/', linkText: 'Menu 4 Level 2' },
            { linkUrl: '/', linkText: 'Menu 4 Level 2' },
            { linkUrl: '/', linkText: 'Menu 4 Level 2' },
            { linkUrl: '/', linkText: 'Menu 4 Level 2' }
          ]
        }
      ]
    },
    logoText: "KKI",
    logo: "/images/your-logo.png"
  },
  argTypes: {
    menuData: {
      description: "Menu Items",
      type: { 
        name: "object", 
        required: false 
      },
      control: false,
      table: {}
    },
    logoText: {
      description: "Your Logo",
      type: { 
        name: "string", 
        required: false 
      },
      control: false,
      table: {},
    },
    logo: {
      description: "Display your Logo",
      type: { 
        name: "string", 
        required: false 
      },
      control: false,
      table: {},
    },
  },
}

// Template Wrapper
const Template = (args) => {
  return (
    <>
      <div style={{height: 3000 + 'em'}}>
        <ToastBar {...ToastBarArgs.default.args}  />
        <GlobalNavigationComponent {...args}>{args.children}</GlobalNavigationComponent>
      </div>
    </>
  )
}

// Basic Usage Story
export const GlobalNavigation = Template.bind({})
GlobalNavigation.parameters = {
  controls: { hideNoControlsWarning: true }
}
