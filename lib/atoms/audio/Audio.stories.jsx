import AudioComponent from './Audio'
import Image from "@atoms/image/Image"

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
      "audio-font-size": {
        value: "16px",
        description: "Audio Atom Default Font Size",
        control: "text"
      },
      "audio-font-weight": {
        value: "200",
        description: "Audio Atom Default Font Weight",
        control: "text"
      },
      "audio-line-height": {
        value: "25.6px",
        description: "Audio Atom Default Line Height",
        control: "text"
      },
      "audio-text-color": {
        value: "#4B4C53",
        description: "Audio Atom Default Text Colour",
      }, 
      "audio-bgcolor": {
        value: "#f5f5f6",
        description: "Audio Atom Background Colour"
      },        
      "audio-border-radius": {
        value: "8px",
        description: "Audio Atom Border Radius",
        control: "text"
      }, 
      "audio-image-opacity": {
        value: "0.7",
        description: "Audio Atom Image Opacity",
        control: "text"
      },
      "audio-image-aspect-ratio": {
        value: "1/1",
        description: "Audio Atom Image Aspect Ratio",
        control: "text"
      },
      "audio-image-icon-color": {
        value: "#fff",
        description: "Audio Atom Image Icon Colour"
      },
      "audio-image-icon-hover-color": {
        value: "#fff",
        description: "Audio Atom Image Icon Hover Colour"
      },
      "audio-image-icon-active-color": {
        value: "#fff",
        description: "Audio Atom Image Icon Active Colour"
      },
      "audio-headline-font-size": {
        value: "24px",
        description: "Audio Atom Headline Font Size",
        control: "text"
      },
      "audio-headline-font-weight": {
        value: "600",
        description: "Audio Atom Headline Font Weight",
        control: "text"
      },
      "audio-headline-line-height": {
        value: "38px",
        description: "Audio Atom Headline Font Line Height",
        control: "text"
      },
      "audio-label-font-size": {
        value: "14px",
        description: "Audio Atom Headline Font Size",
        control: "text"
      },  
      "audio-label-font-weight": {
        value: "300",
        description: "Audio Atom Headline Font Weight",
        control: "text"
      },
      "audio-plyr-bgcolor": {
        value: "#f5f5f6",
        description: "Audio Player Background",
      },
      "audio-plyr-control-color": {
        value: "#6267A1",
        description: "Audio Player Controls",
      },
      "audio-plyr-control-color-hover": {
        value: "#6267A1",
        description: "Audio Player Controls (Hover)",
      },
      "audio-plyr-time-color": {
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
        required: false 
      },
      control: false,
      table: {}
    },
    duration: {
      description: 'The duration, in minutes, of the media to be displayed.',
      type: { 
        name: 'string', 
        required: false 
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
      description: 'The image to be displayed.',
      type: { 
        name: 'object', 
        required: false 
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
  description: 'Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consect etur adipi scing elit adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit. Lorem ipsum dolor sit amet, consect etur adipi scing elit adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit.',
  image: '/images/_blue-orange.png',
  src: '/audio/audio_sample.mp3',
  srcType: 'audio/mp3',
  transcript: '/audio/audio_sample.txt'
}

