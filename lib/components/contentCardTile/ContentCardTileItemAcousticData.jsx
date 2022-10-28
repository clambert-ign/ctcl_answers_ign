import ContentCardTileItem from './ContentCardTileItem'
import Image from "@atoms/image/Image"
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import RichText from '@lib/richText/RichText'
import { getFullUrl, getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'

const ContentCardAcousticData = (props) => {
  const { 
    data 
  } = props
  
  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }

  return (
      <ContentCardTileItem 
        image={<Image src={getFullUrl(data?.image?.url)} altText={getValue(data?.image?.altText)} />}
        title={getValue(data?.title)}
        titleTag={getSelectionValue(data?.titleTag)}
        subtitle={getValue(data?.subtitle)}
        subtitleTag={getSelectionValue(data?.subtitleTag)}
        label={getValue(data?.label)}
        text={getRichText(getValue(data?.text))}
        imageAlign={getSelectionValue(data?.imageAlign)}
      >   
        {(data?.linksButtons && getValues(data?.linksButtons)) && (
          <>
            {getValues(data?.linksButtons).map((button, i) => {
              return (
                <ButtonAcousticData key={i} data={button.elements} />
              )
            })}
          </>
        )}
      </ContentCardTileItem>
  )  
}

export default ContentCardAcousticData
