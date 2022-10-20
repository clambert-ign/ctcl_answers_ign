import Editorial from './Editorial'
import EditorialTextAcousticData from '@atoms/editorialText/EditorialTextAcousticData'
import ImageAcousticData from '@atoms/image/ImageAcousticData'
import VideoAcousticData from '@atoms/video/VideoAcousticData'
import AudioAcousticData from '@atoms/audio/AudioAcousticData'
import CalloutQuoteAcousticData from '@atoms/calloutQuote/CalloutQuoteAcousticData'
import { getComponentName } from '@services/utilities/acousticMappings'

const EditorialAcousticData = (props) => {
  const { 
    contentLeft,
    contentRight
  } = props.data

  return (  
    <Editorial>
      {contentLeft && (
        <div>
          {contentLeft?.values?.map((content, index) => {
            if (getComponentName(content.type) === 'EditorialText') {
              return <EditorialTextAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Image') {
              return <ImageAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Video') {
              return <VideoAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Audio') {
              return <AudioAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'CalloutQuote') {
              return <CalloutQuoteAcousticData key={index} data={content?.elements} />
            }
          })}
        </div>
      )}
      {contentRight && (
        <div>
          {contentRight?.values?.map((content, index) => {
            if (getComponentName(content.type) === 'EditorialText') {
              return <EditorialTextAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Image') {
              return <ImageAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Video') {
              return <VideoAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'Audio') {
              return <AudioAcousticData key={index} data={content?.elements} />
            }
            if (getComponentName(content.type) === 'CalloutQuote') {
              return <CalloutQuoteAcousticData key={index} data={content?.elements} />
            }
          })}
        </div>
      )}
    </Editorial>
  )
}

export default EditorialAcousticData
