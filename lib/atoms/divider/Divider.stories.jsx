import DividerComponent from "./Divider"

export default {
  title: "Atoms/Page Structure/Divider",
  component: DividerComponent,
  parameters: {
    docs: {
      description: {
        component: "Dividers are used to create clear division between content within a component without the need to create new section."
      }
    },
    cssprops: {     
      "div-height": {
        value: "1px",
        description: "Divider Atom Height",
        control: "text"
      },
      "div-margin": {
        value: "32px 0",
        description: "Divider Atom Margin",
        control: "text"
      },
      "div-bgcolor": {
        value: "#4B4C53",
        description: "Divider Atom Background Colour"
      },
      "div-animation-duration": {
        value: "1.2s",
        description: "Divider Atom Animation Duration",
        control: "text"
      }
    }
  },
  args: {
    isAnimated: true
  },
  argTypes: {
    isAnimated: {
      description: 'Is the divider atom to be animated?',
      type: { 
        name: 'boolean', 
        required: true 
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <DividerComponent {...args}>{args.children}</DividerComponent>
  )
}

export const Divider = Template.bind({})
Divider.parameters = {
  controls: { hideNoControlsWarning: true }
}
Divider.args = {
  isAnimated: true
}


