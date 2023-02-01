import React, { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'
import styles from "./Slider.module.scss"

/**
 * Slider Component
 * @param {string} id             - The id value of the slider to be displayed
 * @param {string} label          - The label of the slider to be displayed
 * @param {string} text           - The description of the slider to be displayed
 * @param {number} min            - The min value of the slider to be displayed
 * @param {string} minLabel       - The min value label of the slider to be displayed
 * @param {number} max            - The max value of the slider to be displayed
 * @param {string} maxLabel       - The max value label of the slider to be displayed
 * @param {number} step           - The step value of the slider to be displayed
 * @param {number} defaultValue   - The default value of the slider to be displayed
 * @param {string} measurement    - The text measurement value of the slider to be displayed
 * @param {array} mappingValues   - An array describing the mapping of custom slider controls
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
    minLabel,
    max,
    maxLabel,
    step,
    defaultValue,
    measurement,
    mappingValues,
    isError,
    isRequired,
    isDisabled,
    ...rest
  } = props
  
  const [sliderValue, setSliderValue] = useState(defaultValue)
  const [sliderValueLabel, setSliderValueLabel] = useState()
  const inputRef = useRef()
  const valueRef = useRef()

  useEffect(() => {    
    let sliderWidth       = (((sliderValue-min)/(max-min))*100)
    let sliderWidthOffset = ((((sliderValue/max) * valueRef?.current?.offsetWidth) / 2)) * 1.15
   
    inputRef?.current?.style?.setProperty(
      "--slider-width",
      sliderWidth + '%'
    )
    valueRef?.current?.style?.setProperty(
      "--slider-value-width-offset",
      sliderWidthOffset + 'px'
    )
  })

  const handleChange = (e) => {
    setSliderValue(e.target.value)
    customMapping(e.target.value)
  }

  const customMapping = (sliderMapValue) => {
    let selectedMapValue = mappingValues?.filter((mappingValue) => mappingValue.value === parseInt(sliderMapValue))
    if(selectedMapValue[0].label === "Not Very Useful") {
      dataLayer.push({event: 'not very useful', event_name: 'not very useful', event_label: 'feedback-form_link'});
    } else if(selectedMapValue[0].label === "Useful") {
      dataLayer.push({event: 'useful', event_name: 'useful', event_label: 'feedback-form_link'});
    } else if(selectedMapValue[0].label === "Very Useful") {
      dataLayer.push({event: 'very useful ', event_name: 'very useful ', event_label: 'feedback-form_link'});
    }
    if(selectedMapValue[0].show === true) {
      setSliderValueLabel(selectedMapValue[0].label ? selectedMapValue[0].label : null)
    } else {
      setSliderValueLabel(null)
    }
  }

  useEffect(() => {
    customMapping(sliderValue)
  }, [])

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
            {measurement}{minLabel ? minLabel : min} 
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
                [...Array(max)].map((e, i) => <dd key={i} value={i}></dd>)
              }
            </dl>
            {sliderValueLabel && (
              <span className={styles['slider-value-label']} ref={valueRef}>
                {measurement}
                {sliderValueLabel ? sliderValueLabel : sliderValue}
                <span className={styles['slider-value-label-down']}></span>
              </span>
            )}
          </div>

          <span className={styles['slider-end-label']}>
            {measurement}{minLabel ? maxLabel : max} 
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
  id:             PropTypes.string,
  label:          PropTypes.string,
  text:           PropTypes.string,
  min:            PropTypes.number,
  minLabel:       PropTypes.string,
  max:            PropTypes.number,
  maxLabel:       PropTypes.string,
  step:           PropTypes.number,
  defaultValue:   PropTypes.number,
  measurement:    PropTypes.string,
  mappingValues:  PropTypes.array,
  isError:        PropTypes.bool,
  isRequired:     PropTypes.bool,
  isDisabled:     PropTypes.bool
}

Slider.defaultProps = {
  mappingValues:  null,
  isError:      false,
  isRequired:   false,
  isDisabled:   false
}

export default Slider
