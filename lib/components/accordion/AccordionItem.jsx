import PropTypes from 'prop-types'
import styles from "./Accordion.module.scss"
import Button from '@atoms/button/Button'
import { ChevronDown, ChevronUp } from '@assets/svgIcons/SvgIcons'

/**
* AccordionItem Component
* @param {string} title     - The title of the Accordion Item
* @param {string} icon      - The icon of the Accordion Item
* @param {boolean} open     - Is the Accordion Item to be shown?
* @param {function} index   - Pass the item index number.
* @param {function} onClick - Pass the onClick event.
* @return React component
*/

const AccordionItem = (props) => {
  const {
    title,
    icon,
    open,
    index,
    onClick
  } = props
    
  return (
    <>
    <dt className={`${open ? styles[`open`] : styles[`closed`]}`}>
      <Button
        text={title}
        link="/#"
        icon={icon}
        onClick={onClick}
        id={'accordion-header-' + index}
        aria-expanded={open}
        aria-controls={'accordion-panel-' + index}
      />
      <span className={styles.chevron}>{open ? <ChevronUp /> : <ChevronDown />}</span>
    </dt>
    <dd   
      aria-hidden={!open}
      id={'accordion-panel-' + index}
      aria-labelledby={'accordion-header-' + index}
      className={`${open ? styles[`open`] : styles[`closed`]}`}
    >
      {props.children}
    </dd>
    </>
  )
}

AccordionItem.propTypes = {
  title:    PropTypes.string,  
  icon:     PropTypes.string,  
  open:     PropTypes.bool,
  index:    PropTypes.number,
  onClick:  PropTypes.func
}

AccordionItem.defaultProps = { 
  icon:     'globe',
  open:     false,
  onClick:  undefined
}

export default AccordionItem
