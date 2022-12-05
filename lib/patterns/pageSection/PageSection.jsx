import React, { useEffect, useRef, useImperativeHandle } from 'react'
import styles from './PageSection.module.scss'
import Image from '@atoms/image/Image'

/**
* Page Section Pattern
* @param {string} bgImage   - The background image of the Page Section Pattern to be displayed.
* @param {string} cssClass  - The CSS Class of the Page Section Pattern to be displayed.
* @return React component
*/

const PageSection = React.forwardRef((props, ref) => {

  const {
    bgImage,
    cssClass,
    id
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
      id={id}
      className={`
        ${styles.pageSectionWrapper}
        ${(cssClass && cssClassValue) ? 
            cssClassValue.split(',').map(function (classItem, index) {
              return 'pagesection-'+classItem
            }).join(' ')
          : ''}
      `}
    >
      <div 
        className={`
          ${styles.pageSection}
        `}
        ref={innerRef}
      >
        {bgImage && (
          <div className={styles["pageSection-background"]}>
            <Image src={bgImage} />
          </div>
        )}
        {props.children}
      </div>
    </section>
  )
})

export default PageSection