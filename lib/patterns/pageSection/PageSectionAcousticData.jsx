import { getValue, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'
import PageSection from './PageSection'
import { getComponentName } from '@services/utilities/acousticMappings'
import EditorialAcousticData from '@patterns/editorial/EditorialAcousticData'
import ContentCardAcousticData from '@components/contentCard/ContentCardAcousticData'
import DividerAcousticData from '@atoms/divider/DividerAcousticData'

const PageSectionAcousticData = (props) => {
  const { 
      backgroundImage, 
      content,
      cssClass, 
      footer,
      sectionId,       
      title
  } = props.data
        
  return (
    <PageSection
      cssClass={getValue(cssClass)}
      id={getValue(sectionId)}
      bgImage={getFullImageStr(backgroundImage.url)}
    >
      {content?.values?.map((content, index) => {
        if (getComponentName(content.type) === 'Editorial') {
          return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'ContentCard') {
          return <ContentCardAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Divider') {
          return <DividerAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
      })}
    </PageSection>
    )
}

export default PageSectionAcousticData
