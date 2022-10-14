import AudioComponent from './Audio'

export default {
  title: 'Atoms/Media/Audio',
  component: AudioComponent,
  parameters: {
    docs: {
      description: {
        component: 'Audio atoms are single instances of audio content that can be placed directly into a page section, component or pattern.',
      }
    },
    cssprops: {     
      "ma-font-size": {
        value: "16px",
        description: "Audio Atom Default Font Size",
        control: "text",
      },
      "ma-font-weight": {
        value: "200",
        description: "Audio Atom Default Font Weight",
        control: "text",
      },
      "ma-text-color": {
        value: "#4B4C53",
        description: "Audio Atom Default Text Colour",
      }, 
      "ma-bgcolor": {
        value: "#f5f5f6",
        description: "Audio Atom Background Colour"
      },        
      "ma-border-radius": {
        value: "8px",
        description: "Audio Atom Border Radius",
        control: "text",
      },    
      "ma-label-font-size": {
        value: "14px",
        description: "Audio Atom Headline Font Size",
        control: "text",
      },  
      "ma-label-font-weight": {
        value: "300",
        description: "Audio Atom Headline Font Weight",
        control: "text",
      },
      "ma-headline-font-size": {
        value: "24px",
        description: "Audio Atom Headline Font Size",
        control: "text",
      },  
      "ma-headline-font-weight": {
        value: "600",
        description: "Audio Atom Headline Font Weight",
        control: "text",
      },
      "ma-headline-line-height": {
        value: "38px",
        description: "Audio Atom Headline Font Line Height",
        control: "text",
      },
      "ma-poster-border-radius": {
        value: "8px",
        description: "Audio Atom Poster Border Radius",
        control: "text",
      },
      "ma-plyr-bgcolor": {
        value: "#f5f5f6",
        description: "Audio Player Background",
      },
      "ma-plyr-control-color": {
        value: "#6267A1",
        description: "Audio Player Controls",
      },
      "ma-plyr-control-color-hover": {
        value: "#6267A1",
        description: "Audio Player Controls (Hover)",
      },
      "ma-plyr-time-color": {
        value: "#4B4C53",
        description: "Audio Player Time Colour",
      }
    }
  },
  args: {
    title: 'Audio Title Lorem ipsum dolor sit amet',
    titleTag: 'h3',
    duration: '8 mins',
    description: 'Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit.',
    image: '/images/_blue-orange.png',
    src:  '/audio/audio_sample.mp3',
    srcType: 'audio/mp3',
    transcript: '/audio/audio_sample.txt'
  },
  argTypes: {
    title: {
      description: 'The media title to be displayed.',
      type: { 
        name: 'string', 
        required: true 
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
    duration: {
      description: 'The duration, in minutes, of the media to be displayed.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: { 
        type: 'text' 
      },
      table: {},
    },
    description: {
      description: 'The media description to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {},
    },
    image: {
      description: 'A path to the location of the image file to be displayed.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: false,
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
    srcType: {
      description: 'What type of media are we loading?',
      type: { 
        name: 'string', 
        required: true 
      },
      control: false,
      table: {},
    },
    transcript: {
      description: 'A path to the location of the media transcript file.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: false,
      table: {},
    }
  }
}

const Template = (args) => {
  return (
    <AudioComponent {...args}>{args.children}</AudioComponent>
  )
}
export const Audio = Template.bind()
Audio.args = {
  title: 'Audio Title Lorem ipsum dolor sit amet',
  titleTag: 'h3',
  duration: '8 mins',
  description: 'Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit.',
  image: '/images/_blue-orange.png',
  src: '/audio/audio_sample.mp3',
  srcType: 'audio/mp3',
  transcript: '/audio/audio_sample.txt'
}

