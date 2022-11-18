import React from "react"
import PropTypes from 'prop-types'
import styles from "./DatePickerDropdown.module.scss"

/**
 * DatePickerDropdown Component
 * @param {string} id                 - The id value of the dropdown list to be displayed
 * @param {string} label              - The label of the dropdown list to be displayed
 * @param {string} text               - The description of the dropdown list to be displayed
 * @param {boolean} isError           - Is the dropdown list in error state?
 * @param {boolean} isRequired        - Is the dropdown list required?
 * @param {boolean} isDisabled        - Is the dropdown list disabled?
 * @return React component
 */

const DatePickerDropdown = (props) => {

  const {
    id,
    label,
    text,
    isError,
    isDisabled,
    isRequired,
    ...rest
  } = props

  return (
    <label 
      htmlFor={id}
      className={`
        ${styles['datepickerdd']} 
        ${isError ? styles['datepickerdd-error'] : ''}
        ${isDisabled ? styles['datepickerdd-disabled'] : ''}
      `}
    >
      <span className={styles['datepickerdd-label']}>
        {label}
        {isRequired && ' (Required)'}
      </span>
      {props.children && (
        <div className={styles['datepickerdd-ddlwrapper']}>
          {React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, { 
              key: index,
              isError: isError,
              showErrorIcon: false,
              isDisabled: isDisabled
            })
          })}
        </div>
      )}      
      {(isError && text) && (
        <span className={styles['datepickerdd-text']}>{text}</span>
      )}    
    </label>
  )
}

DatePickerDropdown.propTypes = {
  id:         PropTypes.string,
  label:      PropTypes.string,
  text:       PropTypes.string,
  isError:    PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool
}

DatePickerDropdown.defaultProps = {
  isError:    false,
  isRequired: false,
  isDisabled: false
}

export default DatePickerDropdown