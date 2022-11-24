import Image from './Image'
import { getValue, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'

const ImageAcousticData = (props) => {
  const { 
    altText, 
    caption, 
    downloadText,
    position,
    src,
    title,
    titleTag
  } = props.data

  return (
    <Image
      altText={getValue(altText)}
      caption={getValue(caption)}
      downloadText={getValue(downloadText)}
      position={getSelectionValue(position)}
      src={src?.url ? getFullImageStr(src?.url) : null}
      title={getValue(title)}
      titleTag={getSelectionValue(titleTag)}
    />
  )
}

export default ImageAcousticData
