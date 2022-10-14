import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Input.module.scss"
import { ErrorIcon, PasswordIcon } from "@assets/svgIcons/SvgIcons"

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

const Input = (props) => {
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

  // How do we handle multiple messages e.g. password criteria -> work this out when building the form pattern
  // Password icon wrapping

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
          ${styles["input"]} 
          ${isError ? styles["input-error"] : ""}
          ${isDisabled ? styles["input-disabled"] : ""}
        `}
      >
        <span className={styles[`input-label`]}>
          {label}
          {isRequired && (" (required)")}
        </span>

        <div className={styles[`input-wrapper`]}>
          <div className={styles[`input-wrapper-input`]}>
            <input
              id={id}
              type={inputType}
              placeholder={placeholder}
              disabled={isDisabled ? 'disabled' : undefined}
              {...rest}
            />
            {type === "password" ? ( <PasswordIcon className={styles[`input-eye-icon`]} onClick={() => toggleInputType()} /> ) : ''}
          </div>
          {isError && ( <ErrorIcon className={styles[`input-error-icon`]} /> )}
        </div>

        {text && (
          <span className={styles[`input-text`]}>{text}</span>
        )}
      </label>
    </>
  )
}

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
