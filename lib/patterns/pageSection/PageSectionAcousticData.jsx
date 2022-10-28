import { getValue, getFullImageStr } from '@services/utilities/utilityHelper'
import PageSection from './PageSection'
import { getComponentName } from '@services/utilities/acousticMappings'
import EditorialAcousticData from '@patterns/editorial/EditorialAcousticData'
import ContentCardAcousticData from '@components/contentCard/ContentCardAcousticData'
import ContentCardTileAcousticData from '@components/contentCardTile/ContentCardTileAcousticData'
import AccordionAcousticData from '@components/accordion/AccordionAcousticData'
import TabsAcousticData from '@components/tabs/TabsAcousticData'
import CarouselAcousticData from '@components/carousel/CarouselAcousticData'
import DividerAcousticData from '@atoms/divider/DividerAcousticData'
import SectionTitleAcousticData from '@atoms/sectionTitle/SectionTitleAcousticData'
import SectionFooterAcousticData from '@atoms/sectionFooter/SectionFooterAcousticData'

const PageSectionAcousticData = (props) => {
  const { 
    backgroundImage, 
    content,
    cssClass, 
    footer,
    sectionId,       
    title
  } = props.data
        
  console.log('page section',props.data)

  return (
    <PageSection
      cssClass={getValue(cssClass)}
      id={getValue(sectionId)}
      bgImage={getFullImageStr(backgroundImage.url)}
    >
      {title?.value && (
        <SectionTitleAcousticData data={title?.value?.elements} />
      )}
      {content?.values?.map((content, index) => {
        if (getComponentName(content.type) === 'Editorial') {
          return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Divider') {
          return <DividerAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'ContentCard') {
          return <ContentCardAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'ContentCardTile') {
          return <ContentCardTileAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Accordion') {
          return <AccordionAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Tabs') {
          return <TabsAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Carousel') {
          return <CarouselAcousticData key={`${content.type}${index}`} data={content?.elements} />
        }
      })}
      {footer?.value && (
        <SectionFooterAcousticData data={footer?.value?.elements} />
      )}
    </PageSection>
  )
}

export default PageSectionAcousticData
