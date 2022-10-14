import { getValue, getFullUrl, getSelectionValue } from '@services/utilities/utilityHelper'
import Audio from './Audio'

const AudioAcousticData = (props) => {
  const { 
    description,
    duration,
    image,
    src,
    title,
    titleTag,
    transcript 
  } = props.data

  return (
    <Audio
      description={getValue(description)}
      duration={getValue(duration)}
      image={getFullUrl(image?.url)}
      src={getFullUrl(src?.url)}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
      transcript={getFullUrl(transcript?.url)}
    />
  )
}

export default AudioAcousticData