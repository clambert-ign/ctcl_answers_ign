import { getValue, getFullUrl } from '@services/utilities/utilityHelper'
import CalloutQuote from './CalloutQuote'

const CalloutQuoteAcousticData = (props) => {
  const { 
    authorImage,
    authorName,
    authorRole,
    citeLink,
    citeText,
    text 
  } = props.data
  
  return (
    <CalloutQuote
      text={getValue(text)}
      authorImg={getFullUrl(authorImage?.url)} 
      authorName={getValue(authorName)}
      authorRole={getValue(authorRole)}
      citeText={getValue(citeText)}
      citeLink={getValue(citeLink)}
    />
  )
}

export default CalloutQuoteAcousticData