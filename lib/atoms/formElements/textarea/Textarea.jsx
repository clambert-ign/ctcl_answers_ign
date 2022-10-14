import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from "./Textarea.module.scss"
import { ErrorIcon } from "@assets/svgIcons/SvgIcons"

/**
 * Textarea Component
 * @param {string} id         - The id of the input to be displayed
 * @param {string} label        - The label of the input to be displayed
 * @param {string} text         - The description of the input to be displayed
 * @param {string} placeholder  - The placeholder text of the input to be displayed
 * @param {integer} maxWords    - The maximum number of words allowed in the textarea being displayed
 * @param {Boolean} isError     - Is the input in error state?
 * @param {Boolean} isRequired  - Is the input required?
 * @param {Boolean} isDisabled  - Is the input disabled?
 * @return React component
 */

const Textarea = (props) => {
  const {
    id,
    label,
    text,
    placeholder,
    maxWords,
    isError,
    isRequired,
    isDisabled,
    ...rest
  } = props

  const [count, setCount] = useState(0)
  const textareaRef = useRef()

  const calculateWordCount = (value) => {
    if(value > maxWords) {
      textareaRef.current.value = textareaRef.current.value.split(' ').slice(0, maxWords).join(' ') + ' '
    } else {
      setCount(value)
    }     
  }  

  return (
    <>
      <label 
        htmlFor={id}
        className={`
          ${styles["textarea"]} 
          ${isError ? styles["textarea-error"] : ""}
          ${isDisabled ? styles["textarea-disabled"] : ""}
        `}
      >
        <span className={styles[`textarea-label`]}>
          {label}
          {isRequired && (" (required)")}
        </span>

        <div className={styles[`textarea-wrapper`]}>
          <textarea
            ref={textareaRef}
            id={id}
            placeholder={placeholder}
            disabled={isDisabled ? 'disabled' : undefined}
            onChange={(e) => calculateWordCount(e.target.value.trim().split(' ').length)}
            {...rest}
          ></textarea>
          {isError && ( <ErrorIcon /> )}
        </div>

        <div className={styles[`textarea-footer-wrapper`]}>
          {text && (
            <span className={styles[`textarea-text`]}>{text}</span>
          )}
          <span className={styles[`textarea-text`]}>
            {maxWords > 0 && (
              <span>
                {count}/{maxWords} words
              </span>
            )}
          </span>
        </div>
      </label>
    </>
  )
}

Textarea.propTypes = {
  id:           PropTypes.string,
  label:        PropTypes.string,
  text:         PropTypes.string,
  placeholder:  PropTypes.string,
  maxWords:     PropTypes.number,
  isError:      PropTypes.bool,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool
}

Textarea.defaultProps = {
  isError:    false,
  isRequired: false,
  isDisabled: false
}

export default Textarea
