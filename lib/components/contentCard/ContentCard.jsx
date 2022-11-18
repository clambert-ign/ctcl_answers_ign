import React, { useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from "./ContentCard.module.scss"

/**
* Content Card Component
* @param {boolean} isMultiple  - Are we displaying more than 1 Content Card?
* @return React component
*/

const ContentCard = React.forwardRef((props, ref) => {
  
  const {
    isMultiple
  } = props

  const columnRef  = useRef(null)  
  useImperativeHandle(ref, () => columnRef?.current)

  useEffect(() => {
    columnRef?.current?.style?.setProperty(
      "--cc-column-count",
      `${props?.children?.length}`
    )  
  })

  return props?.children ? (
    <div 
      ref={columnRef}
      className={`
        ${styles.contentCard} 
        ${(props?.children?.length > 1 || isMultiple) ? styles['contentCard-multiple'] : '' }
      `}
    >
      {props.children}
    </div>
  ) : null
})

ContentCard.propTypes = {
  isMultiple: PropTypes.bool
}

ContentCard.defaultProps = {
  isMultiple: false
}

export default ContentCard