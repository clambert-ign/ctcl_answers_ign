import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from "@atoms/image/Image"
import styles from "./Checkbox.module.scss"

/**
 * Checkbox Component
 * @param {string} id             - The checkbox id to be displayed
 * @param {string} type           - The type of checkbox to be displayed (default, tile, image)
 * @param {string} text           - The label of the checkbox to be displayed
 * @param {string} description    - The description of the checkbox to be displayed
 * @param {Object} image          - The image to be displayed (tile and image only)
 * @param {string} errorText      - The error message of the checkbox to be displayed
 * @param {boolean} isError       - Is the checkbox in error state?
 * @param {boolean} isRequired    - Is the checkbox required?
 * @param {boolean} isDisabled    - Is the checkbox disabled?
 * @param {boolean} isChecked     - Is the checkbox checked?
 * @return React component
 **/

const Checkbox = (props) => {
  const {
    id,
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
        htmlFor={id}
        className={`
          ${styles[`checkbox`]} 
          ${image && (type === "tile" ? styles[`checkbox-tile`] : styles[`checkbox-image`])}
          ${checked ? styles[`checkbox-checked`] : ""}
          ${isError ? styles[`checkbox-error`] : ""}
          ${isDisabled ? styles[`checkbox-disabled`] : ""}
        `}
      >
        
        {(image) && (
          <Image src={image} />
        )}  

        {(text) && (
          <span className={styles[`checkbox-text`]}>{text}</span>
        )}

        {(description) && (
          <span className={styles[`checkbox-description`]}>{description}</span>
        )}
        
        <input
          id={id}
          type="checkbox"
          onChange={handleChange}        
          defaultChecked={isChecked}
          disabled={isDisabled ? 'disabled' : undefined}
          {...rest}
        />

        <span className={styles[`checkbox-checkmark`]}></span>      

      </label>
      
      {(isError && errorText) && (
        <span className={styles[`checkbox-error-text`]}>{errorText}</span>
      )}
    </>
  )
}

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  type:       'default',
  isError:    false,
  isRequired: false,
  isDisabled: false,
  isChecked:  false
}

export default Checkbox
