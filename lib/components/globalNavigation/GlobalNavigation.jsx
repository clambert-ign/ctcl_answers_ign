import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import NavigationSlideOut from './NavigationSlideOut'
import NavigationAccordion from './NavigationAccordion'
import styles from './GlobalNavigation.module.scss'
import Image from '@atoms/image/Image'
import Button from '@atoms/button/Button'
import { BurgerMenu } from '@assets/svgIcons/SvgIcons'

/**
  * Global Navigation
  * @param {string} logoText  - The Logo text of the Global Navigation to be displayed.
  * @param {string} logo      - The Logo Image of the Global Navigation to be displayed.
  * @param {object} menuData  - The Menu Items of the Global Navigation to be displayed.
  * @return React component
  */

const GlobalNavigation = (props) => {
    
  const {
    logoText,
    logo,
    menuData,
    routerPath
  } = props
  
  const menuContentRef    = useRef(null)
  const menuContainerRef  = useRef(null)
  const burgerMenuRef     = useRef(null)
    
  const [displayMenu, setDisplayMenu]     = useState(null)
  const [openSection, toggleOpenSection]  = useState(null)
  const [scrollDir, setScrollDir]         = useState('scrolling down')
  const [scrollingUp, setScrollUp]        = useState(false)

  let isMenuItems = false

  const burgerOnClick = (e) => {
    e.preventDefault()
    setDisplayMenu(true)        
  }

  const onClick = (e,i) => {    
    e.preventDefault()
    toggleOpenSection(() => {
      if (openSection === i) {
        return null
      }
      return i
    })
  }

  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const updateWidthAndHeight = () => {
    setContainerWidth(menuContainerRef.current.offsetWidth)
    setContentWidth(menuContentRef.current.offsetWidth)        
  }

  useEffect(() => {
    updateWidthAndHeight()
    window.addEventListener("resize", updateWidthAndHeight)
    if (contentWidth >= containerWidth || contentWidth === 0) {
      menuContainerRef.current.style.setProperty(
        "visibility",
        "visible"
      )
      burgerMenuRef.current.style.setProperty(
        "visibility",
        "visible"
      )
    } else {
        menuContainerRef.current.style.setProperty(
          "visibility",
          "visible"
        )
        burgerMenuRef.current.style.setProperty(
          "visibility",
          "visible"
        )
    }
    return () => window.removeEventListener("resize", updateWidthAndHeight)
  })

  useEffect(() => {
          
    const menuItemsNo = Object.keys(menuData.menu).length
    menuContentRef.current.style.setProperty(
      "--gn-menu-desktop-rows",
      `${menuItemsNo}`
    )

    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const checkScrollSpeed = (function (settings) {
      settings = settings || {}
      let lastPos,
        newPos,
        timer,
        delta,
        delay = settings.delay || 50

      function clear() {
        lastPos = null
        delta = 0
      }

      clear()

      return function () {
        newPos = window.scrollY
        if (lastPos != null) {
          delta = newPos - lastPos
        }
        lastPos = newPos
        clearTimeout(timer)
        timer = setTimeout(clear, delay)
        return delta
      }
    })()

    const onScroll = () => {
      const scrollSpeed = checkScrollSpeed(),
            speedThreshold = -25

      if (scrollDir === 'scrolling up' && scrollSpeed < speedThreshold && lastScrollY > 100) {
        setScrollUp(true)
      } else if (lastScrollY < 250) {
        setScrollUp(false)
      } else if (scrollDir === 'scrolling down') {
        setScrollUp(false)
      }

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  
  if (menuData?.menu) {
    menuData.menu.some((element) => {
      if (element.menuItems.length > 0) {
        isMenuItems = true
        return
      }
    })
  }

  return (
    <>
      <div className={`${styles['globalNav']} ${scrollingUp ? styles['globalNav-fixed'] : ''}`}>
        <div className={styles['globalNav-container']}>
            
          <div className={styles["globalNav-container-logo"]}>
            <Image src={logo} altText={logoText} />
          </div>
          
          <div className={styles["globalNav-container-logokki"]}>
            <Image src="/images/KyowaKirin_Logo.svg" altText="Kyowa Kirin Logo" />
          </div>
          
          <span className={styles["globalNav-container-menu"]} ref={burgerMenuRef} onClick={(e) => burgerOnClick(e)}>
            <BurgerMenu />
          </span>

          <div className={styles['globalNav-desktopMenu']} ref={menuContainerRef}>
            <ul ref={menuContentRef}>
              {menuData?.menu &&
                menuData.menu.map(({ menuItem, menuItems }, index) => {
                  const selected = menuItem?.url === routerPath
                  return (
                    <li
                      key={`menuItem${index}`}
                      className={`${
                        selected
                        ? styles["selected"]
                        : ""
                      }`}
                      onClick={(e) => onClick(e,index)}
                    >
                      {menuItem.length > 0 ? (
                        <Button 
                          type="tertiary"
                          link={menuItem?.url}
                          text={menuItem?.text}
                          icon="chevrondown"
                          iconAlign="right"
                        />
                      ) : (
                        <Button 
                          type="tertiary"
                          link={menuItem?.url}
                          text={menuItem?.text}
                        />
                      )}
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>

        {menuData && isMenuItems && menuData.menu.map(({ menuItems }, index) => {
          const open = openSection === index
          return (
            <div key={`subNavHolder${index}`} className={styles['globalNav-subNav']}>
              {open && (
                <ul key={`list${index}`}>
                  {menuItems?.map(({ url, text }, i) => {
                    return (
                      <li key={`item${i}`}>
                        <Button 
                          type="tertiary" 
                          link={url} 
                          text={text}
                        />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })} 
      </div>

      {displayMenu && (
        <NavigationSlideOut onClose={setDisplayMenu}>
          <NavigationAccordion data={menuData} onClose={setDisplayMenu} />
        </NavigationSlideOut>
      )}
    </>
  )
}

GlobalNavigation.propTypes = {
  logoText:   PropTypes.string,
  logo:       PropTypes.string,
  menuData:   PropTypes.object
}

export default GlobalNavigation
