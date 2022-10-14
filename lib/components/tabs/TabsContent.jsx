import PropTypes from 'prop-types'
import styles from "./Tabs.module.scss"

/**
* TabsContent Component
* @param {function} index - Pass the index number.
* @param {boolean} open   - Is the Tab Content to be shown?
* @return React component
*/

const TabsContent = (props) => {
  const {
    index,
    open
  } = props

  if(open) {
    return (
      <>
      <div 
        className={`${styles.tabContent} ${open ? styles[`tabContent--open`] : styles[`tabContent--closed`]}`}
        role="tabpanel"
        id={'tabItem-' + index + '-tab'}
        aria-labelledby={'tabItem-' + index}
      >
        {props.children}
      </div>
      </>
    )
  } else {
    return null
  }
}

TabsContent.propTypes = {
  index:  PropTypes.number,
  open:   PropTypes.bool
}

TabsContent.defaultProps = {
  open: false
}

export default TabsContent
