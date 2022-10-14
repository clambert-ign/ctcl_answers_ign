import HeroHeader from '../heroHeader/HeroHeader'
import Image from "@atoms/image/Image"


export default {
  title: 'Components/Headers/Standard Header',
  component: HeroHeader,
  parameters: {
    docs: {
      description: {
        component: 'The Standard Header component provides orientation for the user by displaying the name of the active page and its location within the website.',
      }
    },
    cssprops: {            
      "sh-font-size": {
        value: "24px",
        description: "Base font size",
        control: "text"
      },
      "sh-font-weight": {
        value: "200",
        description: "Base font weight",
        control: "text"
      },
      "sh-line-height": {
        value: "25.6px",
        description: "Base font line height",
        control: "text"
      },
      "sh-text-color": {
        value: "#fff",
        description: "Base text colour"
      },
      "sh-bgcolor": {
        value: "#6267A1",
        description: "Background colour"
      },
      "sh-bgimage-radius": {
        value: "0",
        description: "Background image radius",
        control: "text"
      },
      "sh-backlink-text": {
        value: "#fff",
        description: "Backlink text colour"
      },
      "sh-backlink-hover-text": {
        value: "#F5F5F6",
        description: "Backlink hover colour"
      },
      "sh-backlink-active-text": {
        value: "#F5F5F6",
        description: "Backlink active colour"
      },
      "sh-backlink-active-bgcolor": {
        value: "transparent",
        description: "Backlink active background colour"
      },
      "sh-title-font-size": {
        value: "28px",
        description: "Title font size",
        control: "text"
      },
      "sh-title-font-weight": {
        value: "400",
        description: "Title font weight",
        control: "text"
      },
      "sh-title-line-height": {
        value: "33.6px",
        description: "Title line height",
        control: "text"
      },
      "sh-headline-font-size": {
        value: "42px",
        description: "Headline font size",
        control: "text"
      },
      "sh-headline-font-weight": {
        value: "700",
        description: "Headline font weight",
        control: "text"
      },
      "sh-headline-line-height": {
        value: "50.4px",
        description: "Headline line height",
        control: "text"
      },
      "sh-headline-font-size-lg": {
        value: "64px",
        description: "Headline large font size",
        control: "text"
      },
      "sh-headline-font-weight-lg": {
        value: "700",
        description: "Headline large weight",
        control: "text"
      },
      "sh-headline-line-height-lg": {
        value: "76.8px",
        description: "Headline large line height",
        control: "text"
      },
      "sh-description-font-size": {
        value: "24px",
        description: "Description font size",
        control: "text"
      },
      "sh-description-font-weight": {
        value: "200",
        description: "Description weight",
        control: "text"
      },
      "sh-description-line-height": {
        value: "38.4px",
        description: "Description line height",
        control: "text"
      }
    }
  },
  args: {
    align: 'center',
    backLink: 'Back to Level 1',
    title: 'This is a page title',
    heading: 'H2 Headline',
    headingTag: 'h2',
    description: 'Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
    bgImage: null
  },
  argTypes: {   
    align: {
      description: 'The alignment of the Standard Header component.',
      options: ['left', 'center'],
      type: { 
        name: 'enum',
        required: false 
      },
      control: {
        type: 'select'
      },
      table: {}
    },     
    backLink: {
      description: 'The component back link text to be displayed.',
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
      description: 'The component title to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },      
    heading: {
      description: 'The component heading to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },    
    headingTag: {
      description: 'The heading tag to wrap around the component heading.',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      type: { 
        name: 'enum', 
        required: true 
      },
      control: {
        type: 'select'
      },
      table: {}
    }, 
    description: {
      description: 'The component description to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },         
    bgImage: {
      description: 'The component background image to be displayed.',
      type: { 
        name: 'object', 
        required: false 
      },
      control: {
        type: 'object'
      },
      table: {
        disable: true
      }
    },   
    sideImage: {
      description: 'The component side image to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
      table: {},
    },
    sideVideo: {
      description: 'The component side video to be displayed.',
      type: { 
        name: 'object', 
        required: false 
      },
      control: false,
      table: {}
    },
    bgVideo: {
      description: 'The component background video to be displayed.',
      type: { 
        name: 'object', 
        required: false 
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <HeroHeader {...args}>{args.children}</HeroHeader>
  )
}

export const Default = Template.bind({})
Default.args = {
  align: 'center',
  backLink: 'Back to Level 1',
  title: 'This is a page title',
  heading: 'H2 Headline',
  headingTag: 'h2',
  description: 'Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
  bgImage: null
}

export const BackgroundImageGraphic = Template.bind({})
BackgroundImageGraphic.args = {
  bgImage: <Image src="/images/blue-orange-desktop.png" />
}

export const BackgroundImageShape = Template.bind({})
BackgroundImageShape.args = {
  bgImage: <Image src="/images/purple-shape-background-desktop.png" />
}