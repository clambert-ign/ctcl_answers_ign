import PropTypes from 'prop-types'
import styles from './SectionFooter.module.scss'

/**
 * Section Footer
 * @param {string}  complianceCode  - The compliance text that is to be displayed.
 * @returns React Component
 */

const SectionFooter = (props) => {
  const { complianceCode } = props

  return (
    <div className={styles['sectionFooter']}>
      <p>
        {complianceCode}
      </p>
    </div>
  )
}

SectionFooter.propTypes = {
  complianceCode:   PropTypes.string.isRequired
}

export default SectionFooter