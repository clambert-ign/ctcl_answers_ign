import TextareaComponent from "./Textarea"

export default {
  title: "Atoms/Form Elements/Textarea",
  component: TextareaComponent,
  normalize: true,
  parameters: {
    docs: {
      description: {
        component: "Text input fields allow users to enter text into an interface. They typically appear in forms and dialogs.",
      },
    },
    cssprops: {
      "textarea-font-size": {
        value: "16px",
        description: "Textarea title font size",
        control: "text"
      },
      "textarea-font-weight": {
        value: "600",
        description: "Textarea title font weight",
        control: "text"
      },
      "textarea-text-color": {
        value: "#4B4C53",
        description: "Textarea title font colour"
      },
      "textarea-bgcolor": {
        value: "#f5f5f6",
        description: "Textarea background colour"
      },
      "textarea-border-color": {
        value: "#f5f5f6",
        description: "Textarea border colour"
      },
      "textarea-border-radius": {
        value: "8px",
        description: "Textarea border radius",
        control: "text"
      },
      "textarea-text-font-size": {
        value: "12px",
        description: "Textarea text font size",
        control: "text"
      },
      "textarea-text-font-weight": {
        value: "400",
        description: "Textarea text font weight",
        control: "text"
      },
      "textarea-disabled": {
        value: "#888995",
        description: "Textarea disabled colour"
      },
      "textarea-error-color": {
        value: "#b00020",
        description: "Textarea error colour"
      }
    }
  },
  args: {
    id: "id_value_1",
    label: "Label text",
    text: "Assistive text",
    placeholder: "Placeholder text",
    maxWords: 4,
    isError: false,
    isRequired: false,
    isDisabled: false
  },
  argTypes: {
    id: {
      description: 'The id value of the input to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
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
    maxWords: {
      description: 'The maximum number of words that can be input into the textarea',
      type: { 
        name: 'number'
      },
      control: { 
        type: 'number' 
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
    <TextareaComponent {...args} name="input_id" cols="50" rows="10" />
  )
}

export const Textarea = Template.bind({})
Textarea.args = {
  id: "input_value_1",
  label: "Label text",
  text: "Assistive text",
  placeholder: "Placeholder text",
  maxWords: 4,
  isError: false,
  isRequired: false,
  isDisabled: false
}