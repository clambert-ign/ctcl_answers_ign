import React, { useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from "./Carousel.module.scss"

/**
* CarouselContent Component
* @param {function} index - Pass the index number.
* @param {boolean} open   - Is the Tab Content to be shown?
* @return React component
*/

const CarouselContent = React.forwardRef((props, ref) => {
  const {
    index,
    open
  } = props
  
  return (
    <>
      {React.Children.map(props.children,(child) => {
        return (
          <>
            {React.cloneElement(child, { 
              ref: ref
            })}
          </>
        ) 
      })}
    </>
  )
})

CarouselContent.propTypes = {
  index:  PropTypes.number,
  open:   PropTypes.bool
}

CarouselContent.defaultProps = {
  open: false
}

export default CarouselContent
