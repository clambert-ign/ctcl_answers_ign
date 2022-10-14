import PropTypes from 'prop-types'
import Image from '@atoms/image/Image'
import Divider from '@atoms/divider/Divider'
import { QuoteMarks } from '@assets/svgIcons/SvgIcons'
import styles from './CalloutQuote.module.scss'

/**
 * Callout Quote
 * @param {string}  text        - The callout quote text to be displayed.
 * @param {string}  authorImg   - The callout quote author image to be displayed.
 * @param {string}  authorName  - The callout quote author name to be displayed.
 * @param {string}  authorRole  - The callout quote author role to be displayed.
 * @param {string}  citeText    - The callout quote citation text to be displayed.
 * @param {string}  citeLink    - The callout quote citation link to be associated with the citation text.
 * @returns React Component
 */

const CalloutQuote = (props) => {
    
  const{
    text, 
    authorImg, 
    authorName, 
    authorRole,
    citeText,
    citeLink
  } = props

  return (
    <figure className={styles.callOutQuote}>
      <QuoteMarks></QuoteMarks>
      <Divider />
      <blockquote cite={citeLink}>
        {text}
      </blockquote>
      { authorName && (
        <figcaption>
          { authorImg && (
            <div className={styles[`callOutQuote-authorImage`]}>
              <Image src={authorImg} altText="A profile image of John Smith" />
            </div>
          )}
          <ul>
            <li>{authorName}</li>
            <li>{authorRole}, <cite>{citeText}</cite></li>
          </ul>    
        </figcaption>
      )}
    </figure>
  )
}

CalloutQuote.propTypes = {
  text:          PropTypes.string.isRequired,
  authorImg:     PropTypes.string,
  authorName:    PropTypes.string,
  authorRole:    PropTypes.string,
  citeText:      PropTypes.string,
  citeLink:      PropTypes.string
}

export default CalloutQuote
