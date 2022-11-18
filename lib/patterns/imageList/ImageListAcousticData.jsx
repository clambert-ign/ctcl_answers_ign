import { getValue, getFullUrl } from '@services/utilities/utilityHelper'
import ImageList from './ImageList'
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"
import Image from '@atoms/image/Image'

const ImageListAcousticData = (props) => {
  const { 
    imageContentItems
  } = props.data

  return (
    <ImageList>
      <List>
        {imageContentItems?.values?.map((content, index) => {
          return (
            <ListItem key={index}>
              <Image src={getFullUrl(content?.elements?.src?.url)} altText="" />
            </ListItem>
          )
        })}      
      </List>
    </ImageList>
  )
}

export default ImageListAcousticData