import { useEffect, useRef } from 'react'
import styles from "./Editorial.module.scss"

/**
 * Editorial Component
 * @param {number} columns  - The number of Editorial Component columns to be displayed.
 * @returns React Component
 */

const Editorial = (props) => {
  
  const EditorialItemsNo = props.children.length
  const columnRef  = useRef(null)
  useEffect(() => {
    columnRef.current.style.setProperty(
      "--ed-column-count",
      `${EditorialItemsNo}`
    )
  })

  return (
    <div className={styles["editorial"]} ref={columnRef}>
      {props.children}
    </div>
  )
}

export default Editorial
