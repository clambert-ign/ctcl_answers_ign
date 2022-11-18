import ImageComponent from './Image'

export default {
  title: 'Atoms/Media/Image',
  component: ImageComponent,
  parameters: {
    docs: {
      description: {
        component: 'Image atoms are single instances of image content that can be placed directly into a page section, component or pattern.',
      }
    },
    cssprops: {  
      "img-font-size": {
        value: "16px",
        description: "Image Atom Default Font Size",
        control: "text"
      },
      "img-font-weight": {
        value: "200",
        description: "Image Atom Default Font Weight",
        control: "text"
      },
      "img-line-height": {
        value: "25.6px",
        description: "Image Atom Default Line Height",
        control: "text"
      },  
      "img-headline-font-size": {
        value: "24px",
        description: "Image Atom Headline Font Size",
        control: "text",
      },  
      "img-headline-font-weight": {
        value: "600",
        description: "Image Atom Headline Font Weight",
        control: "text",
      },
      "img-headline-line-height": {
        value: "38px",
        description: "Image Atom Headline Font Line Height",
        control: "text",
      },
      "img-border-radius": {
        value: "8px",
        description: "Image Atom Poster Border Radius",
        control: "text",
      },
      "img-caption-font-size": {
        value: "16px",
        description: "Image Atom Caption Font Size",
        control: "text",
      },
      "img-caption-font-weight": {
        value: "600",
        description: "Image Atom Caption Font Weight",
        control: "text",
      },
      "img-caption-line-height": {
        value: "22.4px",
        description: "Image Atom Caption Font Line Height",
        control: "text",
      }
    }
  },
  args: {
    title: 'Image Title Lorem ipsum dolor sit amet',
    titleTag: 'h3',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    src: '/images/blue-orange.png',
    altText: 'Sample image alt text',
    position: 'fixed',
    downloadText: 'Download this image'
  },
  argTypes: {
    title: {
      description: 'The media title to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {},
    },
    titleTag: {
      description: 'The heading tag wrapped around the media title.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    caption: {
      description: 'The media caption to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {},
    },
    src: {
      description: 'A path to the location of the media asset.',
      type: { 
        name: 'string', 
        required: true 
      },
      control:false,
      table: {},
    },
    altText: {
      description: 'Is alternative text required to describe the image?',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
      table: {},
    },
    position: {
      description: 'The position of the image media.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    downloadText: {
      description: 'The text to display as an image download link.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {},
    }    
  }
}

const Template = (args) => {
  return (
    <ImageComponent {...args}>{args.children}</ImageComponent>
  )
}

export const Image = Template.bind()
Image.args = {
  title:         'Image Title Lorem ipsum dolor sit amet',
  titleTag:      'h3',
  caption:       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  src:           '/images/blue-orange.png',
  altText:       'Sample image alt text',
  position:      'fixed',
  downloadText:  'Download this image'
}