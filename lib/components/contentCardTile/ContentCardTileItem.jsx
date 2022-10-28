import PropTypes from 'prop-types'
import styles from "./ContentCardTile.module.scss"

/**
 * ContentCardTileItem Component
 * @param {string} label        - The label of the Content Card component item to be displayed.
 * @param {string} title        - The title of the Content Card component item to be displayed.
 * @param {string} titleTag     - The heading tag to wrap around the title of the Content Card component item to be displayed.
 * @param {string} subtitle     - The subtitle of the Content Card component item to be displayed.
 * @param {string} subtitleTag  - The heading tag to wrap around the subtitle of the Content Card component item to be displayed.
 * @param {string} text         - The description of the Content Card component item to be displayed.
 * @param {object} image        - The image of the Content Card component item to be displayed.
 * @param {string} imageAlign   - The alignment of the image to be displayed in the Content Card item.
 * @returns React Component
 */

const ContentCardTileItem = (props) => {
  const {
    label,
    title,
    titleTag,
    subtitle,
    subtitleTag,
    text,
    image,
    imageAlign
  } = props
  
  const HeadingTag = `${titleTag}`
  const SubHeadingTag = `${subtitleTag}`

  return (
    <div>
      <div 
        className={`
          ${styles.contentCardItem} 
          ${imageAlign ? styles['contentCardItem-' + imageAlign] : ''} 
        `}
      >
        {image && (
          <div className={styles[`contentCardItem-image`]}>
            {image}
          </div>
        )}
        <div className={styles[`contentCardItem-content`]}>
          {label && 
            <span className={styles[`contentCardItem-content-label`]}>
              {label}
            </span>
          }
          {title && (
            <HeadingTag className={styles[`headline`]}>{title}</HeadingTag>
          )}
          {subtitle && (          
            <SubHeadingTag className={styles.subheadline}>{subtitle}</SubHeadingTag>
          )}
          {text && (
            <>
              {text}
            </>
          )}
        </div>
      </div>    
      {props?.children && (
        <div className={styles["contentCardItem-content-btn"]}>
          {props?.children}
        </div>
      )}
    </div>
  )
}

ContentCardTileItem.propTypes = {
  label:        PropTypes.string,
  title:        PropTypes.string,
  titleTag:     PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  subtitle:     PropTypes.string,
  subtitleTag:  PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  text:         PropTypes.string,
  image:        PropTypes.object,
  imageAlign:   PropTypes.string,
  imageAlign:   PropTypes.oneOf(['left', 'right'])
}

ContentCardTileItem.defaultProps = {
  titleTag:     'h3',
  subtitleTag:  'h3',
  image:        null,
  imageAlign:   'left'
}

export default ContentCardTileItem
