import ShareMenuComponent from "./ShareMenu"
import Button from '@atoms/button/Button'
import PanelList from "@components/panelList/PanelList"
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"

export default {
  title: "Patterns/Share Menu",
  component: ShareMenuComponent,
  parameters: {
    docs: {
      description: {
        component: "Share menu used as part of share btn CTA."
      }
    }
  },
  args: {},
  argTypes: {}
}

const Template = (args) => {
  return (
    <>
    <ShareMenuComponent {...args}>
      <PanelList>
        <List>
          <ListItem><Button type="tertiary" icon="shareFacebook" text="Facebook" link="#" /></ListItem>
          <ListItem><Button type="tertiary" icon="shareTwitter" text="Twitter" link="#" /></ListItem>
          <ListItem><Button type="tertiary" icon="shareEmail" text="Email" link="#" /></ListItem>
          <ListItem><Button type="tertiary" icon="shareLink" text="Copy Link" link="#" /></ListItem>
          <ListItem><Button type="tertiary" icon="sharePrint" text="Print" link="#" /></ListItem>
        </List>
      </PanelList>
    </ShareMenuComponent>
    </>
  )
}

export const ShareMenu = Template.bind()
ShareMenu.parameters = {
  controls: { hideNoControlsWarning: true }
}
