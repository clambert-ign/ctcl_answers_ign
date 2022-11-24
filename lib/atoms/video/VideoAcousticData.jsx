import { getValue, getFullUrl, getSelectionValue } from '@services/utilities/utilityHelper'
import Video from './Video'

const VideoAcousticData = (props) => {
  const { 
    caption,
    image,
    src,
    subtitle,
    title,
    titleTag,
    transcript 
  } = props.data
  
  return  src ? (
    <Video
      caption={getValue(caption)}
      image={image?.url ? getFullUrl(image?.url) : null}
      src={src?.url ? getFullUrl(src?.url) : null}
      subtitle={subtitle?.url ? getFullUrl(subtitle?.url) : null}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
      transcript={transcript?.url ? getFullUrl(transcript?.url) : null}
    />
  ) : null
}

export default VideoAcousticData