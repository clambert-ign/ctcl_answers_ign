 import { useRef, useEffect } from "react"

import Form from "./Form"
import Input from "@atoms/formElements/input/Input"
import DropdownList from "@atoms/formElements/dropdown/DropdownList"
import DateControl from "@atoms/formElements/datePickerDropdown/DatePickerDropdown"
import Textarea from "@atoms/formElements/textarea/Textarea"
import RadioButton from "@atoms/formElements/radio/Radio"
import Checkboxes from "@atoms/formElements/checkbox/Checkbox"
import Switch from "@atoms/formElements/switch/Switch"
import Slider from "@atoms/formElements/slider/Slider"

export default {
  title: "Patterns/Forms/Forms",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "Form"
      }
    }
  },
  argTypes: {}
}

const Template = (args) => {
  return (
    <>Test: Form goes here</>
  )
}

export const Default = Template.bind()
