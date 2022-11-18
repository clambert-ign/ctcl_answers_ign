import React, { useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Button from '@atoms/button/Button'
import styles from './Image.module.scss'

/**
 * Image
 * @param {string}  title          - The title of the media to be displayed.
 * @param {string}  titleTag       - The heading tag wrapped around the media title.
 * @param {string}  caption        - The caption text to be displayed below the image media.
 * @param {string}  src            - The location of the media source file.
 * @param {string}  altText        - The alt text associated with the image media.
 * @param {string}  position       - The position of the image media asset.
 * @param {string}  downloadText   - The text to display to offer the media image as a download.
 * @returns React Component
 */

const Image = React.forwardRef((props, ref) => {
  const {
    title,
    titleTag,
    caption,
    src,
    altText,
    position,
    downloadText,
    ...rest
  } = props

  const imageRef = useRef(null)  
  useImperativeHandle(ref, () => imageRef?.current)
  const HeadingTag = `${titleTag}`
  
  return src ? (
    <div className={`${styles['image']} ${position ? styles[`image--${position}`] : ''}`} ref={imageRef}>
      {title && <HeadingTag className={styles['headline']}>{title}</HeadingTag>}
      <span className={styles['image-wrapper']}><img {...rest} src={src} alt={altText} /></span>
      {caption && <p className={styles['image-caption']}>{caption}</p>}
      {downloadText && (
        <div className={styles['image-download']}>
          <Button type="tertiary" text={downloadText} link={src} icon="download" iconAlign="right" download={true} />
        </div>
      )}
    </div>
  ) : null
})

Image.propTypes = {
  title:         PropTypes.string,
  titleTag:      PropTypes.string.isRequired,
  titleTag:      PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  caption:       PropTypes.string,
  src:           PropTypes.string.isRequired,
  altText:       PropTypes.string,
  position:      PropTypes.string.isRequired,
  position:      PropTypes.oneOf(['fixed', 'full', 'fullLeft', 'fullRight']),
  downloadText:  PropTypes.string
}

Image.defaultProps = {
  titleTag: 'h3',
  position: 'fixed'
}

export default Image
