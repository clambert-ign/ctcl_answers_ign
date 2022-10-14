import styles from './ConfirmationDialog.module.scss'

const ConfirmationDialog = (props) => {
  return (
    <div className={styles['confirmationDialog']}>
      {props.children}
    </div>
  )
}

export default ConfirmationDialog