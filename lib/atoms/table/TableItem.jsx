import PropTypes from 'prop-types'
import styles from "./Table.module.scss"

/**
  * Table Item
  * @param {string} type      - The type of Table Item we need to display (th,td,tr,thead,tbody).
  * @param {string} cssClass  - The CSS Class of the Table Item to be displayed.
  * @return React component
 */

const TableItem = (props) => {
  const {
    type,
    cssClass,
    ...rest
  } = props 

  const ItemType = `${type}`
  const cssClassValue = cssClass ? cssClass : ''

  return (
    <ItemType 
      className={`
        ${cssClassValue.split(',').map(function (classItem, index) {
          return styles[classItem]
        }).join(' ')}    
      `}
      {...rest}
    >
      {props.children}
    </ItemType>
  )
}

TableItem.propTypes = {
  type: PropTypes.string,  
  type: PropTypes.oneOf(['td', 'th', 'tr', 'thead', 'tbody']),
  cssClass: PropTypes.string
}

TableItem.defaultProps = {
  type: 'td'
}

export default TableItem
