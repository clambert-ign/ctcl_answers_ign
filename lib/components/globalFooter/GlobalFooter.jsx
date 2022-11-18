import PropTypes from 'prop-types'
import styles from './GlobalFooter.module.scss'
import Divider from '@atoms/divider/Divider'
import { ScrollToTop } from '@assets/svgIcons/SvgIcons'
import iconHelper from '@services/utilities/iconHelper'

/**
  * Global Footer
  * @param {object} logo            - The Global Footer Component logo to be displayed.
  * @param {string} languageIcon    - The Global Footer Component language icon to be displayed.
  * @param {string} languageText    - The Global Footer Component language text to be displayed.
  * @param {object} languageLink    - The Global Footer Component language link to be displayed.
  * @param {string} complianceCode  - The Global Footer Component compliance code to be displayed.
  * @param {string} datePublished   - The Global Footer Component published date to be displayed.
  * @param {string} footerSignoff   - The Global Footer Component footer signoff to be displayed.
  * @return React component
  */

const GlobalFooter = (props) => {

  const {
    logo,
    languageIcon,
    languageText,
    languageLink,
    complianceCode,
    datePublished,
    footerSignoff
  } = props

  const date = (datePublished) ? datePublished : <FooterDate />
  const SVGLanguageIcon = languageIcon ? iconHelper.init(languageIcon) : null

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-container-logo']}>
          {logo}
        </div>
        <div className={styles['footer-container-content']}>
          {languageLink && (
            <div className={styles['country-selector']}>
              <SVGLanguageIcon />
              <span>{languageText}</span>
              {languageLink}
            </div>
          )}          
          <div className={styles['compliance']}>
            <span>
              <p>{date}</p>
              <p>{complianceCode}</p>
            </span>
            <ScrollToTop />
          </div>
        </div>
      </div>      
      <Divider />
      {props.children && (
        <div className={styles['footer-menuItems']}>
          {props.children}
        </div>
      )}
      <div className={styles['footer-signOff']}>
        {footerSignoff}
      </div>
    </footer>
  )
}

const FooterDate = () => {
  const dateObj = new Date()
  const year = dateObj.getUTCFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = monthNames[dateObj.getMonth()]
  return (`${month} ${year}`)
}

GlobalFooter.propTypes = {
  logo:           PropTypes.object,
  languageIcon:   PropTypes.string,
  languageText:   PropTypes.string,
  languageLink:   PropTypes.object,
  complianceCode: PropTypes.string,
  datePublished:  PropTypes.string
}

GlobalFooter.defaultProps = {
  logo: null,
  languageIcon: 'globe',
  languageText: 'Country / Language',
  languageLink: null
}

export default GlobalFooter
