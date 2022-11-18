import styles from './ConfirmationDialog.module.scss'

const ConfirmationDialog = (props) => {
  return props.children ? (
    <div className={styles['confirmationDialog']}>
      {props.children}
    </div>
  ) : null
}

export default ConfirmationDialog