import React, { useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Plyr from 'plyr-react'
import styles from './Video.module.scss'
import 'plyr-react/dist/plyr.css'
import Button from '@atoms/button/Button'

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

const Video = React.forwardRef((props, ref) => {
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
  
  const videoRef  = useRef(null)  
  useImperativeHandle(ref, () => videoRef.current)

  const mediaSrc = {
    type: 'video',
    title: title ? title : '',
    sources: [
      {
        src: src,
        type: srcType
      }
    ],
    poster: image,
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
  
  const controls = {
    controls: [
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
    ],
  }
  
  const HeadingTag = `${titleTag}`

  return (
    <div className={`${styles.video}`} ref={videoRef}>
      {title && <HeadingTag>{title}</HeadingTag>}
      <div className={`${styles.plyrContainer}`}>
        <Plyr
          source={mediaSrc}
          autoPlay={autoPlay ? autoPlay : false}
          options={
            {
              controls: showControls ? controls : '',
              invertTime: false,
              clickToPlay: clickToPlay,
              autoPause: true,
              loop: {active:isLooped},
              muted: isMuted
            }
          }
        />
      </div>
      {caption && <p className={styles[`video-caption`]}>{caption}</p>}
      {transcript && (
        <div className={styles[`video-transcript`]}>
          <Button type='tertiary' text='Download Transcript' link={transcript} icon="download" iconAlign="right" isDownload={true} download="transcript.txt" />
        </div>
      )}
    </div>
  )
})

Video.propTypes = {
  title:        PropTypes.string,
  titleTag:     PropTypes.string.isRequired,
  titleTag:     PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
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
