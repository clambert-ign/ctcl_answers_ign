import PropTypes from 'prop-types'
import Divider from '@atoms/divider/Divider'
import { QuoteMarks } from '@assets/svgIcons/SvgIcons'
import styles from './CalloutQuote.module.scss'

/**
 * Callout Quote
 * @param {string}  text        - The callout quote text to be displayed.
 * @param {string}  citeLink    - The callout quote citation link to be associated with the citation text.
 * @returns React Component
 */

const CalloutQuote = (props) => {
    
  const{
    text,
    citeLink
  } = props

  return (
    <figure className={styles.callOutQuote}>
      <QuoteMarks></QuoteMarks>
      <Divider />
      <blockquote cite={citeLink}>
        {text}
      </blockquote>
      { props.children && (
        <figcaption>
          { props.children }  
        </figcaption>
      )}
    </figure>
  )
}

CalloutQuote.propTypes = {
  text:     PropTypes.string.isRequired,
  citeLink: PropTypes.string
}

export default CalloutQuote