import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import Select from 'react-select'
import styles from './DropdownList.module.scss'
import { Error } from "@assets/svgIcons/SvgIcons"

/**
 * DropdownList Component
 * @param {string} id                 - The id value of the dropdown list to be displayed
 * @param {string} label              - The label of the dropdown list to be displayed
 * @param {string} text               - The description of the dropdown list to be displayed
 * @param {string} placeholder        - The placeholder text of the dropdown list to be displayed
 * @param {array} options             - The dropdown list options to be displayed
 * @param {object} defaultValue       - The dropdown list default option value to be displayed
 * @param {boolean} isError           - Is the dropdown list in error state?
 * @param {boolean} showErrorIcon     - Do we show the error icon?
 * @param {boolean} isRequired        - Is the dropdown list required?
 * @param {boolean} isDisabled        - Is the dropdown list disabled?
 * @param {function} onChangeHandler  - Is the dropdown list disabled?
 * @param {function} resetValue       - Do we reset the selected value?
 * @return React component
 */

const DropdownList = (props) => {

  const {
    id,
    label,
    text,
    placeholder,
    options,
    defaultValue,
    isError,
    showErrorIcon,
    isDisabled,
    isRequired,
    onChangeHandler,
    ...rest
  } = props
  
  return (    
    <label 
      htmlFor={id}
      className={`
        ${styles['dropdownlist']} 
        ${isError ? styles['dropdownlist-error'] : ''}
        ${isDisabled ? styles['dropdownlist-disabled'] : ''}
      `}
    >
      <span className={styles['dropdownlist-label']}>
        {label}
        {isRequired && ' (Required)'}
      </span>
      
      <div className={styles['dropdownlist-wrapper']}>
        <Select 
          id={id}
          placeholder={placeholder}
          className={styles['dropdownlist-select']}
          options={options}
          isDisabled={isDisabled}
          isSearchable={false}
          openMenuOnFocus={true}
          onChange={onChangeHandler}          
          defaultValue={defaultValue}
          {...rest}
        />
        {isError && showErrorIcon && ( <Error className={styles['dropdownlist-error-icon']} /> )}
      </div>
      {(isError && text) && (
        <span className={styles['dropdownlist-text']}>{text}</span>
      )}
    </label>
  )
}

DropdownList.propTypes = {
  id:               PropTypes.string,
  label:            PropTypes.string,
  text:             PropTypes.string,
  placeholder:      PropTypes.string,
  options:          PropTypes.array,
  defaultValue:     PropTypes.object,
  isError:          PropTypes.bool,
  isRequired:       PropTypes.bool,
  isDisabled:       PropTypes.bool,
  onChangeHandler:  PropTypes.func
}

DropdownList.defaultProps = {
  isError:    false,
  isRequired: false,
  isDisabled: false
}

export default DropdownList