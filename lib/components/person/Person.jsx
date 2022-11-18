import PropTypes from 'prop-types'
import styles from "./Person.module.scss"

/**
 * Person
 * @param {string}  image - The person image to be displayed.
 * @param {string}  name  - The person name to be displayed.
 * @param {string}  role  - The person role to be displayed.
 * @return React component
 */

const Person = (props) => {
  const { 
    image,
    name,
    role 
  } = props

  return (
    <div className={styles.person} >
      {image && (
        <div className={styles['person-image']}>
          {image}
        </div>
      )}
      {name && (
        <>
          <div className={styles['person-name']}>
            {name}
          </div>
          {role && (<div className={styles['person-role']}>{role}</div>)}
        </>
      )}
    </div>
  )
}

Person.propTypes = {
  image:  PropTypes.object,
  name:   PropTypes.string,
  role:   PropTypes.string
}

Person.defaultProps = {
  image: null
}

export default Person
