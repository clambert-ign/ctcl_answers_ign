import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Input.module.scss"
import { Error, Password } from "@assets/svgIcons/SvgIcons"

/**
 * Input Component
 * @param {string} id           - The id value of the input to be displayed
 * @param {string} type         - The type of input to be displayed (default, password)
 * @param {string} label        - The label of the input to be displayed
 * @param {string} text         - The description of the input to be displayed
 * @param {string} placeholder  - The placeholder text of the input to be displayed
 * @param {Boolean} isError     - Is the input in error state?
 * @param {Boolean} isRequired  - Is the input required?
 * @param {Boolean} isDisabled  - Is the input disabled?
 * @return React component
 */

const Input = React.forwardRef((props, ref) => {
  const {
    id,
    type,
    label,
    text,
    placeholder,
    isError,
    isRequired,
    isDisabled,
    ...rest
  } = props

  const [inputType, setInputType] = useState(type)
  const toggleInputType = () => {
    if(inputType === "password") {
      setInputType("text")
    } else {
      setInputType("password")
    }
  }  

  return (
    <>
      <label 
        htmlFor={id}
        className={`
          ${styles['input']} 
          ${isError ? styles['input-error'] : ''}
          ${isDisabled ? styles['input-disabled'] : ''}
        `}
      >
        <span className={styles['input-label']}>
          {label}
          {isRequired && (" (required)")}
        </span>
        <div className={styles['input-wrapper']}>
          <div className={styles['input-wrapper-input']}>
            <input
              ref={ref}
              id={id}
              type={inputType}
              placeholder={placeholder}
              disabled={isDisabled ? 'disabled' : undefined}
              {...rest}
            />
            {type === "password" ? ( <Password className={styles['input-eye-icon']} onClick={() => toggleInputType()} /> ) : ''}
          </div>
          {isError && ( <Error className={styles['input-error-icon']} /> )}
        </div>
        {text && (
          <span className={styles['input-text']}>{text}</span>
        )}
      </label>
    </>
  )
})

Input.propTypes = {
  id:           PropTypes.string,
  type:         PropTypes.string.isRequired,
  type:         PropTypes.oneOf(['default', 'password']),
  label:        PropTypes.string,
  text:         PropTypes.string,
  placeholder:  PropTypes.string,
  isError:      PropTypes.bool,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool
}

Input.defaultProps = {
  type:       'default',
  isError:    false,
  isRequired: false,
  isDisabled: false
}

export default Input