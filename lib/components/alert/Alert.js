import React, { useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.scss'

/**
 * Alert Component
 * @param {string}  text    - The message of the Alert to be displayed.
 * @param {string}  align   - The alignment of the Alert to be displayed.
 * @returns React Component
 */

const Alert = React.forwardRef((props, ref) => {

	const { 
		text,
		align
	} = props

  const alertRef = useRef(null)
  useImperativeHandle(ref, () => alertRef?.current)
	return (
		<div className={`${styles.alert} ${styles['alert--' + align]}`} ref={alertRef}>
      <div className={`${styles['alert-container']}`}>
        {text && <span>{text}</span>}
      </div>
		</div>
	)
})

Alert.propTypes = {
	text:    PropTypes.string,
	align:   PropTypes.string.isRequired,
	align:   PropTypes.oneOf(['left', 'center'])
}

Alert.defaultProps = {
	align:  'left'
}

export default Alert