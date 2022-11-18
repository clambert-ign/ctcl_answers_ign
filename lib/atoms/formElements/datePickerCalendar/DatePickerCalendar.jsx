import { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDatePicker from 'react-datepicker'
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import styles from './DatePickerCalendar.module.scss'
import { Error, Calendar } from '@assets/svgIcons/SvgIcons'

/**
 * DatePickerCalendar Component
 * @param {string} id           - The id value of the Date Picker (Calendar) to be displayed
 * @param {string} label        - The label of the Date Picker (Calendar) to be displayed
 * @param {string} text         - The description of the Date Picker (Calendar) to be displayed
 * @param {Boolean} isError     - Is the input in error state?
 * @param {Boolean} isRequired  - Is the input required?
 * @param {Boolean} isDisabled  - Is the input disabled?
 * @return React component
 */

 const DatePickerCalendar = (props) => {
  const {
    id,
    label,
    text,
    isError,
    isRequired,
    isDisabled,
    ...rest
  } = props
  
  const datepickerRef = useRef(null)
  const openCalendar = () => {
    const datepickerElement = datepickerRef.current
    datepickerElement.setFocus(true)
  }  

  return (
    <>
      <label 
        htmlFor={id}
        className={`
          ${styles['datepicker']} 
          ${isError ? styles['datepicker-error'] : ''}
          ${isDisabled ? styles['datepicker-disabled'] : ''}
        `}
      >
        <span className={styles['datepicker-label']}>
          {label}
          {isRequired && (" (Required)")}
        </span>
        <div className={styles['datepicker-wrapper']}>
          <div className={styles['datepicker-wrapper-input']}>
            <ReactDatePicker 
              ref={datepickerRef}
              className={styles['datepicker-element']} 
              readOnly={isDisabled ? true : undefined}
              shouldCloseOnSelect={true}
              popperClassName={styles['datepicker-popper']} 
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [-16, 12],
                  },
                },
                {
                  name: "preventOverflow",
                  options: {
                    rootBoundary: "viewport",
                    tether: false,
                    altAxis: true,
                  },
                },
              ]}
              {...rest}
            />
            <Calendar className={styles['datepicker-icon']}  onClick={() => openCalendar()} />
          </div>
          {isError && ( <Error className={styles['datepicker-error-icon']} /> )}
        </div>
        {text && (
          <span className={styles['datepicker-text']}>{text}</span>
        )}
      </label>
    </>
  )
}

DatePickerCalendar.propTypes = {
  id:           PropTypes.string,
  label:        PropTypes.string,
  text:         PropTypes.string,
  isError:      PropTypes.bool,
  isRequired:   PropTypes.bool,
  isDisabled:   PropTypes.bool
}

DatePickerCalendar.defaultProps = {
  isError:    false,
  isRequired: false,
  isDisabled: false
}

export default DatePickerCalendar