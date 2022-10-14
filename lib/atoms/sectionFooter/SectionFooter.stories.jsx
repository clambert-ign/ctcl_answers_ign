import SectionFooterComponent from './SectionFooter'

export default {
  title: 'Atoms/Page Structure/Section Footer',
  component: SectionFooterComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Section Footer atom provides footer text (e.g. Compliance codes) for the Page Section pattern. A Section footer is optional, and should be used when any further detail is required at a section level.'
      }
    },
    cssprops: {  
      "sf-text-color": {
        value: "#4B4C53",
        description: "Section Footer Atom Default Text Colour"
      },   
      "sf-font-size": {
        value: "14px",
        description: "Section Footer Atom Default Font Size",
        control: "text"
      },
      "sf-font-weight": {
        value: "300",
        description: "Section Footer Atom Default Font Weight",
        control: "text"
      },
      "sf-line-height": {
        value: "22.4px",
        description: "Section Footer Atom Default Line Height",
        control: "text"
      }
    }
  },
  args: {
      complianceText: 'KKI/INT/IST/0125'
  },
  argTypes: {
    complianceText: {
      description: 'The heading tag wrapped around the media title.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: 'text',
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <SectionFooterComponent {...args}>{args.children}</SectionFooterComponent>
  )
}

export const SectionFooter = Template.bind()
SectionFooter.args = {
  complianceText: 'KKI/INT/IST/0125'
}


