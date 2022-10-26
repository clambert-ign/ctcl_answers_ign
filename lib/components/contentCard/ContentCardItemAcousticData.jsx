import ContentCardItem from './ContentCardItem'
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
      <ContentCardItem 
        image={getFullUrl(data?.image?.url)}
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
      </ContentCardItem>
  )  
}

export default ContentCardAcousticData
