import { useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import FormComponent from "./Form"
import styles from './Form.module.scss'
import Input from "@atoms/formElements/input/Input"
import DropdownList from "@atoms/formElements/dropdown/DropdownList"
import DateControl from "@atoms/formElements/datePickerDropdown/DatePickerDropdown"
import Textarea from "@atoms/formElements/textarea/Textarea"
import RadioButton from "@atoms/formElements/radio/Radio"
import Checkboxes from "@atoms/formElements/checkbox/Checkbox"
import Switch from "@atoms/formElements/switch/Switch"
import Slider from "@atoms/formElements/slider/Slider"
import Button from '@atoms/button/Button'

export default {
  title: "Patterns/Form",
  component: FormComponent,
  parameters: {
    docs: {
      description: {
        component: "Form"
      }
    }
  },
  argTypes: {}
}


// Dropdown list is a problem, probably going to have the same issue with datepicker, dateselect
// Get other fields working first as dropdown / date picker not required for CTCL.
// Once others working integrate into CTCL

const Template = (args) => {
  const { register, formState: { errors }, handleSubmit, watch, setValue } = useForm()
  const onSubmit = (data) => console.log('form submit', data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['form-wrapper']}>
        <Input 
          {...register("inputTest", { required: true })}
          label="Input Test"
          placeholder="Please input some text"
          text="This field is mandatory"
          isError={errors.inputTest ? true : false} 
          isRequired={true}
          isDisabled={false}
        />
        <Input 
          {...register("inputPasswordTest", { required: true })}
          type="password"
          label="Input Password Test"
          text="This field is mandatory"
          isError={errors.inputPasswordTest ? true : false} 
          isRequired={true}
          isDisabled={false}
        />
        <Slider
          {...register("sliderTest", { required: true })}
          label="I found the information on this page to be"
          min={0}
          max={2}
          defaultValue={1}
          measurement=""
          isError={false}
          isRequired={false}
          isDisabled={false}
        />
        {/* <DropdownList
          {...register("ddListTest", { required: true })}
          label="DDList Test"
          text="This field is mandatory"
          placeholder="Please select an option"
          options={options}
          //defaultValue={options[1]}
          showErrorIcon={errors.ddListTest ? true : false} 
          isError={errors.ddListTest ? true : false} 
          isRequired={true}
          isDisabled={false}
          onChangeHandler={(selectedOption) => {handleDropdown(selectedOption.value)}}
        /> */}


      </div>
      <div className={styles['form-submit']}>
        <Button type="primary" text="Submit Feedback" link="#" onClick={handleSubmit(onSubmit)} />
      </div>
    </form>
  )
}

export const Form = Template.bind()
