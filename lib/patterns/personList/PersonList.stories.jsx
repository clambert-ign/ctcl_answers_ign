import PersonListComponent from "./PersonList"
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"
import Person from '@components/person/Person'
import Image from '@atoms/image/Image'

export default {
  title: "Patterns/Person List",
  component: PersonListComponent,
  parameters: {
    docs: {
      description: {
        component: "In-line help can be used to provide additional information directly against a piece of content without the need to navigate away from the current view. It is composed by combining a teritiary link atom and modal pop-up component."
      }
    }
  },
  args: {},
  argTypes: {}
}

const Template = (args) => {
  return (
    <>
    <PersonListComponent {...args}>
      <List columns={2}>
        <ListItem><Person image={<Image src="/images/quoteImg.png" />} name="Dr Person Name" role="Lead scientist at ABC" /></ListItem>
        <ListItem><Person image={<Image src="/images/quoteImg.png" />} name="Dr Person Name" role="Lead scientist at ABC" /></ListItem>
        <ListItem><Person image={<Image src="/images/quoteImg.png" />} name="Dr Person Name" role="Lead scientist at ABC" /></ListItem>
        <ListItem><Person image={<Image src="/images/quoteImg.png" />} name="Dr Person Name" role="Lead scientist at ABC" /></ListItem>
      </List>
    </PersonListComponent>
    </>
  )
}

export const PersonList = Template.bind()
PersonList.parameters = {
  controls: { hideNoControlsWarning: true }
}
