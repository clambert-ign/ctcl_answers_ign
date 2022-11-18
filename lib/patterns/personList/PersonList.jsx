import styles from './PersonList.module.scss'

/**
* Person List
* @return React component
*/

const PersonList = (props) => {

  return props.children ? (
    <div className={styles['personList']}>
      {props.children}
    </div>
  ) : null
}

export default PersonList
