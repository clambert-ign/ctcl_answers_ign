import React, { useState, useRef, useEffect } from 'react'
import utilityHelper from '@services/utilities/utilityHelperPlus'
import PropTypes from 'prop-types'
import Button from '@atoms/button/Button'
import { usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
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
const CustomPlyrInstance = React.forwardRef((props, ref) => {
  const { 
    source, 
    options = null,
    image,
    duration,
    title,
    titleTag,
    description,
    layout
  } = props
  const raptorRef = usePlyr(ref, { options, source })
  const HeadingTag = `${titleTag}`
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [audioReady, setAudioReady] = useState(false)
  const [audioEnded, setAudioEnded] = useState(false)
  const [audioDuration, setAudioDuration] = useState()
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  useEffect(() => {
    if (ref?.current?.plyr?.source === null) return
    ref?.current?.plyr?.on("ready", () => {
      console.log('Audio is ready')
      setAudioReady(true)
    })
    ref?.current?.plyr?.on("canplay", () => {
      setAudioDuration(ref?.current?.plyr?.duration)
    })
  }, [ref?.current])
  useEffect(() => {
    if(audioReady) {
      ref?.current?.plyr?.on("playing", () => {
        setPlaying(true)
      })
      ref?.current?.plyr?.on("pause", () => {
        setCurrentTime(ref?.current?.plyr?.currentTime)
      })
      ref?.current?.plyr?.on("ended", () => {
        setAudioEnded(true)
      })
    }    
  }, [audioReady])
  useEffect(() => {
    if(audioDuration) {
      console.log('duration:', audioDuration)   
    } 
  }, [audioDuration])
  useEffect(() => {
    if(currentTime) {
      dataLayer.push({event: 'podcast pause', event_name: 'podcast pause', event_label: title, duration_seconds: currentTime});
      console.log('Audio is paused')
      console.log('current:', currentTime)   
    } 
  }, [currentTime])
  useEffect(() => {
    if(playing) {
      console.log('Audio is playing')
      dataLayer.push({event: 'podcast start', event_name: 'podcast start', event_label: title, duration_seconds: audioDuration});
      setPlaying(false)  
    }
  }, [playing])
  useEffect(() => {
    if(audioEnded) {
      dataLayer.push({event: 'podcast complete', event_name: 'podcast complete', event_label: title, duration_seconds: audioDuration});
      console.log('Audio has ended')
    } 
  }, [audioEnded])
  const togglePlay = (e) => {
    e.preventDefault()
    ref?.current?.plyr?.togglePlay()
  }
  return (
    <div className={`${styles['audio-container']} ${layout ? styles[`audio-container-${layout}`] : ''}`}>      {image && (
        <div className={styles['audio-image']}>          <Image src={image} altText="" />          <span className={`${styles['playIcon']}`}>            <Button type="tertiary" text="" link="#" icon={audioPlaying ? 'audioPause' : 'audioPlay'} iconAlign="left" onClick={togglePlay} />          </span>        </div>      )}
      <div className={styles.plyrContainer}>        <audio ref={raptorRef} className="plyr-react plyr" />        {duration && <div className={styles['audio-label']}>Audio | {duration}</div>}
        {title && <HeadingTag className={styles['headline']}>{title}</HeadingTag>}
        {description && <div className={styles['audio-description']}>{description}</div>}
      </div>    </div>  )
})
const Audio = (props) => {
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
  const plyrRef = useRef(null)
  const audioRef = useRef()
  const { winWidth } = utilityHelper.useScreenDimensions()
  const [layout, setLayout] = useState('compact')
  const mediaSrc = {
    type: 'audio',
    title: title,
    sources: [{
      type: srcType,
      src: src
    }]
  }
  const mediaOptions = {
    controls: ['play', 'current-time', 'duration', 'progress', 'mute', 'volume'],
    tooltips: { controls: false, seek: true }
  }
  useEffect(() => {    
    const { width } = audioRef?.current?.getBoundingClientRect()
    const isBreakPoint = utilityHelper.detectComponentBreakpoint('m', width)
    isBreakPoint ? setLayout("compact") : setLayout("list")
  }, [audioRef, winWidth])
  return (
    <div className={styles.audio} ref={audioRef}>      {mediaSrc && (
        <CustomPlyrInstance
          ref={plyrRef}
          source={mediaSrc}
          options={mediaOptions}
          image={image}
          duration={duration}
          title={title}
          titleTag={titleTag}
          description={description}
          layout={layout}
        />      )}
      {transcript && (
        <div className={styles['audio-transcript']}>          <Button type="tertiary" text="Download Transcript" link={transcript} icon="download" iconAlign="right" download />        </div>      )}
    </div>  )
}
Audio.propTypes = {
  title:       PropTypes.string,
  titleTag:    PropTypes.string,
  titleTag:    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  duration:    PropTypes.string,
  description: PropTypes.string,
  image:       PropTypes.string,
  src:         PropTypes.string.isRequired,
  srcType:     PropTypes.string.isRequired,
  srcType:     PropTypes.oneOf(['audio/wav','audio/mpeg','audio/mp3']),
  transcript:  PropTypes.string.isRequired
}
Audio.defaultProps = {
  titleTag: 'h3',
  srcType:  'audio/mpeg'
}
export default Audio;