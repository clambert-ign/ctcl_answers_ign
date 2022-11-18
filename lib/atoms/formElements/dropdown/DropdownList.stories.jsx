import DropdownListComponent from "./DropdownList"

const options = [
  { value: 'option one', label: 'Option One'},
  { value: 'option two', label: 'Option Two'},
  { value: 'option three', label: 'Option Three is a longer option with more text'},
  { value: 'option four', label: 'Option Four'},
  { value: 'option five', label: 'Option Five'},
  { value: 'option six', label: 'Option Six'},
  { value: 'option seven', label: 'Option Seven'},
  { value: 'option eight', label: 'Option Eight'},
  { value: 'option nine', label: 'Option Nine'},
  { value: 'option ten', label: 'Option Ten'}
]

export default {
    title: 'Atoms/Form elements/Dropdown List', 
    component: DropdownListComponent,
    parameters: {
      docs: {
        description: {
            component: "A dropdown menu is a compact way of displaying multiple choices. It appears upon interaction with an element (such as an icon or button) or when users perform a specific action."
        }
      },
      cssprops: {
        "ddlist-font-size": {
          value: "16px",
          description: "Dropdown List title font size",
          control: "text"
        },
        "ddlist-font-weight": {
          value: "600",
          description: "Dropdown List title font weight",
          control: "text"
        },
        "ddlist-text-color": {
          value: "#4B4C53",
          description: "Dropdown List title font colour"
        },
        "ddlist-control-color": {
          value: "#6267A1",
          description: "Dropdown List control colour"
        },
        "ddlist-control-bgcolor": {
          value: "#f5f5f6",
          description: "Dropdown List control background colour"
        },
        "ddlist-control-border-color": {
          value: "#f5f5f6",
          description: "Dropdown List control border colour"
        },
        "ddlist-control-border-radius": {
          value: "8px",
          description: "Dropdown List control border radius",
          control: "text"
        },
        "ddlist-control-focus-border-color": {
          value: "#6267A1",
          description: "Dropdown List (focus) control border colour"
        },
        "ddlist-menu-border-color": {
          value: "#F5F5F6",
          description: "Dropdown List menu border colour"
        },
        "ddlist-menu-bgcolor": {
          value: "#F5F5F6",
          description: "Dropdown List menu background colour"
        },
        "ddlist-menu-border-radius": {
          value: "8px",
          description: "Dropdown List menu border radius",
          control: "text"
        },
        "ddlist-option-bgcolor": {
          value: "#F5F5F6",
          description: "Dropdown List option background colour"
        },
        "ddlist-option-color": {
          value: "#6267A1",
          description: "Dropdown List option text colour"
        },
        "ddlist-option-hover-bgcolor": {
          value: "#6267A1",
          description: "Dropdown List option (hover) background colour"
        },
        "ddlist-option-hover-border-radius": {
          value: "8px",
          description: "Dropdown List option (hover) border radius",
          control: "text"
        },
        "ddlist-option-selected-bgcolor": {
          value: "#6267A1",
          description: "Dropdown List option (selected) background colour"
        },
        "ddlist-option-selected-border-radius": {
          value: "8px",
          description: "Dropdown List option (selected) border radius",
          control: "text"
        },
        "ddlist-option-selected-tick-color": {
          value: "#fff",
          description: "Dropdown List option (selected) tick colour"
        },
        "ddlist-text-font-size": {
          value: "12px",
          description: "Dropdown List assistive text font size",
          control: "text"
        },
        "ddlist-text-font-weight": {
          value: "400",
          description: "Dropdown List assistive text font weight",
          control: "text"
        },
        "ddlist-disabled-color": {
          value: "#888995",
          description: "Dropdown List disabled colour"
        },
        "ddlist-error-color": {
          value: "#b00020",
          description: "Dropdown List error colour"
        }
      }
    },
    args: {
      id: "input_id_1",
      label: "Label text",
      text: "This field is mandatory",
      placeholder: "Placeholder text",
      options: options,
      defaultValue: options[1],
      isError: false,
      showErrorIcon: true,
      isRequired: false,
      isDisabled: false,
      onChangeHandler: null,
      resetValue: false
    },
    argTypes: {
      id: {
        description: 'The id value of the dropdown list',
        type: { 
          name: 'string'
        },
        control: false,
        table: {}
      },
      label: {
        description: 'The label text of the dropdown list to display',
        type: { 
          name: 'string'
        },
        control: { 
          type: 'text' 
        },
        table: {}
      },
      text: {
        description: 'The assistive text of the dropdown list to display',
        type: { 
          name: 'string'
        },
        control: { 
          type: 'text' 
        },
        table: {}
      },
      placeholder: {
        description: 'The placeholder text of the dropdown list to display',
        type: { 
          name: 'string'
        },
        control: { 
          type: 'text' 
        },
        table: {}
      }, 
      options: {
        description: 'The options of the dropdown list to display',
        type: { 
          name: 'array'
        },
        control: false,
        table: {}
      }, 
      defaultValue: {
        description: 'The default option of the dropdown list to display',
        type: { 
          name: 'array'
        },
        control: false,
        table: {}
      },   
      isError: {
        description: 'Is this dropdown list in error state? Boolean.',
        type: { 
          name: 'boolean' 
        },
        control: {
          type: 'boolean',
        },
        table: {}
      }, 
      showErrorIcon: {
        description: 'Do we show the error icon when in error state?',
        type: { 
          name: 'boolean' 
        },
        control: {
          type: 'boolean',
        },
        table: {}
      },
      isRequired: {
        description: 'Is this dropdown list required? Boolean.',
        type: { 
          name: 'boolean' 
        },
        control: {
          type: 'boolean',
        },
        table: {}
      },    
      isDisabled: {
        description: 'Is this dropdown list disabled? Boolean.',
        type: { 
          name: 'boolean' 
        },
        control: {
          type: 'boolean',
        },
        table: {}
      },    
      onChangeHandler: {
        description: 'Handling the dropdown change event',
        type: { 
          name: 'boolean' 
        },
        control: false,
        table: {}
      },
      resetValue: {
        description: 'Do we need to programmatically reset the value?',
        type: { 
          name: 'boolean' 
        },
        control: false,
        table: {}
      },    
    }
}

const Template = (args) => {

  const handleDropdown = (value) => {
    console.log('Selected value', value)          
  }
  
  return (
    <DropdownListComponent
      {...args}
      name="dropdownDemo"
      onChangeHandler={(selectedOption) => {handleDropdown(selectedOption.value)}}
    />
  )
}
export const DropdownList = Template.bind()
DropdownList.args = {
  id: "input_id_1",
  label: "Which is your favourite?",
  text: "This field is mandatory",
  placeholder: "Please select an option",
  options: options,
  defaultValue: options[1],
  isError: false,
  showErrorIcon: true,
  isRequired: false,
  isDisabled: false
}
