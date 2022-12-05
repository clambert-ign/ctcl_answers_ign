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

  
  console.log('audioad:data:', props.data)
  console.log('audioad:src:', src)

  return (
    <Audio
      //ref={audioRef}
      description={getValue(description)}
      duration={getValue(duration)}
      image={image?.url ? getFullUrl(image?.url) : null}
      src={src?.url ? getFullUrl(src?.url) : null}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
      transcript={transcript?.url ? getFullUrl(transcript?.url) : null}
    />
  )
}

export default AudioAcousticData