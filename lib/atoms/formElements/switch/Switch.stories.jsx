import SwitchComponent from "./Switch";

export default {
  title: "Atoms/Form elements/Switch",
  normalize: true,
  component: SwitchComponent,
  parameters: {
    docs: {
      description: {
        component: "Switches are controls that have two mutually exclusive states (ON and OFF). Switches are best used for changing the state of system functionality and preferences."
      }
    },
    cssprops: {
      "switch-font-size": {
        value: "16px",
        description: "Switch title font size",
        control: "text"
      },
      "switch-font-weight": {
        value: "600",
        description: "Switch title font weight",
        control: "text"
      },
      "switch-text-color": {
        value: "#4B4C53",
        description: "Switch title font colour"
      },
      "switch-off-bgcolor": {
        value: "#888995",
        description: "Slider off state background colour"
      },
      "switch-border-radius": {
        value: "60px",
        description: "Switch border radius",
        control: "text"
      },
      "switch-button-color": {
        value: "#fff",
        description: "Switch button colour"
      },
      "switch-button-border-radius": {
        value: "32px",
        description: "Switch button border radius",
        control: "text"
      },
      "switch-on-bgcolor": {
        value: "#6267A1",
        description: "Switch on state background colour"
      },
      "switch-disabled": {
        value: "#888995",
        description: "Slider disabled colour"
      }
    }
  },
  args: {
    id: "switch_id_1",
    label: "Switch Label",
    isError: false,
    isRequired: false,
    isDisabled: false,
    isChecked: true
  },
  argTypes: {
    labidel: {
      description: 'The id value of the switch to display',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    label: {
      description: 'The label text of the switch to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    isError: {
      description: 'Is this switch in error state? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },
    isRequired: {
      description: 'Is this switch required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    },    
    isDisabled: {
      description: 'Is this switch disabled? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },
    isChecked: {
      description: 'Is this switch checked? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: false,
      table: {}
    }
  }  
}

const Template = (args) => {
  return (
    <SwitchComponent {...args} name="input_id" />
  )
}

export const Switch = Template.bind({})
Switch.args = {
  id: "switch_id_1",
  label: "Switch Label",
  isError: false,
  isRequired: false,
  isDisabled: false,
  isChecked: false
}
