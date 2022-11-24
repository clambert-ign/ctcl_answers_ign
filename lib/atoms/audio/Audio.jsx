import React, { useState, useRef, useEffect, useImperativeHandle, useLayoutEffect } from 'react'
import utilityHelper from '@services/utilities/utilityHelperPlus'
import PropTypes from 'prop-types'
import Button from '@atoms/button/Button'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import styles from './Audio.module.scss'
import Image from "@atoms/image/Image"

/**
 * Audio
 * @param {string}  title          - The title of the media to be displayed.
 * @param {string}  titleTag       - The heading tag wrapped around the media title.
 * @param {string}  duration       - The duration of the media.
 * @param {string}  description    - The description to be displayed.
 * @param {string}  image          - An image to be displayed.
 * @param {string}  src            - The location of the media source file.
 * @param {string}  srcType        - The type of media.
 * @param {string}  transcript     - The location of the media transcript file.
 * @returns React Component
 */

const Audio = React.forwardRef((props, ref) => {
  const {
    title,
    titleTag,
    duration,
    description,
    image,
    src,
    srcType,
    transcript
  } = props

  const mediaSrc = {
    type: 'audio',
    title: title,
    sources: [
      {
        src: src,
        type: srcType
      }
    ]
  }
  
  const plyrRef = useRef()
  const audioRef = useRef()
  useImperativeHandle(ref, () => plyrRef?.current)
  const { width } = utilityHelper.useComponentDimensions(audioRef)
  const isBreakPoint = utilityHelper.detectComponentBreakpoint('m', width)
  const [layout, setLayout] = useState(null)  
  const [audioPlaying, setAudioPlaying] = useState(false)
  const HeadingTag = `${titleTag}`

  useLayoutEffect(() => {
    isBreakPoint ? setLayout("compact") : setLayout("list")
  }, [width])

  useEffect(() => {    
    if(audioPlaying){
      plyrRef?.current?.plyr?.play()
    } else {
      //plyrref.current.plyr.pause()
    } 
  }, [audioPlaying])
  
  const toggleAudio = (e) => {
    e.preventDefault()    
    setAudioPlaying(!audioPlaying)
  }

  return (
    <div className={styles.audio} ref={audioRef}>
      <div className={`${styles['audio-container']} ${layout ? styles[`audio-container-${layout}`] : ''}`}>
        {image && (
          <div className={styles['audio-image']}>        
            <Image src="/images/_blue-orange.png" altText="" />
            <span className={styles.playIcon}>
              <Button type="tertiary" text="" link="#" icon="audioPlay" iconAlign="left" onClick={toggleAudio} />
            </span>
          </div>
        )}
        <div className={styles.plyrContainer}>
          <Plyr
            id="player"
            ref={plyrRef}
            source={mediaSrc}
            options={{
              controls: ['play', 'current-time', 'duration', 'progress', 'mute', 'volume']
            }}
          />
          {duration && <div className={styles['audio-label']}>Audio | {duration}</div>}
          {title && <HeadingTag className={styles['headline']}>{title}</HeadingTag>}
          {description && <div className={styles['audio-description']}>{description}</div>}
        </div>
      </div>
      {transcript && (
        <div className={styles['audio-transcript']}>
          <Button type="tertiary" text="Download Transcript" link={transcript} icon="download" iconAlign="right" download />
        </div>
      )}
    </div>
  )
})

Audio.propTypes = {
  title:       PropTypes.string,
  titleTag:    PropTypes.string,
  titleTag:    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  duration:    PropTypes.string,
  description: PropTypes.string,
  image:       PropTypes.string,
  src:         PropTypes.string.isRequired,
  srcType:     PropTypes.string.isRequired,
  srcType:     PropTypes.oneOf(['audio/mp3']),
  transcript:  PropTypes.string.isRequired
}

Audio.defaultProps = {
  titleTag: 'h3',
  srcType:  'audio/mp3'
}

export default Audio
