import React from "react";
import styles from './Modal.module.scss'

const ModalFooter = (props) => {

  return (
    <>
      {props.children && (
        <div className={styles["modal-main-footer"]}>
          {props.children}
        </div>
      )}
    </>
  )
}

export default ModalFooter