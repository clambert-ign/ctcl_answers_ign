import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './EditorialText.module.scss'

/**
 * Editorial Text Component
 * @param {string} align    - The Editorial Text Component alignment.
 * @param {string} caption  - The Editorial Text Component caption to be displayed.
 * @param {string} title    - The Editorial Text Component title to be displayed.
 * @param {string} titleTag - The Editorial Text Component heading tag wrapped around the title.
 * @param {number} columns  - The Editorial Text Component column 2 text to be displayed.
 * @param {object} text     - The Editorial Text Component text to be displayed.
 * @returns React Component
 */

const EditorialText = (props) => {
  const { 
    align, 
    caption,
    title, 
    titleTag,
    columns,
    text
  } = props

  const textRef  = useRef(null)
  const textWrapperRef  = useRef(null)
  const HeadingTag = titleTag ? `${titleTag}` : 'h3'

  useEffect(() => {
    if(text && textRef?.current){
      textRef?.current?.style?.setProperty(
        "--et-text-column-count",
        `${columns}`
      )
    }
  }, [])

  useEffect(() => {    
    textWrapperRef?.current?.style?.setProperty(
      "--et-text-align",
      `${align}`
    )
  }, [align])
  
  return (
    <div className={`${styles.editorialText}`} ref={textWrapperRef}>
      {caption && (
        <div className={styles['editorialText-caption']}>{caption}</div>
      )}
      {title && (
        <HeadingTag className={styles['headline']}>{title}</HeadingTag>
      )}
      {text && (
        <div className={`${styles['editorialText-content']}`} ref={textRef}>
          {text}
        </div>
      )}
      {props.children && (
        <div className={`${styles['editorialText-btn']}`}>
          {props.children}
        </div>
      )}
    </div>
  )
}

EditorialText.propTypes = {
  align:    PropTypes.string.isRequired, 
  align:    PropTypes.oneOf(['left', 'right', 'center']),
  title:    PropTypes.string, 
  titleTag: PropTypes.string.isRequired, 
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  caption:  PropTypes.string, 
  columns:  PropTypes.number.isRequired,
  text:     PropTypes.object
}

EditorialText.defaultProps = {
  align:    'left',
  titleTag: 'h2',
  columns:  1
}

export default EditorialText
