import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.scss'

/**
 * List
 * @param {string}  type        - The type of list to be displayed.
 * @param {string}  itemStyle   - If list is <ul> specify the custom bullets to be displayed.
 * @param {number}  columns     - Specify the number of columns the list should be displayed across.
 * @param {number}  startValue  - Specify the start value of the list (ordered list type only).
 * @param {boolean} isReversed  - Is the list to be displayed in reverse order? (ordered list type only).
 * @returns React Component
 */

const List = (props) => {
  const {
    type,
    itemStyle,
    startValue,
    isReversed,
    columns
  } = props

  const ListType = type === "ordered" ? `${'ol'}` : `${'ul'}`
  const listRef  = useRef(null)

  useEffect(() => {
    listRef?.current?.style?.setProperty(
      "--list-column-count",
      `${columns}`
    )
    listRef?.current?.style?.setProperty(
      "--list-ol-start-value",
      `${startValue}`
    )
    if(isReversed) {
      listRef?.current?.style?.setProperty(
        "--list-ol-increment-value",
        `-1`
      )
    } else {
      listRef?.current?.style?.setProperty(
        "--list-ol-increment-value",
        `1`
      )
    }
  }, [startValue, isReversed, columns, type])

  return (
    <div className={`${styles.list}`}>
      <ListType ref={listRef}>
        {props.children && (
          <>
          {React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, { 
              itemStyle: itemStyle,
              key: index
            })
          })}
          </>
        )}
      </ListType>
    </div>
  )
}

List.propTypes = {
  type:       PropTypes.string.isRequired,
  type:       PropTypes.oneOf(['unordered', 'ordered']),
  itemStyle:  PropTypes.string,
  columns:    PropTypes.number.isRequired,
  startValue: PropTypes.number.isRequired,
  isReversed: PropTypes.bool
}

List.defaultProps = {
  type:       'unordered',
  columns:    1,
  startValue: 1,
  isReversed: false
}

export default List
