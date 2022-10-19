import { getValue, getValues, getFullUrl, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'
import HeroHeader from './HeroHeader'
import Image from "@atoms/image/Image"
import Video from "@atoms/video/Video"
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

  const bgImage = backgroundImage?.value?.elements?.src?.url
  const bgVideo = backgroundVideo?.value?.elements?.src?.url
  const sdImage = sideImage?.value?.elements?.src?.url
  const sdVideo = sideVideo?.value?.elements?.src?.url 

  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }  

  return (
    <HeroHeader
      align={getSelectionValue(align)}
      title={getValue(title)}
      headingTag={getSelectionValue(headingTag)}
      heading={getValue(heading)}
      description={getRichText(getValue(description))}
      bgImage={bgImage? <Image src={getFullImageStr(bgImage)} /> : null}
      bgVideo={bgVideo? <Video src={getFullUrl(bgVideo)} autoPlay={true} isLooped={true} clickToPlay={false} showControls={false} /> : null}
      sideImage={sdImage? <Image src={getFullImageStr(sdImage)} /> : null}
      sideVideo={sdVideo? <Video src={getFullUrl(sdVideo)} autoPlay={true} isLooped={true} clickToPlay={false} showControls={false} /> : null}
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
