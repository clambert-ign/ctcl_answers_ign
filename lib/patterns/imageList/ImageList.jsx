import styles from './ImageList.module.scss'

/**
* Image List
* @return React component
*/

const ImageList = (props) => {

  return props.children ? (
    <div className={styles['imageList']}>
      {props.children}
    </div>
  ) : null
}

export default ImageList
