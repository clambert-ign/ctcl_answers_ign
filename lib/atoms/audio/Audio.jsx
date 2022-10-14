import React, { useState, useRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Image from '@atoms/image/Image'
import Button from '@atoms/button/Button'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import styles from './Audio.module.scss'

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
 * @param {string}  layout         - The type of media layout (list, compact).
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
  
  const [audioPlaying, setAudioPlaying] = useState(false)
  const plyrref = useRef()
  const audioRef = useRef()
  useImperativeHandle(ref, () => plyrref.current)

  const [containerWidth, setContainerWidth] = useState()
  const [layout, setLayout] = useState(null)

  const updateWidth = () => {
    setContainerWidth(audioRef.current.offsetWidth)      
  }

  useEffect(() => {
    updateWidth()
    if (containerWidth < 550 && containerWidth > 0) {
      setLayout("compact")
    } else {
      setLayout("list")
    }
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

  useEffect(() => {    
    if(audioPlaying){
      plyrref.current.plyr.play()
    } else {
      //plyrref.current.plyr.pause()
    } 
  }, [audioPlaying])
  
  const toggleAudio = (e) => {
    e.preventDefault()    
    setAudioPlaying(!audioPlaying)
  }
  
  const HeadingTag = `${titleTag}`

  return (
    <div className={styles.audio} ref={audioRef}>
      <div className={`${styles[`audio-container`]} ${layout ? styles[`audio-container--${layout}`] : ''}`}>
        <div className={styles[`audio-image`]}>
          <span className={styles.imageCover}>
            <Button type='tertiary' text='' link="#" icon="audioplay" iconAlign="left" onClick={toggleAudio} />
          </span>
          <Image src={image} />
        </div>
        <div className={styles.plyrContainer}>
          <Plyr
            id="audioplayer"
            ref={plyrref}
            source={mediaSrc}
            options={{
              controls: [
                'play', // Play/pause playback
                'current-time', // The current time of playback
                'duration', // The full duration of the media
                'progress', // The progress bar and scrubber for playback and buffering
                'mute', // Toggle mute
                'volume', // Volume control
              ]
            }}
          />
          <div className={styles[`audio-label`]}>Audio | {duration}</div>
          {title && <HeadingTag>{title}</HeadingTag>}
          {description && <div className={styles[`audio-description`]}>{description}</div>}
        </div>
      </div>
      <div className={styles[`audio-transcript`]}>
        <Button type='tertiary' text='Download Transcript' link={transcript} icon="download" iconAlign="right" download isDownload={true} />
      </div>
    </div>
  )
})

Audio.propTypes = {
  title:       PropTypes.string.isRequired,
  titleTag:    PropTypes.string.isRequired,
  titleTag:    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  duration:    PropTypes.string.isRequired,
  description: PropTypes.string,
  image:       PropTypes.string.isRequired,
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
