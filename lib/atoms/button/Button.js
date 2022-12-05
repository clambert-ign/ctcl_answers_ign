import React, { useRef, useImperativeHandle } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import iconHelper from '@services/utilities/iconHelper'

/**
 * Button
 * @param {string} type             - The type of button/link (primary, secondary, tertiary)
 * @param {string} text             - The text value of the button/link
 * @param {string} link             - The url value of the button/link
 * @param {string} icon             - Display an icon alongside the button/link text (download, externalLink)
 * @param {string} iconAlign        - If an icon is displayed choose its alignement (left, right)
 * @param {boolean} isExternal      - Is the button/link external?
 * @param {object} externalText     - What text to display in the dialog before opening external link
 * @param {boolean} isDownload      - Is the button/link being used to download a file?
 * @param {object} downloadFilename - Customise the name of the file being downloaded (must in clude extension)
 * @param {boolean} isDisabled      - Is the button/link disabled?
 * @param {function} onClick        - Pass the onClick event.
 * @returns React Component
 */

const Button = React.forwardRef((props, ref) => {
  const { 
    type, 
    text, 
    link, 
    icon, 
    iconAlign, 
    isExternal,
    externalText,
    isDownload,
    downloadFilename,
    isDisabled,
    onClick,
    ...rest
  } = props

  const btnRef = useRef(null) 
  useImperativeHandle(ref, () => btnRef)
  const SVGIcon = icon ? iconHelper.init(icon) : null

  const externalLinkAttr = {
    'target': '_blank',
    'rel': 'noreferrer'
  }
  
  const downloadLinkAttr = {
    'download': downloadFilename ? downloadFilename : '',
    'target': '_blank',
    'rel': 'noreferrer nofollow'
  }

  return (
    <Link href={link? link : ""}>
      <a 
        ref={btnRef}
        className={`
          ${styles.btn} 
          ${styles['btn-' + type]} 
          ${isDisabled ? styles[`btn-${type}-disabled`] : ''} 
          ${icon ? (iconAlign ? styles[`btn-${type}-icon--${iconAlign}`] : styles[`btn-${type}-icon--left`]) : ''}
        `}
        onClick={onClick}
        {...isExternal ? {...externalLinkAttr} : ''} 
        {...isDownload ? {...downloadLinkAttr} : ''} 
        {...rest}
      >
        {(type === "tertiary" && icon && iconAlign === "left" && SVGIcon) ? <span><SVGIcon /></span> : ''}      
        {(type != "tertiary" && icon && SVGIcon) ? <span><SVGIcon /></span> : ''}      
        <span>{text}</span>
        {(type === "tertiary" && icon && iconAlign === "right" && SVGIcon) ? <span><SVGIcon /></span> : ''}
      </a>
    </Link>
  )
})

Button.propTypes = {
  type:             PropTypes.string.isRequired,
  type:             PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  text:             PropTypes.string,
  link:             PropTypes.string,
  icon:             PropTypes.string,
  icon:             PropTypes.oneOf(['externalLink', 'download', 'terminology', 'bulb', 'advice', 'chevronUp', 'chevronDown', 'chevronLeft', 'chevronRight', 'close', 'audioPlay', 'globe', 'carouselIndicator', 'carouselIndicatorActive', 'play', 'share', 'shareFacebook', 'shareTwitter', 'shareLink', 'shareEmail', 'sharePrint']),
  iconAlign:        PropTypes.oneOf(['left', 'right']),
  isExternal:       PropTypes.bool,
  externalText:     PropTypes.object,
  isDownload:       PropTypes.bool,
  downloadFilename: PropTypes.string,
  isDisabled:       PropTypes.bool,
  onClick:          PropTypes.func
}

Button.defaultProps = {
  type:       'primary',
  iconAlign:  'left',
  isExternal: false,
  isDisabled: false,
  isDownload: false,
  onClick:    undefined
}

export default Button
