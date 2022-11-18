import CalloutQuoteComponent from './CalloutQuote'
import Person from '@components/person/Person'
import Image from '@atoms/image/Image'

export default {
  title: 'Components/Editorial/Callout Quote',
  component: CalloutQuoteComponent,
  parameters: {
    docs: {
      description: {
        component: 'Callout Quote atoms are used to display important information drawn from the main body of text. For example sample quotes by professionals or patients.'
      }
    },
    cssprops: {     
      "cq-font-size": {
        value: "16px",
        description: "Audio Atom Default Font Size",
        control: "text"
      },
      "cq-font-weight": {
        value: "600",
        description: "Audio Atom Default Font Weight",
        control: "text"
      },
      "cq-line-height": {
        value: "26.5px",
        description: "Audio Atom Default Font Weight",
        control: "text"
      },
      "cq-text-color": {
        value: "#4B4C53",
        description: "Audio Atom Default Text Colour"
      },  
      "cq-quote-image-color": {
        value: "#C3C4CA",
        description: "Audio Atom Default Text Colour"
      },    
      "cq-divider-color": {
        value: "#C3C4CA",
        description: "Audio Atom Default Text Colour"
      },    
      "cq-quote-font-size": {
        value: "24px",
        description: "Audio Atom Default Text Colour",
        control: "text"
      },    
      "cq-quote-font-weight": {
        value: "600",
        description: "Audio Atom Default Text Colour",
        control: "text"
      },    
      "cq-quote-line-height": {
        value: "38.4px",
        description: "Audio Atom Default Text Colour",
        control: "text"
      },    
      "cq-quote-text-color": {
        value: "#6267A1",
        description: "Audio Atom Default Text Colour"
      },     
      "cq-role-font-size": {
        value: "14px",
        description: "Audio Atom Default Text Colour",
        control: "text"
      },    
      "cq-role-font-weight": {
        value: "300",
        description: "Audio Atom Default Text Colour",
        control: "text"
      },    
      "cq-role-line-height": {
        value: "22.4px",
        description: "Audio Atom Default Text Colour",
        control: "text"
      }         
    }
  },
  args: {
    text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl metus, rutrum at lacus pellentesque, pulvinar rhoncus nisi.',
    citeLink: 'https://www.huxley.net/bnw/four.html'
  },
  argTypes: {    
    text: {
      description: 'The Callout Quote Atom text to be displayed.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: {
        type: 'text'
      },
      table: {}
    },
    citeLink: {
      description: 'The Callout Quote Atom citation link to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <CalloutQuoteComponent {...args}>
      <Person image={<Image src="/images/quoteImg.png" />} name="Dr Person Name" role="Lead scientist at ABC" />
    </CalloutQuoteComponent>
  )
}

export const CalloutQuote = Template.bind()
CalloutQuote.args = {
  text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl metus, rutrum at lacus pellentesque, pulvinar rhoncus nisi.',
  citeLink: 'https://www.huxley.net/bnw/four.html'
}