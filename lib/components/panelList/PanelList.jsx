import PropTypes from 'prop-types'
import styles from './PanelList.module.scss'

/**
 * PanelList
 * @param {string}  title           - The title of the panel to be displayed.
 * @param {string}  titleTag        - The heading tag wrapped around the panel title.
 * @param {string}  complianceCode  - The compliance code of the panel to be displayed.
 * @returns React Component
 */

const PanelList = (props) => {
  const {
    title,
    titleTag,
    complianceCode
  } = props

  const HeadingTag = `${titleTag}`

  return (
    <div className={`${styles['panelList']}`}>
      {title && (
        <HeadingTag>{title}</HeadingTag>
      )}
      {props.children}
      {complianceCode && (
        <p className={`${styles['complianceCode']}`}>{complianceCode}</p>
      )}      
    </div>
  )
}

PanelList.propTypes = {
  title:          PropTypes.string,
  titleTag:       PropTypes.string.isRequired,
  titleTag:       PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  complianceCode: PropTypes.string
}

PanelList.defaultProps = {
  titleTag: 'h3'
}

export default PanelList
