import React, { useEffect, useRef, useImperativeHandle } from 'react'
import styles from "./ContentCard.module.scss"

const ContentCard = React.forwardRef((props, ref) => {
  
  const {
    isMultiple
  } = props

  const columnRef  = useRef(null)  
  useImperativeHandle(ref, () => columnRef.current)

  useEffect(() => {
    columnRef.current.style.setProperty(
      "--cc-column-count",
      `${props.children.length}`
    )
  })

  return (
    <section 
      ref={columnRef}
      className={`
        ${styles.contentCard} 
        ${(props.children.length > 1 || isMultiple) ? styles[`contentCard--multiple`] : '' }
      `}
    >
      {props.children}
    </section>
  )
})

export default ContentCard