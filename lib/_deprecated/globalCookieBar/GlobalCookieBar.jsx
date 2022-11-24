import React from "react";
import PropTypes from 'prop-types'
import styles from "./GlobalCookieBar.module.scss"

/**
 * GlobalCookieBar Component
 * @param {string} title        - The title of the Cookie Bar to be displayed
 * @param {string} titleTag     - The heading tag wrapped around the Cookie Bar title.
 * @param {string} description  - The descritpion of the Cookie Bar to be displayed
 * @return React component
 */

const GlobalCookieBar = (props) => {
  const {
    title,
    titleTag,
    description
  } = props

  const HeadingTag = `${titleTag}`
    
  return (
    <>
    <div className={styles["cookie"]}>
      <div className={styles["cookie-content"]}>
        {title && <HeadingTag className={styles.headline}>{title}</HeadingTag>}
        {description && 
          <p>
            {description}
          </p>
        }
        {props.children && (
          <div className={styles["cookie-content-btn"]}>
            {React.Children.map(props.children, function (child) {
              if (child.type.name === 'Button' && child.props.type === 'tertiary') {
                return (<span className={styles['cookie-content-btn-tertiary']}>{child}</span>)
              }
              if (child.type.name === 'Button' && child.props.type === 'primary') {
                return (<span className={styles['cookie-content-btn-primary']}>{child}</span>)
              }
              if (child.type.name === 'Button' && child.props.type === 'secondary') {
                return (<span className={styles['cookie-content-btn-secondary']}>{child}</span>)
              }
              return (child)
            })}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

GlobalCookieBar.propTypes = {
  title:       PropTypes.string,
  titleTag:    PropTypes.string.isRequired,
  titleTag:    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  description: PropTypes.string
}

export default GlobalCookieBar
