import React, { useState, useRef, useEffect } from 'react'
import useWindowDimensions from '@services/utilities/utilityHelper'
import PropTypes from 'prop-types'
import Button from "@atoms/button/Button"
import styles from "./Carousel.module.scss"
import Slider from "react-slick"

/**
* Carousel Component
* @param {string} heading           - The title of the Carousel component to be displayed.
* @param {string} headingTag        - The heading tag wrapped around the title of Carousel component to be displayed.
* @param {integer} displayCount     - The number of items to display in one slide.
* @param {integer} navigationStyle  - The type of navigation carousel to display.
* @param {object} settings          - The carousel settings.
* @return React component
*/
 
const Carousel = (props) => {

	const {
    heading,
    headingTag,
    navigationStyle,
    settings
  } = props
  
  const { width } = useWindowDimensions()
  const sliderRef = useRef()
  const carouselRef = useRef()  
  const sliderItemRefs = useRef([])
  const [slideHeight, setSlideHeight] = useState(0)
  const [isBreakPoint, setIsBreakPoint] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const slideCount = props.children ? props.children.length : null
  const HeadingTag = `${headingTag}`

  const goToNext = (e) => {
    e.preventDefault()  
    sliderRef.current.slickNext();
  }
  
  const goToPrev = (e) => {
    e.preventDefault()  
    sliderRef.current.slickPrev();
  }
  
  const carouselSettings = {
    adaptiveHeight: settings ? settings.adaptiveHeight ? settings.adaptiveHeight : false : false,
    arrows: false,
    dots: settings ? settings.dots ? settings.dots : false : false,    
    fade: settings ? settings.fade ? settings.fade : false : false,
    infinite: settings ? settings.infinite ? settings.infinite : false : false,
    lazyLoad: settings ? settings.lazyLoad ? settings.lazyLoad : false : false,
    speed: settings ? settings.speed ? settings.speed : 1000 : 1000,
    slidesToShow: settings ? settings.slidesToShow ? settings.slidesToShow : 1 : 1,
    slidesToScroll: settings ? settings.slidesToScroll ? settings.slidesToScroll : 1 : 1,
    autoplay: settings ? settings.autoplay ? settings.autoplay : false : false,
    autoplaySpeed: settings ? settings.autoplaySpeed ? settings.autoplaySpeed : 5000 : 5000,
    cssEase: settings ? settings.cssEase ? settings.cssEase : "linear" : "linear",
    pauseOnHover: settings ? settings.pauseOnHover ? settings.pauseOnHover : false : false,
    swipeToSlide: settings ? settings.swipeToSlide ? settings.swipeToSlide : false : false,
    rtl: settings ? settings.rtl ? settings.rtl : false : false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideIndex(newIndex)
      let constSlideHeight = 0
      {!isBreakPoint && [...Array(settings.slidesToScroll)].map((value, index) => (
        sliderItemRefs.current[(newIndex+index)].offsetHeight > constSlideHeight
          ? constSlideHeight =  sliderItemRefs.current[(newIndex+index)].offsetHeight
          : null
      ))}
      setSlideHeight(constSlideHeight)
    },
    appendDots: dots => (
        <ul>
          <li className={"prev-"+navigationStyle}><Button type="tertiary" icon="chevronleft" link="#" onClick={goToPrev} isDisabled={(currentSlideIndex === 0 && settings.infinite === false) ? true : false} /></li>
          {dots}
          <li className={"next-"+navigationStyle}><Button type="tertiary" icon="chevronright" link="#" iconAlign="right" onClick={goToNext} isDisabled={((currentSlideIndex+settings.slidesToShow) === slideCount && settings.infinite === false) ? true : false} /></li>
        </ul>
    ),
    responsive: [
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    if(width <= carouselSettings.responsive[0].breakpoint) {
      setIsBreakPoint(true)
    } else {
      setIsBreakPoint(false)
    }

    carouselRef.current.style.setProperty (
      "--carousel-slide-height",
      slideHeight+'px'
    )

  }, [slideHeight, width])

	return (
		<div 
      className={`
        ${styles.carousel}
        ${(slideHeight > 0 && !isBreakPoint) ? styles[`carousel-height`] : ''}
      `}
      ref={carouselRef}
    >
      <HeadingTag className={styles['headline']}>{heading}</HeadingTag>
      <Slider ref={sliderRef} {...carouselSettings}>
        {props.children.map((child, index) => {
          return (
            <div
              key={index}
              ref={(element) => {
                sliderItemRefs.current[index] = element;
              }}
            >                
              {React.cloneElement(child, { 
                key: index
              })}
            </div>
          )
        })}
      </Slider>    
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
  settings:         PropTypes.object.isRequired
}

Carousel.defaultProps = {
  headingTag: 'h3',
  displayCount: 1,
  navigationStyle: 'bottom'
}

export default Carousel