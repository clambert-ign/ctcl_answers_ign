import { useEffect, useRef } from 'react'
import styles from "./Editorial.module.scss"

/**
 * Editorial Component
 * @param {number} columns  - The number of Editorial Component columns to be displayed.
 * @returns React Component
 */

const Editorial = (props) => {
  
  const EditorialItemsNo = props.children.filter(Boolean) ? props.children.filter(Boolean).length : 0
  const columnRef  = useRef(null)
  useEffect(() => {
    columnRef?.current?.style?.setProperty(
      "--ed-column-count",
      `${EditorialItemsNo}`
    )
  })

  return props.children ? (
    <div className={styles['editorial']} ref={columnRef}>
      {props.children}
    </div>
  ) : null
}

export default Editorial
