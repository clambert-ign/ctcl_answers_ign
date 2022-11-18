import PersonComponent from "./Person"
import Image from '@atoms/image/Image'

export default {
  title: "Components/Editorial/Person",
  component: PersonComponent,
  parameters: {
    docs: {
      description: {
        component: ""
      }
    },
    cssprops: {     
      "person-font-size": {
        value: "16px",
        description: "Person Font Size",
        control: "text"
      },
      "person-font-weight": {
        value: "700",
        description: "Person Font Weight",
        control: "text"
      },
      "person-line-height": {
        value: "25.6px",
        description: "Person Font Line Height",
        control: "text"
      },
      "person-text-color": {
        value: "#4b4c53",
        description: "Person Text Colour"
      },
      "person-role-font-size": {
        value: "14px",
        description: "Person Role Font Size",
        control: "text"
      },
      "person-role-font-weight": {
        value: "300",
        description: "Person Role Font Weight",
        control: "text"
      },
      "person-role-line-height": {
        value: "22.4px",
        description: "Person Role Font Line Height",
        control: "text"
      }
    }
  },
  args: {
    image: <Image src="/images/quoteImg.png" />,
    name: 'Dr Person Name',
    role: 'Job Role'
  },
  argTypes: {
    image: {
      description: 'The Person Component author image to be displayed.',
      type: { 
        name: 'object', 
        required: false 
      },
      control: false,
      table: {}
    },
    name: {
      description: 'The Person Component author name to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: {
        type: 'text'
      },
      table: {}
    },
    role: {
      description: 'The Person Component author role to be displayed.',
      type: { 
        name: 'string', 
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
  return (
    <PersonComponent {...args}>{args.children}</PersonComponent>
  )
}

export const Person = Template.bind()
Person.args = {
  image: <Image src="/images/quoteImg.png" altText="" />,
  name: 'Dr Person Name',
  role: 'Job Role at SomeCompany'
}


