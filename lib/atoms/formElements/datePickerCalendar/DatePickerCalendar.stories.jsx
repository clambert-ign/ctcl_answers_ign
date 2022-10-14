import { useState } from 'react'
import DatePickerCalendar from "./DatePickerCalendar"

export default {
  title: "Atoms/Form elements/Date Picker Calendar",
  component: DatePickerCalendar,
  parameters: {
    docs: {
      description: {
        component: "A date picker calendar lets users select a date, or a range of dates from a calendar."
      }
    },
    cssprops: {
      "date-font-size": {
        value: "16px",
        description: "Date Picker (Calendar) title font size",
        control: "text"
      },
      "date-font-weight": {
        value: "600",
        description: "Date Picker (Calendar) title font weight",
        control: "text"
      },
      "date-text-color": {
        value: "#4B4C53",
        description: "Date Picker (Calendar) title font colour"
      },
      "date-bgcolor": {
        value: "#f5f5f6",
        description: "Date Picker (Calendar) background colour"
      },
      "date-border-color": {
        value: "#f5f5f6",
        description: "Date Picker (Calendar) border colour"
      },
      "date-border-radius": {
        value: "8px",
        description: "Date Picker (Calendar) border radius",
        control: "text"
      },
      "date-nav-color": {
        value: "#6267A1",
        description: "Date Picker (Calendar) nav colour"
      },
      "date-month-color": {
        value: "#6267A1",
        description: "Date Picker (Calendar) month colour"
      },
      "date-day-hover-outline": {
        value: "#6267A1",
        description: "Date Picker (Calendar) day hover outline"
      },
      "date-day-hover-border-radius": {
        value: "1rem",
        description: "Date Picker (Calendar) day hover outline",
        control: "text"
      },
      "date-day-name-font-weight": {
        value: "700",
        description: "Date Picker (Calendar) day name font weight",
        control: "text"
      },
      "date-day-border-radius": {
        value: "1rem",
        description: "Date Picker (Calendar) day border radius",
        control: "text"
      },
      "date-day-bgcolor": {
        value: "#6267A1",
        description: "Date Picker (Calendar) day font color"
      },
      "date-day-font-weight": {
        value: "400",
        description: "Date Picker (Calendar) day font weight",
        control: "text"
      },
      "date-day-color": {
        value: "#fff",
        description: "Date Picker (Calendar) day colour"
      },
      "date-day-today-bgcolor": {
        value: "#6267A1",
        description: "Date Picker (Calendar) today background colour"
      },
      "date-day-today-color": {
        value: "#fff",
        description: "Date Picker (Calendar) today font colour"
      },
      "date-input-text-color": {
        value: "#6267A1",
        description: "Date Picker (Calendar) input text colour"
      },
      "date-focus-bgcolor": {
        value: "#6267A1",
        description: "Date Picker (Calendar) input focus bgcolour"
      },
      "date-focus-caret-color": {
        value: "#6267A1",
        description: "Date Picker (Calendar) caret focus colour"
      },
      "date-text-font-size": {
        value: "12px",
        description: "Date Picker (Calendar) assistive text font weight",
        control: "text"
      },
      "date-text-font-weight": {
        value: "400",
        description: "Date Picker (Calendar) assistive text font weight",
        control: "text"
      },
      "date-disabled": {
        value: "#888995",
        description: "Date Picker (Calendar) disabled colour"
      },
      "date-disabled-focus-bgcolor": {
        value: "#f5f5f6",
        description: "Date Picker (Calendar) disabled focus bgcolour"
      },
      "date-error-color": {
        value: "#b00020",
        description: "Date Picker (Calendar) error colour"
      }
    }
  },
  args: {
    id: "input_id_1",
    label: "Select Date",
    text: "This field is required",
    isError: false,
    isRequired: false,
    isDisabled: false
  },
  argTypes: {
    id: {
      description: 'The id value of the Date Picker (Calendar)',
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    label: {
      description: 'The label text of the Date Picker (Calendar) to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    text: {
      description: 'The assistive text of the Date Picker (Calendar) to display',
      type: { 
        name: 'string'
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },   
    isError: {
      description: 'Is this Date Picker (Calendar) in error state? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },
    isRequired: {
      description: 'Is this Date Picker (Calendar) required? Boolean.',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    },    
    isDisabled: {
      description: 'Is this Date Picker (Calendar) disabled? Boolean.',
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
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerCalendar 
      {...args} 
      name="input_id" 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
    />
  )
}

export const Default = Template.bind()
Default.args = {
  id: "input_value_1",
  label: "Select Date",
  text: "This field is required",
  isError: false,
  isRequired: false,
  isDisabled: false
}

const TemplateRange = (args) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div style={{
        display: 'inline-flex', 
        gap: '10px'
      }}>
        <DatePickerCalendar
          {...args} 
          label="From date"
          name="input_id1" 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePickerCalendar
          {...args} 
          label="To date"
          name="input_id2" 
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </>
  )
}

export const DateRange = TemplateRange.bind()