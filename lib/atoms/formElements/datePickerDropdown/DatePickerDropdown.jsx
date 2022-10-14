import React from "react"
import styles from "./DatePickerDropdown.module.scss"

/**
 * DatePickerDropdown Component
 * @param {string} id                 - The id value of the dropdown list to be displayed
 * @param {string} label              - The label of the dropdown list to be displayed
 * @param {string} text               - The description of the dropdown list to be displayed
 * @param {string} placeholder        - The placeholder text of the dropdown list to be displayed
 * @param {array} options             - The dropdown list options to be displayed
 * @param {object} defaultValue       - The dropdown list default option value to be displayed
 * @param {boolean} isError           - Is the dropdown list in error state?
 * @param {boolean} isRequired        - Is the dropdown list required?
 * @param {boolean} isDisabled        - Is the dropdown list disabled?
 * @param {function} onChangeHandler  - Is the dropdown list disabled?
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
        ${styles["datepickerdd"]} 
        ${isError ? styles["datepickerdd-error"] : ""}
        ${isDisabled ? styles["datepickerdd-disabled"] : ""}
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
        <span className={styles[`datepickerdd-text`]}>{text}</span>
      )}     
    
    </label>
  )
}


// DatePickerDropdown.propTypes = {
//   id:               PropTypes.string,
//   label:            PropTypes.string,
//   text:             PropTypes.string,
//   placeholder:      PropTypes.string,
//   options:          PropTypes.array,
//   defaultValue:     PropTypes.object,
//   isError:          PropTypes.bool,
//   isRequired:       PropTypes.bool,
//   isDisabled:       PropTypes.bool,
//   onChangeHandler:  PropTypes.func
// }

// DatePickerDropdown.defaultProps = {
//   isError:    false,
//   isRequired: false,
//   isDisabled: false
// }

export default DatePickerDropdown