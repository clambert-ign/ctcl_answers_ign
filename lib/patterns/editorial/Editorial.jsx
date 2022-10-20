import { useEffect, useRef } from 'react'
import styles from "./Editorial.module.scss"

const Editorial = (props) => {
  const EditorialItemsNo = props.children.filter(Boolean) ? props.children.filter(Boolean).length : 0
  const columnRef  = useRef(null)
  useEffect(() => {
    if(EditorialItemsNo) {
      columnRef.current.style.setProperty(
        "--ed-column-count",
        `${EditorialItemsNo}`
      )
    }
  })
  console.log('editorialcol', props.children.filter(Boolean).length)
  return (
    <div className={styles["editorial"]} ref={columnRef}>
      {props.children}
    </div>
  )
}

export default Editorial
