import { useEffect, useRef } from 'react'

const ListItem = (props) => {

  const {
    itemStyle
  } = props
  
  const listRef = useRef()

  useEffect(() => {
    if(itemStyle){
      listRef?.current?.style?.setProperty(
        "--list-item-before-content",
        '"'+itemStyle+'"'
      )
    }
  }, [itemStyle])

  return (
    <li ref={listRef}>
      {props.children}
    </li>
  )
}
export default ListItem
