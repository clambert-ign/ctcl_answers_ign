import { getValue, getFullUrl, getSelectionValue } from '@services/utilities/utilityHelper'
import SectionFooter from './SectionFooter'

const SectionFooterAcousticData = (props) => {
  const { 
    complianceCode
  } = props.data
  
  return (
    <SectionFooter
      complianceCode={getValue(complianceCode)}
    />
  )
}

export default SectionFooterAcousticData