import SectionTitleComponent from './SectionTitle'

export default {
  title: 'Atoms/Page Structure/Section Title',
  component: SectionTitleComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Section Title Atom introduces the title and introduction text for Page Section Pattern.'
      }
    },
    cssprops: {  
      "st-text-color": {
        value: "#4B4C53",
        description: "Section Title Atom Default Text Colour"
      },   
      "st-font-size": {
        value: "24px",
        description: "Section Title Atom Default Font Size",
        control: "text"
      },
      "st-font-weight": {
        value: "200",
        description: "Section Title Atom Default Font Weight",
        control: "text"
      },
      "st-line-height": {
        value: "38.4px",
        description: "Section Title Atom Default Line Height",
        control: "text"
      }, 
      "st-headline-font-size": {
        value: "64px",
        description: "Section Title Atom Headline Font Size",
        control: "text"
      },
      "st-headline-font-weight": {
        value: "700",
        description: "Section Title Atom Headline Font Weight",
        control: "text"
      },
      "st-headline-line-height": {
        value: "76.8px",
        description: "Section Title Atom Headline Line Height",
        control: "text"
      }
    }
  },
  args: {
    title: 'Section Title',
    titleTag: 'h2',
    description: 'Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    align: 'left'
  },
  argTypes: {
    title: {
      description: 'The sction title text to be displayed.',
      type: { 
        name: 'string', 
        required: true 
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    titleTag: {
      description: 'The heading tag wrapped around the section title text.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    description: {
      description: 'The sction title description to be displayed.',
      type: { 
        name: 'string', 
        required: false 
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },          
    align: {
      description: 'How do you want the section title to be aligned?',
      options: ['left', 'center'],
      type: { 
        name: 'enum', 
        required: true 
      },
      control: {
        type: 'select'
      },
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <SectionTitleComponent {...args}>{args.children}</SectionTitleComponent>
  )
}

export const SectionTitle = Template.bind()
SectionTitle.args = {
  title:        'Section Title',
  titleTag:     'h2',
  description:  'Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
  align:        'left'
}
