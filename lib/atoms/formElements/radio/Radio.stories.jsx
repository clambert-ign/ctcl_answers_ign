import Radio from "./Radio"

export default {
	title: "Atoms/Form Elements/Radio",
	component: Radio,
	parameters: {
		docs: {
			description: {
				component: 'The check box tiles atom are visual versions of the A5 Check boxes. The are used when an end user can only select one option from a list on a form or interaction template.'
			}
		},
    cssprops: {
      "radio-font-size": {
        value: "16px",
        description: "Radio title font size",
        control: "text"
      },
      "radio-font-weight": {
        value: "600",
        description: "Radio title font weight",
        control: "text"
      },
      "radio-text-color": {
        value: "#4B4C53",
        description: "Radio title font colour"
      },
      "radio-bgcolor": {
        value: "#f5f5f6",
        description: "Radio background colour"
      },
      "radio-border-color": {
        value: "#f5f5f6",
        description: "Radio border colour"
      },
      "radio-border-radius": {
        value: "8px",
        description: "Radio border radius",
        control: "text"
      },
      "radio-description-font-size": {
        value: "14px",
        description: "Radio description font size",
        control: "text"
      },
      "radio-description-font-weight": {
        value: "300",
        description: "Radio description font weight",
        control: "text"
      },
      "radio-chkmark-bgcolor": {
        value: "transparent",
        description: "Radio checkmark background color"
      },
      "radio-chkmark-border-radius": {
        value: "16px",
        description: "Radio checkmark border radius",
        control: "text"
      },
      "radio-chkmark-border-color": {
        value: "#6267a1",
        description: "Radio checkmark border colour"
      },
      "radio-chkmark-chked-bgcolor": {
        value: "#6267a1",
        description: "Radio checkmark background colour"
      },
      "radio-chkmark-chked-color": {
        value: "#fff",
        description: "Radio checkmark checked colour"
      },
      "radio-chkmark-chked-border-color": {
        value: "#6267a1",
        description: "Radio checkmark checked border colour"
      },
      "radio-disabled": {
        value: "#888995",
        description: "Radio disabled"
      },
      "radio-chk-disabled": {
        value: "#888995",
        description: "Radio disabled"
      },
      "radio-error-border-color": {
        value: "#b00020",
        description: "Radio error border color"
      },
      "radio-error-chkmark-border-color": {
        value: "#b00020",
        description: "Radio error check border color"
      },
      "radio-error-text-color": {
        value: "#b00020",
        description: "Radio error text color"
      }
    }
	},
  args: {
    type: "default",
    text: "Radio title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    image: undefined,
    errorText: "This field is mandatory",
    isError: false,
    isRequired: false,
    isDisabled: false,
    isChecked: false
  },
  argTypes: {    
    type: {
      description: 'The type of radio to display',
      options: ['default', 'tile', 'image'],
      type: { 
        name: 'enum' 
      },
      control: false,
      table: {}
    },    
    text: {
      description: 'The radio text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },   
    description: {
      description: 'The radio description text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },      
    image: {
      description: 'The radio image to be displayed.',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },      
    errorText: {
      description: 'The radio error text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    isRequired: {
      description: 'Is this radio required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    },  
    isChecked: {
      description: 'Is this radio checked? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    },    
    isDisabled: {
      description: 'Is this radio disable? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }, 
    isError: {
      description: 'Is this radio in error state? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }
  }
}

const Template = (args) => {
	return (
    <div style={{width: 240 + 'px'}}>
      <Radio {...args} name="radio_name" value="radio1" />
    </div>
  )
}

export const Default = Template.bind()

export const tile = Template.bind({})
tile.args = {
  type: "tile",
  image: "/images/checkbox-tiles-icon.png"
}

export const image = Template.bind({})
image.args = {
  type: "image",
  image: "/images/question-checkbox-1.png",
  text: "",
  description: ""
}