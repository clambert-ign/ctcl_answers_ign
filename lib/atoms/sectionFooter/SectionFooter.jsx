import PropTypes from 'prop-types'
import styles from './SectionFooter.module.scss'

/**
 * Section Footer
 * @param {string}  complianceText  - The compliance text that is to be displayed.
 * @returns React Component
 */

const SectionFooter = (props) => {
  const { complianceText } = props

  return (
    <div className={styles['sectionFooter']}>
      <p>
        {complianceText}
      </p>
    </div>
  )
}

SectionFooter.propTypes = {
  complianceText:   PropTypes.string.isRequired
}

export default SectionFooter