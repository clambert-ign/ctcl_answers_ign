import { useEffect, useRef } from 'react'

const ListItem = (props) => {

  const {
    itemStyle
  } = props
  
  const listRef = useRef()

  useEffect(() => {
    if(itemStyle){
      listRef.current.style.setProperty(
        "--list-item-before-content",
        '"'+itemStyle+'"'
      )
      listRef.current.style.setProperty(
        "--list-ul-item-padding",
        '16px 0 8px 40px'
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
