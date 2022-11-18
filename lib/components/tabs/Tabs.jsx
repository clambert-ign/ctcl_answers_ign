import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getChildrenByType } from 'react-nanny';
import styles from "./Tabs.module.scss"
import TabContent from "./TabsContent"
import Button from '@atoms/button/Button'

/**
* Tab Component
* @param {string} heading     - The title of the Tabs component to be displayed.
* @param {string} headingTag  - The heading tag wrapped around the title of Tabs component to be displayed.
* @return React component
*/

const Tabs = (props) => {
  const {
    heading,
    headingTag
  } = props

  const HeadingTag = `${headingTag}`
  const tabListRef = useRef()
  const tabListItemRefs = useRef([])
  const [active, setActive] = useState({[0]:true})
  const [tabListScroll, setTabListScroll] = useState(false)
  const [tabListItemsNo, setTabListItemsNo] = useState(null)
  const [tabListItemsNext, setTabListItemsNext] = useState(1)
  const [tabListItemsPrev, setTabListItemsPrev] = useState(0)

  const tabList = getChildrenByType(props.children, [Button])
  const tabContent = getChildrenByType(props.children, [TabContent])
 
  const isTabListScroll = () => {
    tabListRef.current.scrollWidth > window.innerWidth ? setTabListScroll(true) : setTabListScroll(false)
  }

  const scrollTabListItemIntoView = (index) => {
    if(isTabListScroll){
      if(index === 0) {
        setTabListItemsNext(index+1)
        setTabListItemsPrev(0)
      } else if(index === (tabListItemsNo-1)){
        setTabListItemsNext(index)
        setTabListItemsPrev(index-1)
      } else {
        setTabListItemsNext(index+1)
        setTabListItemsPrev(index-1)
      }
    }
    tabListItemRefs.current[index].scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }

  const toggleTabItem = (e, index) => {
    e.preventDefault()
    const isOpen = !!active[index]
    if(!isOpen) {
      setActive({
        [index]: !isOpen
      })
    }
    tabListScroll ? scrollTabListItemIntoView(index) : undefined
  }

  useEffect(() => {
    setTabListItemsNo(tabList.length)
    tabListRef.current.style.setProperty(
      "--tab-list-column-count",
      `${tabList.length}`
    )
    isTabListScroll()
    window.addEventListener("resize", isTabListScroll)
    return () => window.removeEventListener("resize", isTabListScroll)
  })
  
  return (
    <div className={styles['tabs']}>
      {heading && (
        <HeadingTag className={styles['headline']}>{heading}</HeadingTag>
      )}
      <>
      {tabList && (
        <>
        <div className={styles['tabList-wrapper']}>
          {tabListScroll && ( 
            <>
              <span className={styles['tabList-scroll-icon--left']}>
                <Button type="tertiary" icon="chevronLeft" text="" onClick={() => scrollTabListItemIntoView(tabListItemsPrev)} />
              </span>
              <span className={styles['tabList-scroll-icon--right']}>
                <Button type="tertiary" icon="chevronRight" text="" onClick={() => scrollTabListItemIntoView(tabListItemsNext)} />
              </span>
            </>
          )} 
          <ul className={`${tabListScroll ? styles['tabList--scroll'] : ''}`} ref={tabListRef}
          > 
            {tabList.map((child, index) => {
              return (
                <li
                  id={`${'tabListItem-' + index}`}
                  className={`${active[index] ? styles['active'] : ''}`}
                  key={index}
                  ref={(element) => {
                    tabListItemRefs.current[index] = element;
                  }}
                >                
                  {React.cloneElement(child, { 
                    open: !!active[index],
                    onClick: (e) => toggleTabItem(e, index),
                    key: index,
                    'id':`${'tabItem-' + index}`,
                    'role': 'tab',
                    'aria-selected':!!active[index],
                    'aria-controls':`${'tabItem-' + index + '-tab'}`
                  })}
                </li>
              )
            })}
          </ul>
        </div>
        </>
      )}          
      {tabContent && tabContent.map((child, index) => {
        return React.cloneElement(child, { 
          key: index,
          index: index,
          open: !!active[index]
        })      
      })}
      </>
    </div>
  )
}

Tabs.propTypes = {
  heading:    PropTypes.string,  
  headingTag: PropTypes.string,
  headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Tabs.defaultProps = {
  headingTag: 'h3'
}


export default Tabs