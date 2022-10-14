import { useState, useEffect } from 'react'
import DatePickerDropdownComponent from "./DatePickerDropdown"
import DropDownList from "@atoms/formElements/dropdown/DropdownList"
import { init, daysInMonth, isDateValid } from "./DatePickerDropdownHelper"

export default {
  title: "Atoms/Form elements/Date Picker Dropdown",
  component: DatePickerDropdownComponent,
  parameters: {
    docs: {
      description: {
        component: "Date picker drop downs are used to select a specific historical date (E.g. date of birth)."
      }
    },
    cssprops: {
      "datedd-font-size": {
        value: "16px",
        description: "Date Picker Dropdown title font size",
        control: "text"
      },
      "datedd-font-weight": {
        value: "600",
        description: "Date Picker Dropdown List title font weight",
        control: "text"
      },
      "datedd-text-color": {
        value: "#4B4C53",
        description: "Date Picker Dropdown List title font colour"
      },
      "datedd-text-font-size": {
        value: "12px",
        description: "Date Picker Dropdown List assistive text font size",
        control: "text"
      },
      "datedd-text-font-weight": {
        value: "400",
        description: "Date Picker Dropdown List assistive text font weight",
        control: "text"
      },
      "datedd-disabled-color": {
        value: "#888995",
        description: "Date Picker Dropdown List disabled colour"
      },
      "datedd-error-color": {
        value: "#b00020",
        description: "Date Picker Dropdown List error colour"
      }
    }
  },
  args: {
    id: "input_id_1",
    label: "Label text",
    text: "This field is mandatory",
    isError: false,
    isRequired: false,
    isDisabled: false
  },
  argTypes: {
    id: {
      description: 'The id value of the dropdown list',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    label: {
      description: 'The label text of the dropdown list to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    text: {
      description: 'The assistive text of the dropdown list to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    }, 
    isError: {
      description: 'Is this dropdown list in error state? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },
    isRequired: {
      description: 'Is this dropdown list required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },    
    isDisabled: {
      description: 'Is this dropdown list disabled? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }
  }
}

const Template = (args) => {

  //const data = init(new Date('2025-02-28'), 1950, 2050, 1)
  const data = init(null, 1950, 2050, 0)
  const [dateData, setDateData] = useState(data.dateData)
  const [date, setDate] = useState(data.selectedDateValue)
  const [month, setMonth] = useState(data.selectedMonthValue)
  const [year, setYear] = useState(data.selectedYearValue)
  const [resetValue, setResetValue] = useState(false)

  useEffect(() => {
    setDateData(daysInMonth(month, year))
    !isDateValid(date, month, year) ? setResetValue(true) : setResetValue(false)
  }, [date, month, year])

  return (
    <DatePickerDropdownComponent {...args}>
      <DropDownList
        id="day_dropdown_1"
        label=""
        placeholder="Day"
        options={dateData}
        defaultValue={data.dateData[data.selectedDateIndex]}
        resetValue={resetValue}
        onChangeHandler={(selectedOption) => {setDate(selectedOption.value)}}
      />
      <DropDownList
        id="month_dropdown_1"
        label=""
        placeholder="Month"
        options={data.monthData}
        defaultValue={data.monthData[data.selectedMonthIndex]}
        onChangeHandler={(selectedOption) => {setMonth(selectedOption.value)}}
      />
      <DropDownList
        id="year_dropdown_1"
        label=""
        placeholder="Year"
        options={data.yearData}        
        defaultValue={data.yearData[data.selectedYearIndex]}
        onChangeHandler={(selectedOption) => {setYear(selectedOption.value)}}
      />
    </DatePickerDropdownComponent>
  )
}

export const DatePickerDropdown = Template.bind()
DatePickerDropdown.args = {  
  id: "dddatepicker_value_1",
  label: "Date of Birth",
  text: "This is a mandatory field",
  isError: false,
  isRequired: false,
  isDisabled: false
}
