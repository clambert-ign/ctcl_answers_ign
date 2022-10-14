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
  
  return (
    <Video
      caption={getValue(caption)}
      image={getFullUrl(image?.url)}
      src={getFullUrl(src?.url)}
      subtitle={getFullUrl(subtitle?.url)}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
      transcript={getFullUrl(transcript?.url)}
    />
  )
}

export default VideoAcousticData