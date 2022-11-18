import ImageListComponent from "./ImageList"
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"
import Image from '@atoms/image/Image'

export default {
  title: "Patterns/Image List",
  component: ImageListComponent,
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
    <ImageListComponent {...args}>
      <List columns={2}>
        <ListItem><Image src="/images/quoteImg.png" /></ListItem>
        <ListItem><Image src="/images/quoteImg.png" /></ListItem>
        <ListItem><Image src="/images/quoteImg.png" /></ListItem>
        <ListItem><Image src="/images/quoteImg.png" /></ListItem>
      </List>
    </ImageListComponent>
    </>
  )
}

export const ImageList = Template.bind()
ImageList.parameters = {
  controls: { hideNoControlsWarning: true }
}
