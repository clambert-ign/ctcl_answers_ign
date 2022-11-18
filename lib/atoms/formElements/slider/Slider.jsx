import React, { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'
import styles from "./Slider.module.scss"

/**
 * Slider Component
 * @param {string} id             - The id value of the slider to be displayed
 * @param {string} label          - The label of the slider to be displayed
 * @param {string} text           - The description of the slider to be displayed
 * @param {string} min           - The min value of the slider to be displayed
 * @param {string} max           - The max value of the slider to be displayed
 * @param {integer} step          - The step value of the slider to be displayed
 * @param {string} defaultValue   - The default value of the slider to be displayed
 * @param {string} measurement    - The text measurement value of the slider to be displayed
 * @param {Boolean} isError       - Is the slider in error state?
 * @param {Boolean} isRequired    - Is the slider required?
 * @param {Boolean} isDisabled    - Is the slider disabled?
 * @return React component
 */

const Slider = React.forwardRef((props, ref) => {
  const {
    id,
    label,
    text,
    min,
    max,
    step,
    defaultValue,
    measurement,
    isError,
    isRequired,
    isDisabled,
    ...rest
  } = props
  
  const [sliderValue, setSliderValue] = useState(defaultValue)
  const inputRef = useRef()
  const valueRef = useRef()

  useEffect(() => {    
    let sliderWidth       = (((sliderValue-min)/(max-min))*100)
    let sliderWidthOffset = (((sliderValue/max) * valueRef.current.offsetWidth) / 2)

    inputRef?.current?.style?.setProperty(
      "--slider-width",
      sliderWidth + '%'
    )
    valueRef?.current?.style?.setProperty(
      "--slider-value-width-offset",
      sliderWidthOffset + 'px'
    )
  }, [sliderValue])
  const handleChange = (e) => {
    setSliderValue(e.target.value)
  }

  return (
    <>
      <label 
        ref={inputRef}
        htmlFor={id}
        className={`
          ${styles['slider']} 
          ${isError ? styles['slider-error'] : ''}
          ${isDisabled ? styles['slider-disabled'] : ''}
        `}
      >
        <span className={styles['slider-label']}>
          {label}
          {isRequired && (" (required)")}
        </span>

        <div className={styles['slider-wrapper']}>
          
          <span className={styles['slider-start-label']}>
            {measurement}{min}
          </span>

          <div className={styles['slider-wrapper-input']}>
            <input
              ref={ref}
              id={id}
              type="range" 
              min={min} 
              max={max}
              defaultValue={sliderValue}
              step={step}
              disabled={isDisabled ? 'disabled' : undefined}
              onChange={handleChange}
              {...rest}
            />
            <dl id="markers" className={styles['slider-markers']}>
              {
                [...Array(max)].map((e, i) => <dd value={i}></dd>)
              }
            </dl>
            <span className={styles['slider-value-label']} ref={valueRef}>
              {measurement}{sliderValue}
              <span className={styles['slider-value-label-down']}></span>
            </span>
          </div>

          <span className={styles['slider-end-label']}>
            {measurement}{max}
          </span>

        </div>     
        {text && (
          <span className={styles['slider-text']}>{text}</span>
        )}
      </label>
    </>
  )
})

Slider.propTypes = {
  id:           PropTypes.string,
  label:        PropTypes.string,
  text:         PropTypes.string,
  min:          PropTypes.string,
  max:          PropTypes.string,
  step:         PropTypes.string,
  defaultValue: PropTypes.number,
  measurement:  PropTypes.string,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool
}

Slider.defaultProps = {
  isRequired: false,
  isDisabled: false,
  isChecked: false
}

export default Slider
