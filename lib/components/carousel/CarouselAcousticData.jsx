import Carousel from './Carousel'
import CarouselContent from './CarouselContent'
import Image from "@atoms/image/Image"
import { getComponentName } from '@services/utilities/acousticMappings'
import { getValue, getValues, getSelectionValue, getFullUrl } from '@services/utilities/utilityHelper'

const CarouselAcousticData = (props) => {
  const { 
    carouselContentItems,
    title,
    titleTag
  } = props.data

  console.log('carouseldata', carouselContentItems)
  
  return (
    <Carousel heading={getValue(title)} headingTag={getSelectionValue(titleTag)} displayCount={3}>
      <CarouselContent>
        <Image src="/images/blue-orange.png" title="Image Carousel Slide 1" />
      </CarouselContent>
      <CarouselContent>
        <Image src="/images/blue-orange.png" title="Image Carousel Slide 1" />
      </CarouselContent>
      <CarouselContent>
        <Image src="/images/blue-orange.png" title="Image Carousel Slide 1" />
      </CarouselContent>
      {/* {carouselContentItems?.values?.map((carouselItem, index) => {
        //console.log('carouselitem',carouselItem)
        carouselItem?.elements?.contentItems?.values?.map((content, index) => {
          //console.log('carouselcontent',content)        
          return (
            <CarouselContent>
              <Image src={getFullUrl(content?.elements?.src?.url)} title="Image Carousel Slide 1" />
            </CarouselContent>
          )  
        })
      })} */}
    </Carousel>
  )
}

// if(getComponentName(content.type) === 'Image') {
//   return (
//     <CarouselContent>
//       <Image key={index} src={getFullUrl(content?.elements?.src.url)} title={getValue(content?.elements?.title)} titleTag={getSelectionValue(content?.elements?.titleTag)} />
//     </CarouselContent>
//   )
// }


export default CarouselAcousticData
