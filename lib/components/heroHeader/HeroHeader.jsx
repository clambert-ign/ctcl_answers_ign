import React, { useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './HeroHeader.module.scss'
import Button from '@atoms/button/Button'

/**
* HeroHeader Component
* @param {string}   align       - The alignment of the Hero Header Component to be displayed.
* @param {string}   backLink    - The back link of the Hero Header Component to be displayed.
* @param {string}   title       - The title of the Hero Header Component to be displayed.
* @param {string}   heading     - The heading of the Hero Header Component to be displayed.
* @param {string}   headingTag  - The heading tag to wrap around the heading of the Hero Header Component.
* @param {object}   description - The description of the Hero Header Component to be displayed
* @param {object}   bgImage     - The background image of the Hero Header Component to be displayed..
* @param {object}   sideImage   - The side image of the Hero Header Component to be displayed.
* @param {object}   sideVideo   - The side video of the Hero Header Component to be displayed.
* @param {object}   bgVideo     - The background video of the Hero Header Component to be displayed.s
* @return React component
*/

const HeroHeader = React.forwardRef((props, ref) => {
  const {
    align,
    backLink,
    title,
    heading,
    headingTag,
    description,
    bgImage,
    sideImage,
    sideVideo,
    bgVideo
  } = props

  const heroRef = useRef(null)
  useImperativeHandle(ref, () => heroRef.current)
  const HeadingTag = `${headingTag}`

  useEffect(() => {
    if (bgImage) {
      heroRef.current.style.setProperty(
        "--hh-bgcolor",
        `transparent`
      )
    }

    // if(bgVideo){
    //   const video = document.querySelector("video")
    //   if(video){
    //     const source = document.querySelector("source")
    //     const track = document.querySelector("track")
    //     if(track && source){
    //       const src = source.getAttribute("src")
    //       const type = source.getAttribute("type")
    //       track.remove()
    //       source.remove()
    //       video.setAttribute("src", src)
    //       video.setAttribute("type", type)
    //     }
    //   }
    // }

  })

  return (
    <div 
      className={`
        ${styles['heroHeader']} 
        ${align ? styles[`heroHeader-${align}`]  : ''} 
        ${sideImage || sideVideo ? styles['showSide'] : ''}`} 
        ref={heroRef}
    >      
      {(bgVideo || bgImage) &&
        (
          <div className={`${styles['heroHeader-background']} ${bgVideo ? styles['heroHeader-background-video'] : ''}`}>
            {bgVideo ? bgVideo : bgImage}
          </div>
        )
      }
      {(sideVideo || sideImage) &&
        (
          <div className={styles["heroHeader-content-sidemedia"]}>
            {sideVideo ? sideVideo : sideImage}
          </div>
        )
      }
      <div className={styles["heroHeader-content"]}>
        <div>
          {backLink && (
            <nav aria-label="Breadcrumb" id="breadcrumb">
              <Button type="tertiary" text={backLink} link="#" icon='chevronleft' />
            </nav>
          )}
          {title && (
            <div className={styles["heroHeader-content-title"]}>{title}</div>
          )}
          {heading && (
            <HeadingTag className={styles["heroHeader-headline"]}>{heading}</HeadingTag>
          )}
          {description && (
            <p className={styles["heroHeader-content-description"]}>{description}</p>
          )}
          {props.children && (
            <div className={styles["heroHeader-content-btn"]}>
              {props.children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

HeroHeader.propTypes = {
  align:        PropTypes.string,
  align:        PropTypes.oneOf(['left', 'center']),
  backLink:     PropTypes.string,
  title:        PropTypes.string,
  heading:      PropTypes.string,
  headingTag:   PropTypes.string.isRequired,
  headingTag:   PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  description:  PropTypes.object,
  bgImage:      PropTypes.object,
  sideImage:    PropTypes.object,
  sideVideo:    PropTypes.object,
  bgVideo:      PropTypes.object
}

HeroHeader.defaultProps = {
  align: 'center',
  headingTag: 'h2',
  bgImage: null,
  sideImage: null,
  sideVideo: null,
  bgVideo: null
}

export default HeroHeader