import styles from './CountrySelector.module.scss'

const CountrySelector = (props) => {
  return props.children ? (
    <div className={styles['countrySelector']}>  
      {props.children}
    </div>
  ) : null
}

export default CountrySelector