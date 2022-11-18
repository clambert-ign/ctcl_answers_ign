import { getValue, getFullUrl } from '@services/utilities/utilityHelper'
import PersonList from './PersonList'
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"
import Person from '@components/person/Person'
import Image from '@atoms/image/Image'

const PersonListAcousticData = (props) => {
  const { 
    personContentItems
  } = props.data
  
  return (
    <PersonList>
      <List>
        {personContentItems?.values?.map((content, index) => {
          return (
            <ListItem key={index}>
              <Person image={<Image src={getFullUrl(content?.elements?.image?.url)} altText="" />} name={getValue(content?.elements?.name)} role={getValue(content?.elements?.role)} />
            </ListItem>
          )
        })}      
      </List>
    </PersonList>
  )
}

export default PersonListAcousticData