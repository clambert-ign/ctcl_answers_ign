import HeroHeader from './HeroHeader'
import Video from "@atoms/video/Video"
import * as VideoArgs from "@atoms/video/Video.stories"
import Image from "@atoms/image/Image"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"

export default {
  title: 'Components/Headers/Hero Header',
  component: HeroHeader,
  parameters: {
    docs: {
      description: {
        component: 'The Hero Header component is used as a high impact alternative to the Standard Header component. It allows the author to display imagery and text headings to provide a more visually rich header area.'
      }
    },
    cssprops: {
      "hh-font-size": {
        value: "24px",
        description: "Base font size",
        control: "text"
      },
      "hh-font-weight": {
        value: "200",
        description: "Base font weight",
        control: "text"
      },
      "hh-line-height": {
        value: "25.6px",
        description: "Base font line height",
        control: "text"
      },
      "hh-text-color": {
        value: "#fff",
        description: "Base text colour"
      },
      "hh-bgcolor": {
        value: "#6267A1",
        description: "Background colour"
      },
      "hh-bgimage-radius": {
        value: "0",
        description: "Background image radius",
        control: "text"
      },
      "hh-bgimage-opacity": {
        value: "0.9",
        description: "Background image opacity",
        control: "text"
      },
      "hh-bgvideo-opacity": {
        value: "0.7",
        description: "Background video opacity",
        control: "text"
      },
      "hh-backlink-text-color": {
        value: "#fff",
        description: "Backlink text colour"
      },
      "hh-backlink-hover-text-color": {
        value: "#F5F5F6",
        description: "Backlink hover colour"
      },
      "hh-backlink-active-text-color": {
        value: "#F5F5F6",
        description: "Backlink active colour"
      },
      "hh-backlink-active-bgcolor": {
        value: "transparent",
        description: "Backlink active background colour"
      },
      "hh-title-font-size": {
        value: "28px",
        description: "Title font size",
        control: "text"
      },
      "hh-title-font-weight": {
        value: "400",
        description: "Title font weight",
        control: "text"
      },
      "hh-title-line-height": {
        value: "33.6px",
        description: "Title line height",
        control: "text"
      },
      "hh-headline-font-size": {
        value: "42px",
        description: "Headline font size",
        control: "text"
      },
      "hh-headline-font-weight": {
        value: "700",
        description: "Headline font weight",
        control: "text"
      },
      "hh-headline-line-height": {
        value: "50.4px",
        description: "Headline line height",
        control: "text"
      },
      "hh-headline-font-size-lg": {
        value: "64px",
        description: "Headline large font size",
        control: "text"
      },
      "hh-headline-font-weight-lg": {
        value: "700",
        description: "Headline large weight",
        control: "text"
      },
      "hh-headline-line-height-lg": {
        value: "76.8px",
        description: "Headline large line height",
        control: "text"
      },
      "hh-description-font-size": {
        value: "24px",
        description: "Description font size",
        control: "text"
      },
      "hh-description-font-weight": {
        value: "200",
        description: "Description weight",
        control: "text"
      },
      "hh-description-line-height": {
        value: "38.4px",
        description: "Description line height",
        control: "text"
      },
      "hh-primary-btn-text-color": {
        value: "#6267A1",
        description: "Primary button text colour"
      },
      "hh-primary-btn-bgcolor": {
        value: "#fff",
        description: "Primary button background colour"
      },
      "hh-primary-btn-border-color": {
        value: "#fff",
        description: "Primary button background colour"
      },
      "hh-primary-btn-hover-text-color": {
        value: "#fff",
        description: "Primary button text colour (Hover)"
      },
      "hh-primary-btn-hover-bgcolor": {
        value: "transparent",
        description: "Primary button background colour (Hover)"
      },
      "hh-primary-btn-hover-border-color": {
        value: "#fff",
        description: "Primary button background colour (Hover)"
      },
      "hh-primary-btn-active-text-color": {
        value: "#6267A1",
        description: "Primary button text colour (Active)"
      },
      "hh-primary-btn-active-bgcolor": {
        value: "#F5F5F6",
        description: "Primary button background colour (Active)"
      },
      "hh-primary-btn-active-border-color": {
        value: "#F5F5F6",
        description: "Primary button background colour (Active)"
      },
      "hh-secondary-btn-text-color": {
        value: "#fff",
        description: "Secondary button text colour"
      },
      "hh-secondary-btn-bgcolor": {
        value: "transparent",
        description: "Secondary button background colour"
      },
      "hh-secondary-btn-border-color": {
        value: "#fff",
        description: "Secondary button background colour"
      },
      "hh-secondary-btn-hover-text-color": {
        value: "#6267A1",
        description: "Secondary button text colour (Hover)"
      },
      "hh-secondary-btn-hover-bgcolor": {
        value: "#fff",
        description: "Secondary button background colour (Hover)"
      },
      "hh-secondary-btn-hover-border-color": {
        value: "#fff",
        description: "Secondary button background colour (Hover)"
      },
      "hh-secondary-btn-active-text-color": {
        value: "#6267A1",
        description: "Secondary button text colour (Active)"
      },
      "hh-secondary-btn-active-bgcolor": {
        value: "#F5F5F6",
        description: "Secondary button background colour (Active)"
      },
      "hh-secondary-btn-active-border-color": {
        value: "#F5F5F6",
        description: "Secondary button background colour (Active)"
      },
      "hh-tertiary-btn-text-color": {
        value: "#fff",
        description: "Tertiary button text colour"
      },
      "hh-tertiary-btn-hover-text-color": {
        value: "#fff",
        description: "Tertiary button text colour (Hover)"
      },
      "hh-tertiary-btn-active-text-color": {
        value: "#fff",
        description: "Tertiary button text colour (Active)"
      },
      "hh-tertiary-btn-active-bgcolor": {
        value: "#6267A1",
        description: "Tertiary button background colour (Active)"
      },
      "hh-sidemedia-title-text-color": {
        value: "#fff",
        description: "Side media title color"
      },
      "hh-sidemedia-title-font-size": {
        value: "42px",
        description: "Side media title font size",
        control: "text"
      },
      "hh-sidemedia-title-font-weight": {
        value: "700",
        description: "Side media title font weight",
        control: "text"
      },
      "hh-sidemedia-title-line-height": {
        value: "50.4px",
        description: "Side media title line height",
        control: "text"
      },
      "hh-sidemedia-caption-text-color": {
        value: "#fff",
        description: "Side media caption color"
      },
      "hh-sidemedia-caption-font-size": {
        value: "16px",
        description: "Side media caption font size",
        control: "text"
      },
      "hh-sidemedia-caption-font-weight": {
        value: "200",
        description: "Side media caption font weight",
        control: "text"
      },
      "hh-sidemedia-caption-line-height": {
        value: "25.6px",
        description: "Side media caption line height",
        control: "text"
      },      
      "hh-sidemedia-teriary-link-text-color": {
        value: "#fff",
        description: "Side media transcript color"
      },      
      "hh-sidemedia-teriary-link-hover-text-color": {
        value: "#fff",
        description: "Side media transcript color (hover)"
      },
      "hh-sidemedia-teriary-link-active-text-color": {
        value: "#fff",
        description: "Side media transcript color (active)"
      }
    }
  },
  args: {
    align: 'center',
    backLink: 'Back to Level 1',
    title: 'This is a page title',
    headingTag: 'h2',
    heading: 'H2 Headline',
    description: 'Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',      
    bgImage: null,
    sideImage: null,
    sideVideo: null,
    bgVideo: null
  },
  argTypes: { 
    align: {
      description: 'The alignment of the Hero Header component.',
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
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
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
      control: false,
      table: {}
    },   
    sideImage: {
      description: 'The component side image to be displayed.',
      type: { 
        name: 'object', 
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
    <HeroHeader {...args}>
      <Button {...PrimaryButtonArgs.Default.args} />
      <Button {...SecondaryButtonArgs.Default.args} />
    </HeroHeader>
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
  sideImage: null,  
  bgImage: null,
  sideVideo: null,
  bgVideo: null,
}

export const SideImage = Template.bind({})
SideImage.args = {
  sideImage: <Image src="/images/hero-side-image-mobile.png" />
}

export const SideVideo = Template.bind({})
SideVideo.args = {
  sideImage: <Image src="/images/hero-side-image-mobile.png" />,
  sideVideo: <Video {...VideoArgs.Video.args} title="" caption="" />
}

export const BackgroundImage = Template.bind({})
BackgroundImage.args = {
  bgImage: <Image src="/images/blue-orange-desktop.png" />
}

export const BackgroundImageShape = Template.bind({})
BackgroundImageShape.args = {
  bgImage: <Image src="/images/purple-shape-background-desktop.png" />
}

export const BackgroundVideo = Template.bind({})
BackgroundVideo.args = {
  bgVideo: <Video src="/video/background-video-sample.mp4" autoPlay={true} isLooped={true} clickToPlay={false} showControls={false} />
}
