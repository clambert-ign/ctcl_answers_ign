import Carousel from './Carousel'
import CarouselContent from './CarouselContent'
import ImageAcousticData from "@atoms/image/ImageAcousticData"
import AudioAcousticData from "@atoms/audio/AudioAcousticData"
import VideoAcousticData from "@atoms/video/VideoAcousticData"
import ContentCard from '@components/contentCard//ContentCard'
import ContentCardItemAcousticData from "@components/contentCard/ContentCardItemAcousticData"
import HeroHeaderAcousticData from "@components/heroHeader/HeroHeaderAcousticData"
import { getComponentName } from '@services/utilities/acousticMappings'
import { getValue, getValues, getSelectionValue, getFullUrl } from '@services/utilities/utilityHelper'

const CarouselAcousticData = (props) => {
  const { 
    adaptiveHeight,
    autoplay,
    autoplaySpeed,
    carouselContentItems,
    cssEase,
    dots,
    fade,
    infinite,
    lazyLoad,
    navigationStyle,
    pauseOnHover,
    rtl,
    slidesToShow,
    slidesToScroll,
    speed,
    swipeToSlide,
    title,
    titleTag
  } = props.data

  const settings = {
    adaptiveHeight: getValue(adaptiveHeight),
    arrows: false,
    autoplay: getValue(autoplay),
    autoplaySpeed: getValue(autoplaySpeed),
    cssEase: getSelectionValue(cssEase),
    dots: getValue(dots),    
    fade: getValue(fade),
    infinite: getValue(infinite),
    lazyLoad: getValue(lazyLoad),
    pauseOnHover: getValue(pauseOnHover),
    rtl: getValue(rtl),
    slidesToShow: getValue(slidesToShow),
    slidesToScroll: getValue(slidesToScroll),
    speed: getValue(speed),
    swipeToSlide: getValue(swipeToSlide)
  }

  // Hero Header icons
  // Responsive sticky nav
  // CSS + props
  // Update story
  
  
  return (
    <Carousel 
      heading={getValue(title)} 
      headingTag={getSelectionValue(titleTag)} 
      settings={settings} 
      navigationStyle={getSelectionValue(navigationStyle)}
    >
       {carouselContentItems?.values?.map((carouselItem, index) => {
        if(getComponentName(carouselItem.type) === 'Image') {
          return (
            <CarouselContent key={index}>
              <ImageAcousticData data={carouselItem?.elements} />
            </CarouselContent>
          )
        }
        if(getComponentName(carouselItem.type) === 'Audio') {
          return (
            <CarouselContent key={index}>
              <AudioAcousticData data={carouselItem?.elements} />
            </CarouselContent>
          )
        }
        if(getComponentName(carouselItem.type) === 'Video') {
          return (
            <CarouselContent key={index}>
              <VideoAcousticData data={carouselItem?.elements} />
            </CarouselContent>
          )
        }
        if(getComponentName(carouselItem.type) === 'ContentCardItem') {
          return (
            <CarouselContent key={index}>
              <ContentCard isMultiple={true}>
                <ContentCardItemAcousticData data={carouselItem?.elements} />
              </ContentCard>
            </CarouselContent>
          )
        }
        if(getComponentName(carouselItem.type) === 'HeroHeader') {
          return (
            <CarouselContent key={index}>
              <HeroHeaderAcousticData key={index} data={carouselItem?.elements} />
            </CarouselContent>
          )
        }
      })}
    </Carousel>
  )
}

export default CarouselAcousticData
