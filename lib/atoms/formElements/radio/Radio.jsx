import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from "@atoms/image/Image"
import styles from "./Radio.module.scss"

/**
 * Input Component
 * @param {string} type           - The type of radio to be displayed (default, tile, image)
 * @param {string} text           - The label of the radio to be displayed
 * @param {string} description    - The description of the radio to be displayed
 * @param {Object} image          - The image to be displayed (tile and image only)
 * @param {string} errorText      - The error message of the radio to be displayed
 * @param {boolean} isError       - Is the radio in error state?
 * @param {boolean} isRequired    - Is the radio required?
 * @param {boolean} isDisabled    - Is the radio disabled?
 * @param {boolean} isChecked     - Is the radio checked?
 * @return React component
 **/

const Radio = (props) => {
  const {
    type,
    text,
    description,
    image,
    errorText,
    isError,
    isRequired,
    isDisabled,
    isChecked,
    ...rest
  } = props

  const [checked, setChecked] = useState(isChecked)
  const handleChange = (e) => {
    if(e.target.checked && !isDisabled){
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  return (
    <>
      <label 
        className={`
          ${styles['radio']} 
          ${image && (type === "tile" ? styles['radio-tile'] : styles['radio-image'])}
          ${checked ? styles['radio-checked'] : ""}
          ${isError ? styles['radio-error'] : ""}
          ${isDisabled ? styles['radio-disabled'] : ""}
        `}
      >        
        {(image) && (
          <Image src={image} />
        )}  
        {(text) && (
          <div className={styles['radio-text']}>{text}</div>
        )}
        {(description) && (
          <div className={styles['radio-description']}>{description}</div>
        )}
        <input
          type="radio"
          onChange={handleChange}
          defaultChecked={isChecked}
          disabled={isDisabled ? 'disabled' : undefined}
          {...rest}
        />
        <div className={styles['radio-checkmark']}></div>      
      </label>
      {(isError && errorText) && (
        <div className={styles['radio-error-text']}>{errorText}</div>
      )}
    </>
  )
}

Radio.propTypes = {
  type:         PropTypes.string.isRequired,
  type:         PropTypes.oneOf(['default', 'tile', 'image']),
  text:         PropTypes.string,
  description:  PropTypes.string,
  image:        PropTypes.string,
  errorText:    PropTypes.string,
  isError:      PropTypes.bool,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool,
  isChecked:    PropTypes.bool
}

Radio.defaultProps = {
  type:       'default',
  isError:    false,
  isRequired: false,
  isDisabled: false,
  isChecked:  false
}

export default Radio
