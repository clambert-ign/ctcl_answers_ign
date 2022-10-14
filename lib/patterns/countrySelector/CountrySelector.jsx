import styles from './CountrySelector.module.scss'

const CountrySelector = (props) => {
  return (
    <div className={styles['countrySelector']}>  
      {props.children}
    </div>
  )
}

export default CountrySelector