import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import EditorialAcousticData from '@patterns/editorial/EditorialAcousticData'
import ContentCardAcousticData from '@components/contentCard/ContentCardAcousticData'
import ContentCardTileAcousticData from '@components/contentCardTile/ContentCardTileAcousticData'
import { getComponentName } from '@services/utilities/acousticMappings'
import { getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'

const AccordionAcousticData = (props) => {
  const { 
    accordionContentItems 
  } = props.data
  
  return (
    <Accordion>
      {accordionContentItems?.values?.map((accordionItem, index) => {
        return (
          <AccordionItem title={getValue(accordionItem?.elements?.title)} key={index} icon={getSelectionValue(accordionItem?.elements?.icon)}>   
            {
              getValues(accordionItem?.elements?.contentItems).map((content, index) => {
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
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionAcousticData
