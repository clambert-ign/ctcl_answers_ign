import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from "./Accordion.module.scss"

/**
* Accordion Component
* @param {string} heading       - The title of the Accordion component to be displayed.
* @param {string} headingTag    - The heading tag wrapped around the title of Accordion component to be displayed.
* @param {number} openPanel     - Specify which accordion panel should be open
* @param {boolean} openMultiple - Are we allowing multiple accordion items to be open at the same time?
* @return React component
*/

const Accordion = (props) => {
  const {
    heading,
    headingTag,
    openPanel,
    openMultiple
  } = props

  const HeadingTag = `${headingTag}`
  const [active, setActive] = useState({[(openPanel-1)]:true})

  useEffect(() => {
    setActive({
      [(openPanel-1)]: true
    })
  }, [openPanel])

  const toggleAccordionItem = (e, index) => {
    e.preventDefault()
    const isOpen = !!active[index]
    if(openMultiple){
      setActive({
        ...active,
        [index]: !isOpen
      })
    }else{
      setActive({
        [index]: !isOpen
      })
    }
  }
  
  return (
    <div className={styles["accordion"]}>
      {heading && (
        <HeadingTag className={styles.headline}>{heading}</HeadingTag>
      )}
      <dl>
        {props.children && (
          <>
          {React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, { 
              index: index,
              open: !!active[index],
              onClick: (e) => toggleAccordionItem(e, index),
              key: index
            })
          })}
          </>
        )}
      </dl>
    </div>
  )
}

Accordion.propTypes = {
  heading:      PropTypes.string,  
  headingTag:   PropTypes.string,
  headingTag:   PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  openPanel:    PropTypes.number,
  openMultiple: PropTypes.bool
}

Accordion.defaultProps = { 
  headingTag: 'h3',
  openMultiple: false
}

export default Accordion