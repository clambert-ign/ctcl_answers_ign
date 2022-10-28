import React, { useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from "./ContentCardTile.module.scss"

/**
* Content Card Tile Component
* @param {boolean} isMultiple  - Are we displaying more than 1 Content Card?
* @return React component
*/

const ContentCardTile = React.forwardRef((props, ref) => {
  
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

  if(!props?.children) {
    return null
  }

  return (
    <div 
      ref={columnRef}
      className={`
        ${styles.contentCard} 
        ${(props?.children?.length > 1 || isMultiple) ? styles[`contentCard-multiple`] : '' }
      `}
    >
      {props.children}
    </div>
  )
})

ContentCardTile.propTypes = {
  isMultiple: PropTypes.bool
}

ContentCardTile.defaultProps = {
  isMultiple: false
}

export default ContentCardTile