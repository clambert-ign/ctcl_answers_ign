import React, { useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './ShareMenu.module.scss'

/**
 * ShareMenu Component
 * @param {string}  menuPos  - The position of the share menu to be displayed.
 * @returns React Component
 */


const ShareMenu = React.forwardRef((props, ref) => {
  const { 
		menuPos
	} = props

  const shareRef = useRef(null)
  useImperativeHandle(ref, () => shareRef?.current)
  return props.children ? (
    <div 
      ref={shareRef}
      className={`
        ${styles['shareMenu']} 
        ${styles['shareMenu--' + menuPos]}
      `}
    >
      {props.children}
    </div>
  ) : null
})

ShareMenu.propTypes = {
	menuPos: PropTypes.string
}

export default ShareMenu
