import VideoComponent from './Video'

export default {
  title: 'Atoms/Media/Video',
  component: VideoComponent,
  parameters: {
    docs: {
      description: {
        component: 'Video atoms are single instances of video content that can be placed directly into a page section, component or pattern.'
      }
    },
    cssprops: {
      "video-font-size": {
        value: "16px",
        description: "Video Atom Default Font Size",
        control: "text"
      },
      "video-font-weight": {
        value: "200",
        description: "Video Atom Default Font Weight",
        control: "text"
      },
      "video-line-height": {
        value: "25.6px",
        description: "Video Atom Default Line Height",
        control: "text"
      },
      "video-text-color": {
        value: "#4B4C53",
        description: "Video Atom Default Text Colour",
      }, 
      "video-headline-font-size": {
        value: "24px",
        description: "Video Atom Headline Font Size",
        control: "text"
      },  
      "video-headline-font-weight": {
        value: "600",
        description: "Video Atom Headline Font Weight",
        control: "text"
      },
      "video-headline-line-height": {
        value: "38px",
        description: "Video Atom Headline Font Line Height",
        control: "text"
      },
      "video-poster-border-radius": {
        value: "8px",
        description: "Video Atom Poster Border Radius",
        control: "text"
      },
      "video-poster-aspect-ratio": {
        value: "16/9",
        description: "Video Atom Poster Aspect Ratio",
        control: "text"
      },
      "video-caption-font-size": {
        value: "16px",
        description: "Video Atom Caption Font Size",
        control: "text"
      },
      "video-caption-font-weight": {
        value: "600",
        description: "Video Atom Caption Font Weight",
        control: "text"
      },
      "video-caption-line-height": {
        value: "22.4px",
        description: "Video Atom Caption Font Line Height",
        control: "text"
      }
    }
  },
  args: {
    title: 'Video Title Lorem ipsum dolor sit amet',
    titleTag: 'h3',
    caption: 'Video caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/_blue-orange.png',
    src: '/video/video_sample.mp4',
    srcType: 'video/mp4',
    transcript: '/video/video_sample.txt',
    subtitle: '/video/video_sample.eng.vtt',
    autoPlay: false,
    showControls: true,
    isLooped: false,
    clickToPlay: true
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
      description: 'The media caption text to be displayed.',
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
    },
    subtitle: {
      description: 'A path to the location of the media closed caption file.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
      table: {},
    },
    autoPlay: {
      description: 'Should the video autoplay?',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    }, 
    showControls: {
      description: 'Should the video show its controls?',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    }, 
    isLooped: {
      description: 'Should the video be looped?',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    }, 
    clickToPlay: {
      description: 'Should the video be clicked on to play or pause?',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    }
  }
}

// Template Wrapper
const Template = (args) => {
  return (
    <VideoComponent {...args}>{args.children}</VideoComponent>
  )
}

export const Video = Template.bind({})
Video.args = {
  title:        'Video Title Lorem ipsum dolor sit amet',
  titleTag:     'h3',
  caption:      'Video caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image:        '/images/_blue-orange.png',
  src:          '/video/video_sample.mp4',
  srcType:      'video/mp4',
  transcript:   '/video/video_sample.txt',
  subtitle:     '/video/video_sample.eng.vtt',
  autoPlay:     false,
  showControls: true,
  isLooped:     false,
  clickToPlay:  true
}


