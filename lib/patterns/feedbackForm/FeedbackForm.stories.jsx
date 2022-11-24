import FeedbackFormComponent from "./FeedbackForm"
import styles from './FeedbackForm.module.scss'
import Radio from "@atoms/formElements/radio/Radio"
import Slider from "@atoms/formElements/slider/Slider"
import Button from '@atoms/button/Button'

export default {
  title: "Patterns/Feedback Form",
  component: FeedbackFormComponent,
  parameters: {
    docs: {
      description: {
        component: "Feedback Form"
      }
    }
  },
  argTypes: {}
}

const Template = (args) => {
  const mappingData = [
    {
      value: 0,
      label: "Not Very Useful",
      show: false
    },
    {
      value: 1,
      label: "Useful",
      show: true
    },
    {
      value: 2,
      label: "Very Useful",
      show: false
    }
  ]
  const validate = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    const formData = new FormData(document.getElementById('feedbackformid'))
    for (const [key, value] of formData) {      
      console.log(key, ':', value)
      if(key === 'rating') {
        let selectedMapValue = mappingData?.filter((mappingDataItem) => mappingDataItem.value === parseInt(value))
        console.log(key, ':', selectedMapValue[0].label)
      }      
    }
  }  
  const toggleElement = (e) => {
    console.log('Element toggled')
  }
  return (
    <form id="feedbackformid">
      <div className={styles['form-wrapper']}>
        <div className={styles['form-wrapper-row']}>
          <h3>Feedback Form</h3>
          <p>I'm looking to get information for:</p>
          <div className={styles['form-element-wrapper']}>
            <Radio 
              name="infoFor"
              value="myself"
              text="Myself"
              description=""
              errorText=""
              isError={false}
              isRequired={false}
              isDisabled={false}
              isChecked={true}
              onChange={(e) => toggleElement(e)}
            />
            <Radio 
              name="infoFor"
              value="someoneElse"
              text="Someone Else"
              description=""
              errorText=""
              isError={false}
              isRequired={false}
              isDisabled={false}
              isChecked={false}
              onChange={(e) => toggleElement(e)}
            />
          </div>
        </div>
        <div className={styles['form-wrapper-row']}>
          <Slider
            name="rating"
            label="I found the information on this page to be"
            text=""
            min={0}
            minLabel="Not Very Useful"
            max={2}
            maxLabel="Very Useful"
            step={1}
            defaultValue={1}
            measurement=""
            mappingValues={mappingData}
            isError={false}
            isRequired={false}
            isDisabled={false}
          />
        </div>
        <div className={styles['form-wrapper-row']}>
          <div className={styles['form-submit']}>
            <Button type="primary" text="Submit Feedback" link="#" onClick={validate} />
          </div>  
        </div>    
      </div>
    </form>
  )
}

export const FeedbackForm = Template.bind()
