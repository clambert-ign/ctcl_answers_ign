import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import { setModalOpen, setModalData } from '@src/ducks/modalSlice'
import { setShareOpen, setShareData } from '@src/ducks/shareSlice'
import Button from './Button'

const ButtonAcousticData = (props) => {
  const { 
    behaviourReference,
    clickEvent,
    customBehaviourSharingPlatforms,
    downloadFilename,
    emailSubject,
    emailText,
    externalText,
    icon,
    iconAlign,
    id,
    isDisabled,
    isExternal,
    isDownload,
    link,
    shareId,
    shareUrl,
    text,
    twitterHashtags,
    twitterInReplyTo,
    twitterRelated,
    twitterText,
    twitterVia,
    type
  } = props.data

  const btnadRef = useRef(null) 
  const dispatch = useDispatch()
  const showModal = useSelector((state) => state?.modal?.open)
  const showShare = useSelector((state) => state?.share?.open)

  const shareData = {
    customBehaviourSharingPlatforms,
    emailSubject,
    emailText,
    shareId,
    shareUrl,
    twitterHashtags,
    twitterInReplyTo,
    twitterRelated,
    twitterText,
    twitterVia
  }

  const handleClickEvent = (clickEvent) => {
    switch (clickEvent) {
      case 'scroll':
        return scrollTo
      case 'modal':
        return toggleModal
      case 'share':
        return toggleShareMenu
      default:
        return null
    }
  }
  
  const toggleModal = (e) => {
    e.preventDefault() 
    dispatch(setModalOpen(!showModal))
    dispatch(setModalData({content: behaviourReference, type: 'modal'}))
  }

  const toggleShareMenu = (e) => {
    e.preventDefault() 
    dispatch(setShareOpen(!showShare))
    dispatch(setShareData({content: shareData, elementRef: btnadRef?.current}))
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
        id={id}
        ref={btnadRef}
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