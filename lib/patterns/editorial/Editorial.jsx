import { useEffect, useRef } from 'react'
import styles from "./Editorial.module.scss"

/**
 * Editorial Pattern
 * @param {string} cssClass  - The CSS Class of the Editorial Pattern to be displayed.
 * @param {string} id  - The id value of the Editorial Pattern to be displayed.
 * @returns React Component
 */

const Editorial = (props) => {

  const {
    cssClass,
    id
  } = props

  const EditorialItemsNo = props.children.filter(Boolean) ? props.children.filter(Boolean).length : 0
  const columnRef  = useRef(null)
  const cssClassValue = cssClass ? cssClass.trim() : ''
  useEffect(() => {
    columnRef?.current?.style?.setProperty(
      "--ed-column-count",
      `${EditorialItemsNo}`
    )
  })

  return props.children ? (
    <div 
      ref={columnRef}
      id={id}
      className={`
        ${styles.editorial}
        ${(cssClass && cssClassValue) ? 
            cssClassValue.split(',').map(function (classItem, index) {
              return 'editorial-'+classItem
            }).join(' ')
          : ''}
      `}
    >
      {props.children}
    </div>
  ) : null
}

export default Editorial
