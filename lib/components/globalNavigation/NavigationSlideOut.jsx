import { useState, useEffect } from 'react'
import styles from './NavigationSlideOut.module.scss'
import { ModalCloseIcon } from "@assets/svgIcons/SvgIcons";

const NavigationSlideOut = (props) => {

  const {
    onClose
  } = props

  const [slideOut, setSlideOut] = useState(null)

  const closeMenu = () => {
    setSlideOut(true)
    const timer = setTimeout(() => {
        onClose(false)
    }, 500);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <div id='slideOut' className={styles['navSlideout']} >
        <div className={`${styles['navSlideout-background']} ${slideOut ? styles['navSlideout-animateOut'] : ''}`}>
          <div className={styles['navSlideout-header']}>
            <button onClick={() => closeMenu()} aria-label="close"> 
              <span aria-hidden="true" ><ModalCloseIcon /></span>
            </button>
          </div>
          <div className={styles['navSlideout-content']}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationSlideOut