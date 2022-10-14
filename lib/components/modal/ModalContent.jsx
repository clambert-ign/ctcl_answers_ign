import { useEffect, useState, useRef } from 'react'
import styles from './Modal.module.scss'

const ModalContent = (props) => {

  const [contentBlurred, setContentBlurred] = useState(false)
  const modalContentRef = useRef(null)

  useEffect(() => {
    if(modalContentRef.current.scrollHeight > modalContentRef.current.offsetHeight){
      setContentBlurred(true)
    } else {
      setContentBlurred(false)
    }
  }, [modalContentRef])

  return (
    <div className={`${styles['modal-main-content']} ${contentBlurred ? styles['modal-main-content--blur'] : ''}`} ref={modalContentRef} tabIndex="0">
      {props.children}
    </div>
  )
}

export default ModalContent