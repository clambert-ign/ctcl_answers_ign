import { useEffect, useRef } from 'react'
import styles from "./Editorial.module.scss"

const Editorial = (props) => {
  
  const EditorialItemsNo = props.children ? props.children.length : 0
  const columnRef  = useRef(null)
  useEffect(() => {
    if(EditorialItemsNo) {
      columnRef.current.style.setProperty(
        "--ed-column-count",
        `${EditorialItemsNo}`
      )
    }
  })

  return (
    <div className={styles["editorial"]} ref={columnRef}>
      {props.children}
    </div>
  )
}

export default Editorial
