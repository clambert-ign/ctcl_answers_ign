import styles from './InlineHelp.module.scss'

/**
* Inline Help
* @return React component
*/

const InlineHelp = (props) => {
  return (
    <div className={styles.inlineHelp}>
      {props.children}
    </div>
  )
}

export default InlineHelp
