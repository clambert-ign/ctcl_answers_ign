import { useState } from "react"
import FeedbackForm from './FeedbackForm'
import styles from './FeedbackForm.module.scss'
import { getValue, getValues } from '@services/utilities/utilityHelper'
import Radio from "@atoms/formElements/radio/Radio"
import Slider from "@atoms/formElements/slider/Slider"
import Button from '@atoms/button/Button'

const FeedbackFormAcousticData = (props) => {
  const { 
    content,
    id,
    submitBtnText,
    successMessage
  } = props.data

  const [mapping, setMapping] = useState([])
  const [showForm, setShowForm] = useState(true)
  const createMapping = (mappingData) => {
    {mappingData?.map((item, index) => {
      let objMapping = {}
      objMapping.value = parseInt(getValue(item?.elements?.value))
      objMapping.label = getValue(item?.elements?.label)
      objMapping.show = getValue(item?.elements?.show) ? getValue(item?.elements?.show) : false
      mapping.push(objMapping);
    })}
    return mapping
  }
  const validate = (e) => {
    e.preventDefault()
    //dataLayer.push({event: 'submit feedback click', event_name: 'submit feedback click', event_label: 'feedback-form_link'});
    const formData = new FormData(document.getElementById('feedbackformid'))
    for (const [key, value] of formData) {
      if(key === 'rating') {
        let selectedMapValue = mapping?.filter((mappingDataItem) => mappingDataItem.value === parseInt(value))
        console.log(key, ':', selectedMapValue[0].label)
      }      
    }
    setShowForm(false)
  }  
  const toggleElement = (e) => {    
    if(e.target.value === "Myself") {
      //dataLayer.push({event: 'information for myself', event_name: 'information for myself', event_label: 'feedback-form_link'});
    } else {
      //dataLayer.push({event: 'information someone', event_name: 'information someone', event_label: 'feedback-form_link'});
    }
  }
  return showForm ? (  
    <FeedbackForm id={getValue(id)}>
      <div className={styles['form-wrapper']}>
        {content?.values?.map((contentItem, index) => {
          if(contentItem.type === "Kanso-Atom-Radio-Group") {
            return (
              <div className={styles['form-wrapper-row']} key={index}>
                <p>{getValue(contentItem?.elements?.label)}</p>
                <div className={styles['form-element-wrapper']}>
                  {contentItem?.elements?.radioButtons?.values?.map((radioItem, index) => {
                    return (
                      <Radio
                        key={index}
                        name={getValue(contentItem?.elements?.name)}
                        value={getValue(radioItem?.elements?.value)}
                        text={getValue(radioItem?.elements?.text)}
                        description={getValue(radioItem?.elements?.description)}
                        errorText={getValue(radioItem?.elements?.errorText)}
                        isRequired={getValue(radioItem?.elements?.isRequired)}
                        isDisabled={getValue(radioItem?.elements?.isDisabled)}
                        isChecked={getValue(radioItem?.elements?.isChecked)}
                        onChange={(e) => toggleElement(e)}
                      />
                    )
                  })}
                </div>
              </div>
            )
          }
          if(contentItem.type === "Kanso-Atom-Slider") {     
            return (
              <div className={styles['form-wrapper-row']} key={index}>
                <Slider
                  name={getValue(contentItem?.elements?.name)}
                  label={getValue(contentItem?.elements?.label)}
                  text={getValue(contentItem?.elements?.text)}
                  min={getValue(contentItem?.elements?.min)}
                  minLabel={getValue(contentItem?.elements?.minLabel)}
                  max={getValue(contentItem?.elements?.max)}
                  maxLabel={getValue(contentItem?.elements?.maxLabel)}
                  step={getValue(contentItem?.elements?.step)}
                  defaultValue={getValue(contentItem?.elements?.defaultValue)}
                  measurement={getValue(contentItem?.elements?.measurement)}
                  mappingValues={createMapping(getValues(contentItem?.elements?.sliderMapping))}
                  isError={getValue(contentItem?.elements?.isError)}
                  isRequired={getValue(contentItem?.elements?.isRequired)}
                  isDisabled={getValue(contentItem?.elements?.isDisabled)}
                />
              </div>
            )
          }
        })}
        <div className={styles['form-wrapper-row']}>
          <div className={styles['form-submit']}>
            <Button type="primary" text={getValue(submitBtnText)} link="#" onClick={validate} />
          </div>  
        </div>    
      </div>
    </FeedbackForm>
  ) : (
    <FeedbackForm id={getValue(id)}>
      <div className={styles['form-wrapper']}>
        <p className={styles['form-success']}>
          {getValue(successMessage)}
        </p>
      </div>
    </FeedbackForm>
  )
}

export default FeedbackFormAcousticData
