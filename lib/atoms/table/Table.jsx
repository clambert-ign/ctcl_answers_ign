import styles from "./Table.module.scss"

const Table = (props) => {
  return (
    <div className={styles["table"]}>
      {props.children}
    </div>
  )
}

export default Table
