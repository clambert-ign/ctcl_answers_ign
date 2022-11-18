import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { setModalOpen, setModalData } from '@src/ducks/modalSlice'

const ButtonAcousticData = (props) => {
  const { 
    behaviourReference,
    clickEvent,
    downloadFilename,
    externalText,
    icon,
    iconAlign,
    id,
    isDisabled,
    isExternal,
    isDownload,
    link,
    text,
    type
  } = props.data

  const dispatch = useDispatch()
  const showModal = useSelector((state) => state?.modal?.open)
    
  const handleClickEvent = (clickEvent) => {
    switch (clickEvent) {
      case 'scroll':
        return scrollTo
      case 'modal':
        return toggleModal
      default:
        return null
    }
  }
  
  const toggleModal = (e) => {
    e.preventDefault() 
    dispatch(setModalOpen(!showModal))
    dispatch(setModalData({content: behaviourReference, type: 'modal'}))
  }

  const toggleExternalDialog = (e) => {
    e.preventDefault() 
    dispatch(setModalOpen(!showModal))
    dispatch(setModalData({content: { text: externalText, link: link }, type: 'dialog'}))
  }
  
  const scrollTo = (e) => {
    e.preventDefault() 
    if(behaviourReference) {
      document.getElementById(getValue(behaviourReference?.value?.elements?.sectionId)).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Button
        type={getSelectionValue(type)} 
        text={getValue(text)}  
        icon={getSelectionValue(icon)} 
        iconAlign={getSelectionValue(iconAlign)} 
        link={getValue(link)}
        isDisabled={getValue(isDisabled)}
        isDownload={getValue(isDownload)}
        downloadFilename={getValue(downloadFilename)}
        isExternal={getValue(isExternal)}
        onClick={getValue(isExternal) ? toggleExternalDialog : handleClickEvent(getSelectionValue(clickEvent))}
      />
    </>
  )
}

export default ButtonAcousticData