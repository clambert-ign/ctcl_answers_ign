import Checkbox from "./Checkbox"

export default {
	title: "Atoms/Form Elements/Checkbox",
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: 'The check box tiles atom are visual versions of the A5 Check boxes. The are used when an end user can only select one option from a list on a form or interaction template.'
			}
		},
    cssprops: {
      "chkbox-font-size": {
        value: "16px",
        description: "Checkbox title font size",
        control: "text"
      },
      "chkbox-font-weight": {
        value: "600",
        description: "Checkbox title font weight",
        control: "text"
      },
      "chkbox-text-color": {
        value: "#4B4C53",
        description: "Checkbox title font colour"
      },
      "chkbox-bgcolor": {
        value: "#f5f5f6",
        description: "Checkbox background colour"
      },
      "chkbox-border-color": {
        value: "#f5f5f6",
        description: "Checkbox border colour"
      },
      "chkbox-border-radius": {
        value: "8px",
        description: "Checkbox border radius",
        control: "text"
      },
      "chkbox-description-font-size": {
        value: "14px",
        description: "Checkbox description font size",
        control: "text"
      },
      "chkbox-description-font-weight": {
        value: "300",
        description: "Checkbox description font weight",
        control: "text"
      },
      "chkbox-chkmark-bgcolor": {
        value: "transparent",
        description: "Checkbox checkmark background color"
      },
      "chkbox-chkmark-border-radius": {
        value: "4px",
        description: "Checkbox checkmark border radius",
        control: "text"
      },
      "chkbox-chkmark-border-color": {
        value: "#6267a1",
        description: "Checkbox checkmark border colour"
      },
      "chkbox-chkmark-chked-bgcolor": {
        value: "#6267a1",
        description: "Checkbox checkmark background colour"
      },
      "chkbox-chkmark-chked-color": {
        value: "#fff",
        description: "Checkbox checkmark checked colour"
      },
      "chkbox-chkmark-chked-border-color": {
        value: "#6267a1",
        description: "Checkbox checkmark checked border colour"
      },
      "chkbox-disabled": {
        value: "#888995",
        description: "Checkbox disabled"
      },
      "chkbox-chk-disabled": {
        value: "#888995",
        description: "Checkbox disabled"
      },
      "chkbox-error-border-color": {
        value: "#b00020",
        description: "Checkbox error border color"
      },
      "chkbox-error-chkmark-border-color": {
        value: "#b00020",
        description: "Checkbox error check border color"
      },
      "chkbox-error-text-color": {
        value: "#b00020",
        description: "Checkbox error text color"
      }
    }
	},
  args: {
    id: "chkbox_value_1",
    type: "default",
    text: "Checkbox title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    image: undefined,
    errorText: "This field is mandatory",
    isError: false,
    isRequired: false,
    isDisabled: false,
    isChecked: false
  },
  argTypes: {  
    id: {
      description: 'The checkbox id value to display',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },    
    type: {
      description: 'The type of checkbox to display',
      options: ['default', 'tile', 'image'],
      type: { 
        name: 'enum' 
      },
      control: false,
      table: {}
    },    
    text: {
      description: 'The Checkbox text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },       
    description: {
      description: 'The Checkbox description text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },      
    image: {
      description: 'The Checkbox image to be displayed.',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },      
    errorText: {
      description: 'The Checkbox error text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    isRequired: {
      description: 'Is this Checkbox required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    },  
    isChecked: {
      description: 'Is this Checkbox checked? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    },    
    isDisabled: {
      description: 'Is this Checkbox disabled? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }, 
    isError: {
      description: 'Is this Checkbox in error state? Boolean.',
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
      <Checkbox {...args} name="checkbox_name" value="checkbox1" />
    </div>
  )
}

export const Default = Template.bind()
Default.args = {
  id: "chkbox_value_1",
  type: "default",
  text: "Checkbox title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  image: undefined,
  errorText: "This field is mandatory",
  isError: false,
  isRequired: false,
  isDisabled: false,
  isChecked: false
}

export const tile = Template.bind()
tile.args = {
  type: "tile",
  image: "/images/checkbox-tiles-icon.png"
}

export const image = Template.bind()
image.args = {
  type: "image",
  image: "/images/question-checkbox-1.png",
  text: "",
  description: ""
}