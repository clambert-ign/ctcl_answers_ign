import Input from "./Input"

export default {
  title: "Atoms/Form Elements/Input",
  component: Input,
  normalize: true,
  parameters: {
    docs: {
      description: {
        component: "Text input fields allow users to enter text into an interface. They typically appear in forms and dialogs."
      }
    },
    cssprops: {
      "input-font-size": {
        value: "16px",
        description: "Input title font size",
        control: "text"
      },
      "input-font-weight": {
        value: "600",
        description: "Input title font weight",
        control: "text"
      },
      "input-text-color": {
        value: "#4B4C53",
        description: "Input title font colour"
      },
      "input-bgcolor": {
        value: "#f5f5f6",
        description: "Input background colour"
      },
      "input-border-color": {
        value: "#f5f5f6",
        description: "Input border colour"
      },
      "input-border-radius": {
        value: "8px",
        description: "Input border radius",
        control: "text"
      },
      "input-text-font-size": {
        value: "12px",
        description: "Input text font size",
        control: "text"
      },
      "input-text-font-weight": {
        value: "400",
        description: "Input text font weight",
        control: "text"
      },
      "input-disabled": {
        value: "#888995",
        description: "Input disabled colour"
      },
      "input-error-color": {
        value: "#b00020",
        description: "Input error colour"
      }
    }
  },
  args: {
    id: "input_id_1",
    type: "text",
    label: "Label text",
    text: "Assistive text",
    placeholder: "Placeholder text",
    isError: false,
    isRequired: false,
    isDisabled: false
  },
  argTypes: {
    id: {
      description: 'The id value of the input',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    type: {
      description: 'The type of input to display',
      options: ['text', 'password'],
      type: { 
        name: 'enum',
        required: false 
      },
      control: {
        type: 'select'
      },
      table: {}
    },
    label: {
      description: 'The label text of the input to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    text: {
      description: 'The assistive text of the input to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    placeholder: {
      description: 'The placeholder text of the input to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },   
    isError: {
      description: 'Is this input in error state? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },
    isRequired: {
      description: 'Is this input required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },    
    isDisabled: {
      description: 'Is this input disabled? Boolean.',
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
    <Input {...args} name="input_id" size="50" />
  )
}

export const Default = Template.bind()
Default.args = {
  id: "input_value_1",
  type: "text",
  label: "Label text",
  text: "Assistive text",
  placeholder: "Placeholder text",
  isError: false,
  isRequired: false,
  isDisabled: false
}

export const Password = Template.bind()
Password.args = {
  type: "password"
}