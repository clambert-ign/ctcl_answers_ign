import React from "react";
import styles from './Modal.module.scss'

const ModalFooter = (props) => {

  return (
    <>
      {props.children && (
        <div className={styles["modal-main-footer"]}>
          {React.Children.map(props.children, function (child) {
            if (child.type.name === 'Button' && child.props.type === 'tertiary') {
              return (<span className={styles['modal-main-footer-btn-tertiary']}>{child}</span>)
            }
            if (child.type.name === 'Button' && child.props.type === 'primary') {
              return (<span className={styles['modal-main-footer-btn-primary']}>{child}</span>)
            }
            if (child.type.name === 'Button' && child.props.type === 'secondary') {
              return (<span className={styles['modal-main-footer-btn-secondary']}>{child}</span>)
            }
            return (child)
          })}
        </div>
      )}
    </>
  )
}

export default ModalFooter