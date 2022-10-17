import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from "./Carousel.module.scss"
import Button from "@atoms/button/Button"

/**
* Carousel Component
* @param {string} heading           - The title of the Carousel component to be displayed.
* @param {string} headingTag        - The heading tag wrapped around the title of Carousel component to be displayed.
* @param {integer} displayCount     - The number of items to display in one slide.
* @param {integer} navigationStyle  - The type of navigation carousel to display.
* @return React component
*/
 
const Carousel = (props) => {

	const {
    heading,
    headingTag,
    displayCount,
    navigationStyle
  } = props

  // Too many vars with + or -, need to simplify
  // Need to skip if displaycount>1 e.g. display count = 2 then skip to 3

  const HeadingTag = `${headingTag}`
  //if only one content item then props.children is no longer an array so use React.Children.Count instead
  const childrenCount = React.Children.count(props.children)
  const carouselNavigationOffset = heading ? 80 : 0

  const carouselRef = useRef()
  const carouselNavigtaionRef = useRef()
  const carouselContainer = useRef()
  const carouselItemRefs = useRef([])
  const carouselItemContentRefs = useRef([])
  
  const [carouselDisplayCount, setCarouselDisplayCount] = useState(displayCount)
  const [carouselItemContentHeight, setCarouselItemContentHeight] = useState()
  const [carouselSlideCount, setCarouselSlideCount] = useState(Math.round((childrenCount/carouselDisplayCount)))
  const [carouselDisplayWidth, setCarouselDisplayWidth] = useState(((1/carouselDisplayCount)*100)-1)
  const [active, setActive] = useState(0)

  const initCarousel = async (active) => {
    setActive(active)
    setCarouselItemContentHeight(carouselItemContentRefs.current[active].clientHeight)
  }

  const toggleCarousel = async (e,active) => {
    e.preventDefault()
    await initCarousel(active)
    carouselItemRefs.current[active].scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  }

  const checkContainerSize = () => {
    if(carouselContainer.current.clientWidth < 791) {
      setCarouselDisplayCount(1)
      setCarouselSlideCount(Math.round((childrenCount/1)))
    } else {
      setCarouselDisplayCount(displayCount)
      setCarouselSlideCount(Math.round((childrenCount/displayCount)))
    }     
  }

  // how to handle 2 on a page? navigation is 0,1,2 but still expecting 0-5?
  // indicator icons incorrect but arrows working
  // Height resize not working on scroll
  // animate height change and arrow position for middle
  // props / design tokens
  // massive cleanup
  
  useEffect(() => {

    (async () => {
      const currentActive = await initCarousel(active)
      console.log('===========')
      console.log('slides', childrenCount)
      console.log('display count', carouselDisplayCount)
      console.log('carousel slide count', carouselSlideCount)
      console.log('carousel display width', carouselDisplayWidth)
      console.log('carousel item height', carouselItemContentRefs.current[active].clientHeight)
      console.log('test calc', Math.floor(active*(carouselSlideCount/childrenCount)))
      console.log('item width', carouselContainer.current.clientWidth)
      console.log('active', active)
      console.log('===========')
      checkContainerSize()
      
       
      carouselNavigtaionRef.current.style.setProperty(
        "--carousel-navigation-middle-position",
        `${(carouselItemContentRefs.current[active].clientHeight/2) + carouselNavigationOffset}px`
      )
      carouselRef.current.style.setProperty(
        "--carousel-slide-display-width",
        `${carouselDisplayWidth}%`
      )
      carouselRef.current.style.setProperty(
        "--carousel-item-height",
        `${carouselItemContentHeight}px`
      )
      carouselNavigtaionRef.current.style.setProperty(
        "--carousel-slide-column-count",
        `${(carouselSlideCount+2)}`
      )
    })()

    const resizeCarousel = () => {
      checkContainerSize()
      carouselItemRefs.current[active].scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})        
    }
    window.addEventListener("resize", resizeCarousel)
    return () => window.removeEventListener("resize", resizeCarousel)
  }, [active])

	return (
		<div className={styles.carousel} role="region" aria-roledescription="carousel" aria-labelledby="carousel-heading" ref={carouselContainer}>
			{heading && (
        <HeadingTag id="carousel-heading">{heading}</HeadingTag>
      )}
      <ul ref={carouselRef}>
        {React.Children && React.Children.map(props.children, (child, index) => {
          return (
            <li 
              role="group" 
              aria-roledescription="slide"
              aria-label={`slide ${index+1} of ${carouselSlideCount+1}`}
              aria-current={active === index ? true : false}
              key={index}
              ref={(element) => {
                carouselItemRefs.current[index] = element
              }}
            >
              {React.cloneElement(child, { 
                key: index,
                index: index,
                open: !!active[index],
                ref: element => carouselItemContentRefs.current[index] = element
              })}
            </li>    
          ) 
        })}
      </ul>
      <ul 
        className={`
          ${styles['carousel-navigation']}
          ${navigationStyle ? styles[`carousel-navigation-${navigationStyle}`] : ''}
        `}
        aria-hidden="true" 
        ref={carouselNavigtaionRef}
      >
        <li className={`${active === 0 ? styles[`carousel-navigation-paging`] : styles[`carousel-navigation-paging-active`]}`}>
          <Button type="tertiary" icon="chevronleft" text="" onClick={(e) => toggleCarousel(e, (active-carouselDisplayCount))} isDisabled={Math.floor(active*(carouselSlideCount/childrenCount)) === 0 ? true : false} />
        </li>
        {Array.from(Array(carouselSlideCount), (e, index) => {
          return (
            <li 
              key={index} 
              className={`${Math.floor(active*(carouselSlideCount/childrenCount)) === index ? styles[`carousel-navigation-item-active`] : styles[`carousel-navigation-item`]}`}
            >
              <Button type="tertiary" text="" onClick={(e) => toggleCarousel(e, (index+carouselDisplayCount))} 
                isDisabled={(Math.floor(active*(carouselSlideCount/childrenCount))) === index ? true : false}
                icon={(Math.floor(active*(carouselSlideCount/childrenCount))) === index ? "carouselindicatoractive" : "carouselindicator"}
              />
            </li>
          )
        })}
        <li className={`${Math.floor(active*(carouselSlideCount/childrenCount)) === (carouselSlideCount-1) ? styles[`carousel-navigation-paging`] : styles[`carousel-navigation-paging-active`]}`}>
          <Button type="tertiary" icon="chevronright" text="" onClick={(e) => toggleCarousel(e, (active+carouselDisplayCount))} isDisabled={Math.floor(active*(carouselSlideCount/childrenCount)) === (carouselSlideCount-1) ? true : false} />
        </li>
      </ul>      
		</div>
	)
}

Carousel.propTypes = {
  heading:          PropTypes.string,  
  headingTag:       PropTypes.string,
  headingTag:       PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  displayCount:     PropTypes.number,
  navigationStyle:  PropTypes.string,
  navigationStyle:  PropTypes.oneOf(['bottom', 'middle']),
}

Carousel.defaultProps = {
  headingTag: 'h3',
  displayCount: 1,
  navigationStyle: 'bottom'
}

export default Carousel