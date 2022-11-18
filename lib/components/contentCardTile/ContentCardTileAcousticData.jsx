import ContentCardTile from './ContentCardTile'
import ContentCardTileItem from './ContentCardTileItem'
import Image from "@atoms/image/Image"
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import RichText from '@lib/richText/RichText'
import { getFullUrl, getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'

const ContentCardAcousticData = (props) => {
  const { 
    contentCardItems 
  } = props.data
  
  const getRichText = (text) => {
    if (!text) return null
    return <RichText data={text} />
  }

  return (
    <ContentCardTile>
      {contentCardItems?.values?.map((contentCardItem, index) => {
        return (
          <ContentCardTileItem 
            key={index}
            image={<Image src={getFullUrl(contentCardItem?.elements?.image?.url)} altText={getValue(contentCardItem?.elements?.image?.altText)} />}
            title={getValue(contentCardItem?.elements?.title)}
            titleTag={getSelectionValue(contentCardItem?.elements?.titleTag)}
            subtitle={getValue(contentCardItem?.elements?.subtitle)}
            subtitleTag={getSelectionValue(contentCardItem?.elements?.subtitleTag)}
            label={getValue(contentCardItem?.elements?.label)}
            text={getRichText(getValue(contentCardItem?.elements?.text))}
            imageAlign={getSelectionValue(contentCardItem?.elements?.imageAlign)}
          >   
            {(contentCardItem?.elements?.linksButtons && getValues(contentCardItem?.elements?.linksButtons)) && (
              <>
                {getValues(contentCardItem?.elements?.linksButtons).map((button, i) => {
                  return (
                    <ButtonAcousticData key={i} data={button.elements} />
                  )
                })}
              </>
            )}
          </ContentCardTileItem>
        )
      })}
    </ContentCardTile>
  )
  
}

export default ContentCardAcousticData
