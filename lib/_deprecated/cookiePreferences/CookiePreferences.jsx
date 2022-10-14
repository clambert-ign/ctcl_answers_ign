import PropTypes from 'prop-types'
import styles from "./CookiePreferences.module.scss"
import Image from '../../atoms/image/Image'

/**
 * CookiePreferences Component
 * @param {string} CookiePreferenceDescription  - The Cookie Preferences Component description to be displayed
 * @param {string} CookiePreferenceTitle        - The Cookie Preferences Component title to be displayed
 * @returns React Component
 */

const CookiePreferences = (props) => {
  const { 
    CookiePreferenceDescription, 
    CookiePreferenceTitle
  } = props

  return (
    <div className={styles["cookiepreferences"]}>
      <Image src="/images/kki-logo.png" />
      {CookiePreferenceDescription && (
        <p>{CookiePreferenceDescription}</p>
      )}     
      {CookiePreferenceTitle && (
        <h4 className={styles["headline"]}>{CookiePreferenceTitle}</h4>
      )}
      <div className={styles["cookiepreferences-content"]}>
        {props.children}
      </div>
    </div>
  )
}

CookiePreferences.propTypes = {
  CookiePreferenceTitle:        PropTypes.string.isRequired,
  CookiePreferenceDescription:  PropTypes.string.isRequired
}

export default CookiePreferences
