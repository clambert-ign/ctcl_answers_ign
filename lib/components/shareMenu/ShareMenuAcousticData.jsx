import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { setShareOpen } from '@src/ducks/shareSlice'
import { setAlertOpen, setAlertData } from '@src/ducks/alertSlice'
import '@i18n/config'
import { useTranslation } from 'react-i18next'
import { getValue } from '@services/utilities/utilityHelper'
import utilityHelper from '@services/utilities/utilityHelperPlus'
import ShareMenu from "./ShareMenu"
import Button from '@atoms/button/Button'
import PanelList from "@components/panelList/PanelList"
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"

const ShareMenuAcousticData = (props) => {

  const { 
    elementRef
  } = props

  const {
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
  } = props.data

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const shareRef = useRef()
  const [menuPos, setMenuPos] = useState(null)
  const { screenWidth, screenHeight, winWidth, winHeight } = utilityHelper.useScreenDimensions()
  const { width, height, x, y } = elementRef?.current?.getBoundingClientRect()
  const isBreakPoint = utilityHelper.detectBreakpoint('m')
  const isOutside = utilityHelper.clickOutside(shareRef)
  const currentURL = window.location.protocol + '//' + window.location.hostname + window.location.pathname
  const pageURL = getValue(shareUrl) ? getValue(shareUrl) + '#' + getValue(shareId) : shareId ? currentURL + '#' + getValue(shareId) :  currentURL

  if(isOutside) {
    dispatch(setShareOpen(false))
  }
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27 || e.key === 'Escape') 
      dispatch(setShareOpen(false))
    }
    window.addEventListener('keydown', handleEsc)
    return () => { window.removeEventListener('keydown', handleEsc)}
  }, [])

  useEffect(() => {
    if(shareRef?.current) {
      ((((y+height)/winHeight)*100) > 60) ? setMenuPos("top") : setMenuPos("bottom")
      let menuWidth = shareRef?.current?.getBoundingClientRect().width
      let xPos = x+(width/2)-(menuWidth/2)
      let yMargin = 5
      let yPos = window.scrollY+y+height+yMargin
      shareRef?.current?.style?.setProperty (
        "--share-position-x",
        Math.round(xPos)+'px'
      )
      shareRef?.current?.style?.setProperty (
        "--share-position-y",
        (Math.round(yPos))+'px'
      )
    }
  }, [shareRef, winWidth, winHeight, x, y, width, height])

  const handleShareClick = (e, type) => {
    e.preventDefault()
    const x = isBreakPoint ? 0 : (screenWidth*0.7)/2
    const y = isBreakPoint ? 0 : (screenHeight*0.5)/2
    const width = isBreakPoint ? screenWidth : screenWidth*0.3
    const height = isBreakPoint ? screenHeight : screenHeight*0.4
    //dataLayer.push({event: 'each social channel click', event_name: 'each social channel click', event_label: %page path%, social_channel: %name of social channel%});
    //name of social channel: type
    //page path : window.location.protocol + '//' + window.location.hostname + window.location.pathname
    switch(type) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(pageURL)}`, 'Facebook Share', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${y}, left=${x}`)
        dispatch(setShareOpen(false))
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageURL)}&text=${getValue(twitterText)}&hashtags=${getValue(twitterHashtags)}&via=${getValue(twitterVia)}&related=${getValue(twitterRelated)}&in_reply_to=${getValue(twitterInReplyTo)}`, 'Twitter Share', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${y}, left=${x}`)
        dispatch(setShareOpen(false))
        break;
      case "email":
        window.location.href = `mailto:?subject=${getValue(emailSubject)}&body=${getValue(emailText)}`
        dispatch(setShareOpen(false))
        break;
      case "link":
        navigator.clipboard.writeText(pageURL)
        dispatch(setAlertData({content: { align: 'center', text: t('clipboard'), timeOut: 3000 }}))
        dispatch(setAlertOpen(true))
        dispatch(setShareOpen(false))
        break;
      case "print":
        window.print()
        dispatch(setShareOpen(false))
        break;
      default:
        break;
    }
  }
  
  return (
    <ShareMenu ref={shareRef} menuPos={menuPos}>
      <PanelList>
        <List>
          {customBehaviourSharingPlatforms.values.map((value, index) => {
            return (
              <ListItem key={index}>
                <Button type="tertiary" icon={`${'share' + (value.selection.charAt(0).toUpperCase() + value.selection.slice(1))}`} text={t(value.selection)} onClick={(e) => handleShareClick(e,`${value.selection}`)} />
              </ListItem>
            )
          })}
        </List>
      </PanelList>
    </ShareMenu>
  )
}

export default ShareMenuAcousticData
