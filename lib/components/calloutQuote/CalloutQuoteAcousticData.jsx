import { getValue, getFullUrl } from '@services/utilities/utilityHelper'
import CalloutQuote from './CalloutQuote'
import Person from '@components/person/Person'
import Image from '@atoms/image/Image'

const CalloutQuoteAcousticData = (props) => {
  const { 
    personContent,
    citeLink,
    text 
  } = props.data
  
  return (
    <CalloutQuote
      text={getValue(text)}
      citeLink={getValue(citeLink)}
    >
      <Person image={<Image src={getFullUrl(personContent?.value?.elements?.image?.url)} altText="" />} name={getValue(personContent?.value?.elements?.name)} role={getValue(personContent?.value?.elements?.role)} />
    </CalloutQuote>
  )
}

export default CalloutQuoteAcousticData