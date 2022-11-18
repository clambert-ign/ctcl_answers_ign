import styles from './InlineHelp.module.scss'

/**
* Inline Help
* @return React component
*/

const InlineHelp = (props) => {
  return props.children ? (
    <div className={styles['inlineHelp']}>
      {props.children}
    </div>
  ) : null
}

export default InlineHelp
