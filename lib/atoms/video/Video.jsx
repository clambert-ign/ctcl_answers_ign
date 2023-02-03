import React, { useState, useRef, useEffect } from 'react'
import utilityHelper from '@services/utilities/utilityHelperPlus'
import PropTypes from 'prop-types'
import Button from '@atoms/button/Button'
import { usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import styles from './Video.module.scss'
import Image from "@atoms/image/Image"

// import React, { useRef, useImperativeHandle } from 'react'
// import PropTypes from 'prop-types'
// import Plyr from 'plyr-react'
// import styles from './Video.module.scss'
// import 'plyr-react/plyr.css'
// import Button from '@atoms/button/Button'

/**
 * Video Atom
 * @param {string}  title         - The title of the media to be displayed.
 * @param {string}  titleTag      - The heading tag wrapped around the media title.
 * @param {string}  caption       - The caption text to be displayed below the video.
 * @param {string}  image         - An image to be displayed.
 * @param {string}  src           - The location of the media source file.
 * @param {string}  srcType       - The type of media.
 * @param {string}  transcript    - The location of the media transcript file.
 * @param {string}  subtitle      - The location of the closed caption file.
 * @param {boolean} autoPlay      - Should the video autoplay?
 * @param {boolean} showControls  - Should the video controls display?
 * @param {boolean} isLooped      - Should the video loop?
 * @param {boolean} clickToPlay   - Should the video play on click?
 * @param {boolean} isMuted       - Should the video be muted?
 * @returns React Component
 */

 const CustomPlyrInstance = React.forwardRef((props, ref) => {

  const { 
    source, 
    options = null,
    title,
    titleTag,
    caption,
    transcript
  } = props

  const raptorRef = usePlyr(ref, { options, source })
  const [firstTimePlay, setFirstTimePlay] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [videoDuration, setVideoDuration] = useState()
  const HeadingTag = `${titleTag}`

  useEffect(() => {
    if (ref?.current?.plyr?.source === null) return
    ref?.current?.plyr?.on("ready", () => {
      console.log('Video is ready')
    })
    ref?.current?.plyr?.on("canplay", () => {
      setVideoDuration(ref?.current?.plyr?.duration)
    })
    ref?.current?.plyr?.on("playing", () => {
      console.log('Video is playing')
      console.log(firstTimePlay)
      if(firstTimePlay) {
        dataLayer.push({event: 'video start', event_name: 'video start', event_label: title, duration_seconds: videoDuration});
        console.log('Video is playing for the first time')
        setFirstTimePlay(false)
      }
    })
    ref?.current?.plyr?.on("pause", () => {
      setCurrentTime(ref?.current?.plyr?.currentTime)
      dataLayer.push({event: 'video pause', event_name: 'video pause', event_label: title, duration_seconds: videoDuration});
      console.log('Video is paused')
    })
    ref?.current?.plyr?.on("ended", () => {
      dataLayer.push({event: 'video complete', event_name: 'video complete', event_label: title, duration_seconds: videoDuration});
      console.log('Video has ended')
    })
  })

  return (
    <>
      {title && <HeadingTag className={styles['headline']}>{title}</HeadingTag>}
      <div className={`${styles.plyrContainer}`}>
        <video ref={raptorRef} className="plyr-react plyr" />
      </div>
      {caption && <p className={styles['video-caption']}>{caption}</p>}
      {transcript && (
        <div className={styles['video-transcript']}>
          <Button type='tertiary' text='Download Transcript' link={transcript} icon="download" iconAlign="right" download="transcript.txt" />
        </div>
      )}
    </>
  )
})

const Video = (props) => {
  const {
    title,
    titleTag,
    caption,
    image,
    src,
    srcType,
    transcript,
    subtitle,
    autoPlay,
    showControls,
    isLooped,
    clickToPlay,
    isMuted
  } = props
  
  const mediaSrc = {
    type: 'video',
    title: title,
    sources: [
      {
        src: src,
        type: srcType
      }
    ],
    poster: image ? image : null,
    tracks: [
      {
        kind: 'captions',
        label: 'English',
        srclang: 'en',
        src: subtitle,
        default: true
      }
    ]
  }
  
  const mediaOptions = {
    controls: showControls ?  [
      'play-large', // The large play button in the center
      'play', // Play/pause playback
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      'captions', // Toggle captions
      'settings', // Settings menu
      'fullscreen', // Toggle fullscreen
    ]: '',
    autoPause: true,
    autoPlay: autoPlay ? autoPlay : false,
    clickToPlay: clickToPlay,
    invertTime: false,
    loop: {active:isLooped},
    muted: isMuted,
    tooltips: { controls: false, seek: true }
  }
  
  const plyrRef = useRef(null)

  return src ? (
    <div className={`${styles.video}`}>
      {mediaSrc && (
        <CustomPlyrInstance
          ref={plyrRef}
          source={mediaSrc}
          options={mediaOptions}
          title={title}
          titleTag={titleTag}
          caption={caption}
          transcript={transcript}
        />
      )}
    </div>
  ) : null
}

Video.propTypes = {
  title:        PropTypes.string,
  titleTag:     PropTypes.string.isRequired,
  titleTag:     PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  caption:      PropTypes.string,
  image:        PropTypes.string,
  src:          PropTypes.string.isRequired,
  srcType:      PropTypes.string.isRequired,
  subtitle:     PropTypes.string,
  transcript:   PropTypes.string,
  autoPlay:     PropTypes.bool,
  showControls: PropTypes.bool,
  isLooped:     PropTypes.bool,
  clickToPlay:  PropTypes.bool,
  isMuted:      PropTypes.bool
}

Video.defaultProps = {
  titleTag:     'h3',
  srcType:      'video/mp4',
  autoPlay:     false,
  showControls: true,
  isLooped:     false,
  clickToPlay:  true,
  isMuted:      false
}

export default Video
