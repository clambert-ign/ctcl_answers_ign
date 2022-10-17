import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { DownloadIcon, ShareIcon, ExternalLinkIcon, TerminologyIcon, AdviceIcon, BulbIcon, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ModalCloseIcon, AudioPlayIcon, Globe, CarouselIndicatorInactive, CarouselIndicatorActive } from '@assets/svgIcons/SvgIcons'

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

const Button = (props) => {
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

  const selectedIcon = (icon) => {
    switch (icon) {
      case 'download':
        return <DownloadIcon />
      case 'share':
        return <ShareIcon />
      case 'externalLink':
        return <ExternalLinkIcon />
      case 'terminology':
        return <TerminologyIcon />
      case 'bulb':
        return <BulbIcon />
      case 'advice':
        return <AdviceIcon />
      case 'chevronup':
        return <ChevronUp />
      case 'chevrondown':
        return <ChevronDown />
      case 'chevronleft':
        return <ChevronLeft />
      case 'chevronright':
        return <ChevronRight />
      case 'close':
          return <ModalCloseIcon />
      case 'audioplay':
        return <AudioPlayIcon />
      case 'globe':
        return <Globe />
      case 'carouselindicator':
        return <CarouselIndicatorInactive />
      case 'carouselindicatoractive':
        return <CarouselIndicatorActive />
      default:
        return null
    }
  }

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
        {(type === "tertiary" && icon && iconAlign === "left") ? <span>{selectedIcon(icon)}</span> : ''}      
        {type != "tertiary" ? <span>{selectedIcon(icon)}</span> : ''} 
        <span>{text}</span>      
        {(type === "tertiary" && icon && iconAlign === "right") ? <span>{selectedIcon(icon)}</span> : ''} 
      </a>
    </Link>
  )
}

Button.propTypes = {
  type:             PropTypes.string.isRequired,
  type:             PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  text:             PropTypes.string,
  link:             PropTypes.string,
  icon:             PropTypes.oneOf(['externalLink', 'download', 'terminology', 'bulb', 'advice', 'chevronup', 'chevrondown', 'chevronleft', 'chevronright', 'close', 'audioplay', 'globe', 'carouselindicator', 'carouselindicatoractive', 'share']),
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
