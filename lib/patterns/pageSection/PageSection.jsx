import React, { useEffect, useRef, useImperativeHandle } from 'react'
import styles from './PageSection.module.scss'
import Image from '@atoms/image/Image'

/**
* HeroHeader Component
* @param {string} bgImage   - The background image of the Page Section Component to be displayed.
* @param {string} cssClass  - The CSS Class of the Page Section Component to be displayed.
* @return React component
*/

// can we handle this with just a CSS class? Create custom styles and have a dropdown within Acoustic to apply. Less flexibility but this is good as it means things have to be designed upfront and made available to the content team.

const PageSection = React.forwardRef((props, ref) => {

  const {
    bgImage,
    cssClass
  } = props

  const innerRef = useRef()
  useImperativeHandle(ref, () => innerRef.current)
  const cssClassValue = cssClass ? cssClass.trim() : ''

  useEffect(() => {
    if(bgImage){
      innerRef.current.style.setProperty(
        "--ps-bgcolor",
        `transparent`
      )
    }
  }, [])
  
  return (
    <section 
      className={`
        ${styles.pageSection}
        ${cssClassValue.split(',').map(function (classItem, index) {
          return 'pagesection_'+classItem
        }).join(' ')}
      `}
      ref={innerRef}
    >
        {bgImage && (
          <div className={styles["pageSection-background"]}>
            <Image src={bgImage} />
          </div>
        )}
        {props.children}
    </section>
  )
})

export default PageSection