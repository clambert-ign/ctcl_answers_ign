import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './EditorialText.module.scss'

/**
 * Editorial Text Component
 * @param {string} align    - The Editorial Text Component alignment.
 * @param {string} caption  - The Editorial Text Component caption to be displayed.
 * @param {string} title    - The Editorial Text Component title to be displayed.
 * @param {string} titleTag - The Editorial Text Component heading tag wrapped around the title.
 * @param {number} columns  - The Editorial Text Component column 2 text to be displayed.
 * @returns React Component
 */

const EditorialText = (props) => {
  const { 
    align, 
    caption,
    title, 
    titleTag,
    columns
  } = props

  const textRef  = useRef(null)
  const textWrapperRef  = useRef(null)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const HeadingTag = `${titleTag}`
  //Make sure we are filtering out null children
  const children = React.Children.toArray(props.children).filter(Boolean)
        
  useEffect(() => {
    if(children) {
      if(Array.isArray(children)) {
        if(children.find((e) => (e.type.name !== "RichText"))) {
          setIsButtonVisible(true)
        }
      } else {
        props.children.type.name === "ButtonAcousticData" ? setIsButtonVisible(true) : '' 
      }
      textRef.current.style.setProperty(
        "--et-text-column-count",
        `${columns}`
      )
    }
  },[])

  useEffect(() => {    
    textWrapperRef.current.style.setProperty(
      "--et-text-align",
      `${align}`
    )
  },[align])
  
  return (
    <div className={`${styles.editorialText}`} ref={textWrapperRef}>
      {caption && (
        <div className={styles['editorialText-caption']}>{caption}</div>
      )}
      {title && (
        <HeadingTag>{title}</HeadingTag>
      )}
      {props.children && (
        <>
          <div className={`${styles['editorialText-content']}`} ref={textRef}>
            {React.Children.map(children, function (child) {
              if (child.type.name === 'RichText') {
                return (child)
              }
            })}
          </div>
          {isButtonVisible ? 
            <div className={`${styles['editorialText-btn']}`}>
              {React.Children.map(children, function (child) {
                if (child.type.name !== 'RichText') {
                  return (child)
                }
              })}
            </div>
          : ''}
        </>
      )}
    </div>
  )
}

EditorialText.propTypes = {
  align:    PropTypes.string.isRequired, 
  align:    PropTypes.oneOf(['left', 'right', 'center']),
  title:    PropTypes.string, 
  titleTag: PropTypes.string.isRequired, 
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  caption:  PropTypes.string, 
  columns:  PropTypes.number.isRequired
}

EditorialText.defaultProps = {
  align:    'left',
  titleTag: 'h2',
  columns:  1
}

export default EditorialText
