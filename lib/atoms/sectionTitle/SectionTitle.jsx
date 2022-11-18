import PropTypes from 'prop-types'
import styles from './SectionTitle.module.scss'

/**
 * Section Title
 * @param {string}  title        - The section title text that is to be displayed.
 * @param {string}  titleTag     - The heading tag wrapped around the section title text.
 * @param {string}  description  - The section title description to be displayed.
 * @param {string}  align        - The alignment of the section title atom.
 * @returns React Component
 */

const SectionTitle = (props) => {

  const {
    title, 
    titleTag, 
    description, 
    align
  } = props

  const HeadingTag = `${titleTag}`

  return (
    <div className={`${styles.sectionTitle} ${styles['sectionTitle--' + align]}`}>
      {title && <HeadingTag className={styles['headline']}>{title}</HeadingTag>}
      {description && (
        <p>
          {description}
        </p>
      )}
    </div>
  )
}

SectionTitle.propTypes = {
  title:        PropTypes.string.isRequired,
  titleTag:     PropTypes.string.isRequired,
  titleTag:     PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  description:  PropTypes.string,
  align:        PropTypes.string.isRequired,
  align:        PropTypes.oneOf(['left', 'center'])
}

SectionTitle.defaultProps = {
  titleTag: 'h3',
  align:    'left'
}  

export default SectionTitle