import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import ToastBar from './ToastBar'
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'

const ToastBarAcousticData = (props) => {
  const { 
    align, 
    link, 
    text 
  } = props.data
  return (
    <ToastBar text={getValue(text)} align={getSelectionValue(align)}>
      {link?.value?.elements && <ButtonAcousticData data={link?.value?.elements} />}
    </ToastBar>
  )
}

export default ToastBarAcousticData
