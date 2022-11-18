import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'
import styles from "./Divider.module.scss"

/**
 * Divider
 * @param {boolean} isAnimated - Is the divider atom animated?
 * @return React component
 */

const Divider = (props) => {
  const { 
    isAnimated 
  } = props

  const dividerRef = useRef(null)
  const [animateOnShow, setAnimateOnShow] = useState(false)
  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [animateOnShow])

  const onScroll = () => {
    if(dividerRef?.current && (window?.pageYOffset + window?.innerHeight >= dividerRef?.current?.offsetTop)) {
      setAnimateOnShow(true)
    }        
  }

  return (
    <div className={`${styles.divider}`}>
      <hr ref={dividerRef} className={`${isAnimated && animateOnShow ? styles[`divider-animate`] : ''}`} />
    </div>
  )
}

Divider.propTypes = {
  isAnimated:  PropTypes.bool
}
Divider.defaultProps = {
  isAnimated: false
}

export default Divider
