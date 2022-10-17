import Divider from './Divider'
import { getValue } from '@services/utilities/utilityHelper'

const DividerAcousticData = (props) => {
  const { 
    isAnimated
  } = props.data

  return (
    <Divider isAnimated={getValue(isAnimated)} />
  )
}

export default DividerAcousticData
