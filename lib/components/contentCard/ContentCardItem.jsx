import React from "react";
import Image from "@atoms/image/Image";
import styles from "./ContentCard.module.scss";

/**
 * ContentCardItem Component
 * @param {string} title      - The title of the Content Card component item to be displayed.
 * @param {string} subtitle   - The subtitle of the Content Card component item to be displayed.
 * @param {string} label      - The label of the Content Card component item to be displayed.
 * @param {string} text       - The description of the Content Card component item to be displayed.
 * @param {string} image      - The image of the Content Card component item to be displayed.
 * @param {string} imageAlign - The alignment of the image to be displayed in the Content Card item.
 * @returns React Component
 */

const ContentCardItem = (props) => {
  const {
    label,
    title,
    titleTag,
    subtitle,
    subtitleTag,
    text,
    image,
    imageAlign
  } = props;
  
  const HeadingTag = `${titleTag}`
  const SubHeadingTag = `${subtitleTag}`

  return (
    <div 
      className={`
        ${styles.contentCardItem} 
        ${styles['contentCardItem--' + imageAlign]}
      `}
    >
      {image && (
        <div className={styles[`contentCardItem-image`]}>
          <Image src={image} altText="" />
        </div>
      )}
      <div className={styles[`contentCardItem-content`]}>
        {label && 
          <span className={styles[`contentCardItem-content-label`]}>
            {label}
          </span>
        }
        {title && (
          <HeadingTag>{title}</HeadingTag>
        )}
        {subtitle && (          
          <SubHeadingTag className={styles.subheadline}>{subtitle}</SubHeadingTag>
        )}
        {text && (
          <p>
            {text}
          </p>
        )}
        {props.children && (
          <div className={styles["contentCardItem-content-btn"]}>
            {React.Children.map(props.children, function (child) {
              if (child.type.name === 'Button' && child.props.type === 'tertiary') {
                return (<span className={styles['contentCardItem-content-btn-tertiary']}>{child}</span>)
              }
              if (child.type.name === 'Button' && child.props.type === 'primary') {
                return (<span className={styles['contentCardItem-content-btn-primary']}>{child}</span>)
              }
              if (child.type.name === 'Button' && child.props.type === 'secondary') {
                return (<span className={styles['contentCardItem-content-btn-secondary']}>{child}</span>)
              }
              return (child)
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCardItem;
