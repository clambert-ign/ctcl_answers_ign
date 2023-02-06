import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import { setModalOpen, setModalData } from '@src/ducks/modalSlice'
import { setShareOpen, setShareData } from '@src/ducks/shareSlice'
import Button from './Button'

const ButtonAcousticData = (props) => {
  const { 
    analyticsEventName,
    analyticsEventValue,
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

  const handleAnalyticsEvent = () => {
    switch (getValue(analyticsEventName)) {
      case 'click':
        console.log('Analytics: Event: Click')
        dataLayer.push({event: 'click', event_name: 'click', event_label: getValue(link)});
        //hyperlink URL : getValue(link)
        return
      case 'sectionClick':
        console.log('Analytics: Event: Section Click')
        dataLayer.push({event: 'section click', event_name: 'section click', event_label: getValue(text)});
        //name of button : getValue(text)
        return
      case 'contentCardClick':
        console.log('Analytics: Event: Content Card Click')
        dataLayer.push({event: 'content card click', event_name: 'content card click', event_label: getValue(analyticsEventValue)});
        //name of card : getValue(analyticsEventValue)
        return
      case 'clickToShare':
        console.log('Analytics: Event: Click to Share')
        dataLayer.push({event: 'click to share', event_name: 'click to share', event_label: window.location.protocol + '//' + window.location.hostname + window.location.pathname});
        //page path : 
        return
      case 'ratingsButtonClick':
        console.log('Analytics: Event: Ratings Button click')
        dataLayer.push({event: 'ratings button click', event_name: 'ratings button click', event_label: window.location.protocol + '//' + window.location.hostname + window.location.pathname});
        //page path : window.location.protocol + '//' + window.location.hostname + window.location.pathname
        return
      case 'footerButtonClick':
        console.log('Analytics: Event: Footer Button Click')
        dataLayer.push({event: 'footer button click', event_name: 'footer button click', event_label: getValue(link)});
        //target page : getValue(link)
        return
      case 'buttonClick':
        console.log('Analytics: Event: Button Click')
        dataLayer.push({event: 'button click', event_name: 'button click', event_label: getValue(link)});
        //name of url : getValue(link)
        return
      case 'download':
        console.log('Analytics: Event: Download')
        dataLayer.push({event: 'download', event_name: 'download', event_label: downloadFilename ? getValue(downloadFilename) : getValue(link)});
        //file name : downloadFilename ? getValue(downloadFilename) : getValue(link)
        return
      case 'feedbackStarted':
        console.log('Analytics: Event: Feedback Started')
        dataLayer.push({event: 'feedback started', event_name: 'feedback started', event_label: 'feedback-form_link'});
        return
      case 'videoButtonClick':
        console.log('Analytics: Event: Video Button Click')
        //move to video
        dataLayer.push({event: 'video button click', event_name: 'video button click', event_label: getValue(analyticsEventValue)});
        //Video name : getValue(analyticsEventValue)
        return
      case 'audioButtonClick':
        console.log('Analytics: Event: Audio Button Click')
        //move to audio
        dataLayer.push({event: 'podcast button click', event_name: 'podcast button click', event_label: getValue(analyticsEventValue)});
        //podcast name : getValue(analyticsEventValue)
        return
    }
  }
  
  const toggleModal = (e) => {
    e.preventDefault() 
    dispatch(setModalOpen(!showModal))
    dispatch(setModalData({content: behaviourReference, type: 'modal'}))
    if(analyticsEventName) { handleAnalyticsEvent() }
  }

  const toggleShareMenu = (e) => {
    e.preventDefault() 
    dispatch(setShareOpen(!showShare))
    dispatch(setShareData({content: shareData, elementRef: btnadRef?.current}))
    if(analyticsEventName) { handleAnalyticsEvent() }
  }

  const toggleExternalDialog = (e) => {
    e.preventDefault() 
    dispatch(setModalOpen(!showModal))
    dispatch(setModalData({content: { text: externalText, link: link }, type: 'dialog'}))
    if(analyticsEventName) { handleAnalyticsEvent() }
  }
  
  const scrollTo = (e) => {
    e.preventDefault() 
    if(behaviourReference) {
      document.getElementById(getValue(behaviourReference?.value?.elements?.sectionId)).scrollIntoView({
        behavior: 'smooth'
      })
    }
    if(analyticsEventName) { handleAnalyticsEvent() }
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