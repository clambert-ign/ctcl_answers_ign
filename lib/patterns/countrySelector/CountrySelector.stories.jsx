import CountrySelectorComponent from './CountrySelector'
import Button from '@atoms/button/Button'
import Divider from '@atoms/divider/Divider'
import EditorialText from "@atoms/editorialText/EditorialText"
import List from '@atoms/list/List'
import ListItem from '@atoms/list/ListItem'

export default {
  title: 'Patterns/Global/Country Selector',
  component: CountrySelectorComponent,
  parameters: {
      docs: {
        description: {
          component: 'The Country Selector pattern provides the user a list of countries which link to KKI websites, so that an end user can choose their preferred country and navigate to the relevant website. The pop up dialog is accessed by a link in the global footer.'
        }
      }
  },
  args: {},
  argTypes: {}
}

// Heading + Divider + list => try to remove complexity should just need to reuse other atoms/components
// Only blocker to this is the heading - Editorial Text with just a heading?

const Template = (args) => {
  return (
    <CountrySelectorComponent>
      <EditorialText title="Europe" />
      <Divider />
      <List columns="2">
        <ListItem><Button type="tertiary" link="#" text="United Kingdom" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Italy" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Norway" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Sweden" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Spain" /></ListItem>
      </List>
      <EditorialText title="Middle East" />
      <Divider />
      <List columns="2">
        <ListItem><Button type="tertiary" link="#" text="Turkey" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Egypt" /></ListItem>
        <ListItem><Button type="tertiary" link="#" text="Bahrain" /></ListItem>
      </List>
      <EditorialText title="Asia" />
      <Divider />
      <List columns="2">
        <ListItem><Button type="tertiary" link="#" text="Vietnam" /></ListItem>
      </List>
    </CountrySelectorComponent>
  )
}

export const CountrySelector = Template.bind()
CountrySelector.parameters = {
  controls: { hideNoControlsWarning: true }
}
