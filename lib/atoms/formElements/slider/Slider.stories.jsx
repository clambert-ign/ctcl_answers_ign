import SliderComponent from './Slider'

export default {
  title: 'Atoms/Form elements/Slider',
  normalize: true,
  component: SliderComponent,
  parameters: {
    docs: {
      description: {
        component: "Sliders allow users to make selections from a range of values."
      }
    },
    cssprops: {
      "slider-font-size": {
        value: "16px",
        description: "Slider title font size",
        control: "text"
      },
      "slider-font-weight": {
        value: "600",
        description: "Slider title font weight",
        control: "text"
      },
      "slider-text-color": {
        value: "#4B4C53",
        description: "Slider title font colour"
      },
      "slider-bgcolor": {
        value: "#C3C4CA",
        description: "Slider background colour"
      },
      "slider-fill": {
        value: "#757AB5",
        description: "Slider fill colour"
      },
      "slider-border-radius": {
        value: "8px",
        description: "Slider border radius",
        control: "text"
      },
      "slider-value-label-color": {
        value: "#6267A1",
        description: "Slider value label colour"
      },
      "slider-thumb-bgcolor": {
        value: "#fff",
        description: "Slider thumb background colour"
      },
      "slider-thumb-focus": {
        value: "#6267A1",
        description: "Slider thumb focus outline"
      },
      "slider-text-font-size": {
        value: "12px",
        description: "Slider text font size",
        control: "text"
      },
      "slider-text-font-weight": {
        value: "400",
        description: "Slider text font weight",
        control: "text"
      },
      "slider-disabled": {
        value: "#888995",
        description: "Slider disabled colour"
      },
      "slider-error-color": {
        value: "#b00020",
        description: "Slider error colour"
      }
    }
  },
  args: {
    id: "slider_id_1",
    label: "this is a label",
    text: "This is a mandatory field",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 45,
    measurement: '$',
    isError: false,
    isRequired: false,
    isDisabled: false
  },
  argTypes: {
    id: {
      description: 'The Slider id value to be displayed.',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    label: {
      description: 'The Slider label text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    text: {
      description: 'The Slider text to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    }, 
    min: {
      description: 'The Slider min value to be displayed.',
      type: { 
        name: 'number', 
        required: false 
      },
      control: {
        type: 'number'
      },
      table: {}
    },
    max: {
      description: 'The Slider max value to be displayed.',
      type: { 
        name: 'number', 
        required: false 
      },
      control: {
        type: 'number'
      },
      table: {}
    },
    step: {
      description: 'The Slider step value to be displayed.',
      type: { 
        name: 'number', 
        required: false 
      },
      control: {
        type: 'number'
      },
      table: {}
    },
    defaultValue: {
      description: 'The Slider default value to be displayed.',
      type: { 
        name: 'number', 
        required: false 
      },
      control: {
        type: 'number'
      },
      table: {}
    },    
    measurement: {
      description: 'The Slider measurement value to be displayed.',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },     
    isRequired: {
      description: 'Is this Slider required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },  
    isDisabled: {
      description: 'Is this Slider disabled? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }, 
    isError: {
      description: 'Is this Slider in error state? Boolean.',
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
    <SliderComponent {...args} />
  )
}

export const Slider = Template.bind({});
Slider.args = {
  id: "slider_id_1",
  label: "this is a label",
  text: "This is a mandatory field",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 33,
  measurement: '$',
  isError: false,
  isRequired: false,
  isDisabled: false 
}
