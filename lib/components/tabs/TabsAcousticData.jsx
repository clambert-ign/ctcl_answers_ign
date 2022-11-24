import Tabs from './Tabs'
import TabsContent from './TabsContent'
import Button from '@atoms/button/Button'
import EditorialAcousticData from '@patterns/editorial/EditorialAcousticData'
import ContentCardAcousticData from '@components/contentCard/ContentCardAcousticData'
import ContentCardTileAcousticData from '@components/contentCardTile/ContentCardTileAcousticData'
import { getComponentName } from '@services/utilities/acousticMappings'
import { getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'
const TabsAcousticData = (props) => {
  const { 
    align,
    tabContentItems 
  } = props.data
  return (
    <Tabs align={getSelectionValue(align)}>
      {tabContentItems?.values?.map((tabButton, index) => {
        return (
          <Button type="tertiary" text={getValue(tabButton?.elements?.title)} key={index} />
        )
      })}
      {tabContentItems?.values?.map((tabContent, index) => {
        return (
          <TabsContent key={index}>
            {
              getValues(tabContent?.elements?.tabContent).map((content, index) => {
                if(getComponentName(content.type) === 'Editorial') {
                  return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
                }
                if(getComponentName(content.type) === 'ContentCard') {
                  return <ContentCardAcousticData key={`${content.type}${index}`} data={content?.elements} />
                }
                if(getComponentName(content.type) === 'ContentCardTile') {
                  return <ContentCardTileAcousticData key={`${content.type}${index}`} data={content?.elements} />
                }
              })
            }
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
export default TabsAcousticData