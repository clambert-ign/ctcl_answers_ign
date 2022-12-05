import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { setAlertOpen } from '@src/ducks/alertSlice'
import utilityHelper from '@services/utilities/utilityHelperPlus'
import Alert from './Alert'

const AlertAcousticData = (props) => {
  const {
    align,
    text,
    timeOut
  } = props.data

  const dispatch = useDispatch()
  const { winWidth } = utilityHelper.useScreenDimensions()
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false)
  const alertRef = useRef()
  
  utilityHelper.useTimeout(() => {
    setHasTimeElapsed(true)
  }, timeOut)
  
  useEffect(() => {   
    if(alertRef?.current) {
      alertRef?.current?.style?.setProperty (
        "--alert-position-x",
        ((winWidth/2)-(alertRef?.current.offsetWidth/2))+'px'
      )
    }
  }, [alertRef, winWidth])

  useEffect(() => {   
    if(hasTimeElapsed) {
      dispatch(setAlertOpen(false))
    }
  }, [hasTimeElapsed])

  return (
    <Alert text={text} align={align} ref={alertRef} />
  )
}

export default AlertAcousticData
