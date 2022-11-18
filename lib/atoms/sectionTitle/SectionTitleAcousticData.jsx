import { getValue, getFullUrl, getSelectionValue } from '@services/utilities/utilityHelper'
import SectionTitle from './SectionTitle'

const SectionTitleAcousticData = (props) => {
  const { 
    align,
    description,
    title,
    titleTag
  } = props.data
  
  return (
    <SectionTitle
      align={getSelectionValue(align)}
      description={getValue(description)}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
    />
  )
}

export default SectionTitleAcousticData