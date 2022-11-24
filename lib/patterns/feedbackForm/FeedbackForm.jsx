/**
 * Editorial Component
 * @param {string} id  - The nid value of the Feedback Form.
 * @returns React Component
 */

const FeedbackForm = (props) => {  
  const { 
    id
  } = props

  return (
    <form id={id}>
      {props.children}
    </form>
  )
}
export default FeedbackForm