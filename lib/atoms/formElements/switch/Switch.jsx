import PropTypes from 'prop-types'
import styles from "./Switch.module.scss"

/**
 * Switch Component
 * @param {string} id             - The id value of the switch element to be displayed
 * @param {string} label          - The label of the switch element to be displayed
 * @param {boolean} isError       - Is the switch element in error state?
 * @param {boolean} isRequired    - Is the switch element required?
 * @param {boolean} isDisabled    - Is the switch element disabled?
 * @param {boolean} isChecked     - Is the switch element checked?
 * @return React component
 */

const Switch = (props) => {
  const { 
    id,
    label, 
    isError,
    isRequired,
    isDisabled,
    isChecked,
    ...rest
  } = props

  return (
    <label
      htmlFor={id}
      className={`
        ${styles["switch"]} 
        ${isDisabled ? styles["switch-disabled"] : ""}
      `}
    >
      {label}
      {isRequired && (" (required)")}
      <div className={styles[`switch-wrapper`]}>
        <input 
          id={id}
          type="checkbox"
          defaultChecked={isChecked}
          disabled={isDisabled ? 'disabled' : undefined}
          {...rest} 
        />
        <span className={styles[`switch-slider`]}></span>
      </div>
    </label>
  )
}

Switch.propTypes = {
  id:           PropTypes.string,
  label:        PropTypes.string,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool,
  isChecked:    PropTypes.bool
}

Switch.defaultProps = {
  isRequired: false,
  isDisabled: false,
  isChecked: false
}

export default Switch
