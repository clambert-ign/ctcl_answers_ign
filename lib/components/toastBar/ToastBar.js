import PropTypes from 'prop-types'
import styles from './ToastBar.module.scss'

/**
 * Toastbar Atom
 * @param {string}  text  - The message of the toastbar to be displayed.
 * @param {string}  align - The alignment of the toastbar to be displayed.
 * @returns React Component
 */

const ToastBar = (props) => {

	const { 
		text,
		align
	} = props

	return (
		<div className={`${styles.toastbar} ${styles['toastbar--' + align]}`}>
      <div className={`${styles['toastbar-container']}`}>
        {text && <span>{text}</span>}
        {props.children}
      </div>
		</div>
	)
}

ToastBar.propTypes = {
	text:   PropTypes.string,
	align:  PropTypes.string.isRequired,
	align:  PropTypes.oneOf(['left', 'center'])
}

ToastBar.defaultProps = {
	align:  'left'
}

export default ToastBar