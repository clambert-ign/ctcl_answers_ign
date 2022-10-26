import styles from './Carousel.module.scss'

const CarouselContent = (props) => {
  return (
    <div {...props} className={`${styles.carouselContent}`}>
      {props.children && (
        props.children
      )}
    </div>
  )
}

export default CarouselContent
