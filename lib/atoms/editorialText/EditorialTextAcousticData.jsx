import EditorialText from './EditorialText'
import { getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'
import RichText from '@lib/richText/RichText'
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'

const EditorialTextAcousticData = (props) => {
  const { 
    align, 
    caption, 
    text,
    titleTag, 
    title, 
    columns,
    linksButtons
  } = props.data

  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }
  
  return (     
    <EditorialText 
      align={getSelectionValue(align)}
      caption={getValue(caption)}
      titleTag={getSelectionValue(titleTag)}
      title={getValue(title)}
      columns={getValue(columns)}
    >
      {getRichText(getValue(text))}      
      {(linksButtons && getValues(linksButtons)) && (
        <>
          {getValues(linksButtons).map((button, i) => {
            return (
              <ButtonAcousticData key={i} data={button.elements} />
            )
          })}
        </>
      )}
    </EditorialText>
  )
}

export default EditorialTextAcousticData