import { getValue, getValues, getFullUrl, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'
import HeroHeader from './HeroHeader'
import Image from "@atoms/image/Image"
import ImageAcousticData from "@atoms/image/ImageAcousticData"
import Video from "@atoms/video/Video"
import VideoAcousticData from "@atoms/video/VideoAcousticData"
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import RichText from '@lib/richText/RichText'

const HeroHeaderAcousticData = (props) => {
  const { 
    align,
    backgroundImage,
    backgroundVideo,
    description,
    headingTag,
    heading,
    linksButtons,
    sideImage,
    sideVideo,
    title
  } = props.data

  const getRichText = (text) => {
    if (!text) return null
    return <RichText data={text} />
  }  

  return (
    <HeroHeader
      align={getSelectionValue(align)}
      title={getValue(title)}
      headingTag={getSelectionValue(headingTag)}
      heading={getValue(heading)}
      description={getRichText(getValue(description))}
      bgImage={backgroundImage?.url ? <Image src={getFullImageStr(backgroundImage?.url)} altText="" /> : null}
      bgVideo={backgroundVideo?.url ? <Video src={getFullUrl(backgroundVideo?.url)} autoPlay={true} isLooped={true} clickToPlay={false} showControls={false} /> : null}
      sideImage={sideImage?.value?.elements ? <ImageAcousticData data={sideImage?.value?.elements} /> : null}
      sideVideo={sideVideo?.value?.elements ? <VideoAcousticData data={sideVideo?.value?.elements} /> : null}
    >
      {getValues(linksButtons) && (
        <>
          {getValues(linksButtons).map((button, i) => {
            return (
              <ButtonAcousticData key={i} data={button.elements} />
            )
          })}
        </>
      )}
    </HeroHeader>
  )
}

export default HeroHeaderAcousticData
