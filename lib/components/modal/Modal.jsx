import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '@atoms/button/Button'
import styles from './Modal.module.scss'

/**
* Modal Pop-up Component
* @param {boolean} show     - Is the Modal to be shown?
* @param {string} title     - The title to be displayed within the Modal.
* @param {string} titleTag  - The heading tag wrapped around the Modal title.
* @param {string} align     - The alignment of the Modal to be displayed.
* @param {function} onClose - Are we attempting to close the Modal?
* @param {string} cssClass  - The CSS Class of the Modal Component to be displayed.
* @return React component
*/

const Modal = (props) => {

  const { 
    show, 
    title,
    titleTag,
    align,
    onClose,
    cssClass
  } = props

  const [showModal, setShowModal] = useState(show)
  const HeadingTag = `${titleTag}`
  const cssClassValue = cssClass ? cssClass.trim() : ''

  const closeModal = (e) => {        
    e ? e.preventDefault() : null   
    setShowModal(false)
    if (onClose) { onClose(false) } 
  }

  useEffect(() => { 
    setShowModal(show) 
  }, [show])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 || event.key === 'Escape') 
        closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <>
      {showModal ? (
        <div 
          className={`
            ${styles['modal']}
            ${styles['modal-' + align]} 
            ${(cssClass && cssClassValue) ? 
              cssClassValue.split(',').map(function (classItem, index) {
                return 'modal-'+classItem
              }).join(' ')
            : ''}
          `} 
          id="modal"
        > 
          <div className={`${styles['modal-main']}`}>
            <div className={styles['modal-main-close']}>
              <Button type="tertiary" icon="close" onClick={closeModal} aria-label="close" />
            </div>
            {title && (
              <HeadingTag className={styles['headline']}>{title}</HeadingTag>
            )} 
            {props.children}                
          </div>                    
        </div> 
      ) : (
        null
      )}
    </>
  )
}

Modal.propTypes = {
  show:     PropTypes.bool,
  titleTag: PropTypes.string.isRequired,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  title:    PropTypes.string,
  align:    PropTypes.string.isRequired,
  align:    PropTypes.oneOf(['left', 'center']),
  onClose:  PropTypes.func,
  cssClass: PropTypes.string
}

Modal.defaultProps = {
  show:     false,
  titleTag: 'h3',
  align:    'left',
  onClose:  null
}

export default Modal