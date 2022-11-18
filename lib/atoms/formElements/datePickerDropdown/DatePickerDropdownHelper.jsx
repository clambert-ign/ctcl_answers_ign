export const init = (
    dateSelected = null, 
    yearStart = 1901, 
    yearEnd = new Date().getFullYear(), 
    yearSort = 0
  ) => {

  let day, month, year, selectedDate, selectedMonth, selectedYear = null
  const returnValue = {}
  returnValue.dateData  = dateData()
  returnValue.monthData = monthData()
  returnValue.yearData  = yearData(yearStart, yearEnd, yearSort)

  if(dateSelected) {
    day   = new Date(dateSelected).getDate()
    month = new Date(dateSelected).getMonth() + 1
    year  = new Date(dateSelected).getFullYear()    
    selectedDate  = returnValue.dateData.find(o => o.value === day)
    selectedMonth = returnValue.monthData.find(o => o.value === month)
    selectedYear  = returnValue.yearData.find(o => o.value === year)
    returnValue.selectedDateIndex   = returnValue.dateData.indexOf(selectedDate)
    returnValue.selectedDateValue   = selectedDate.value
    returnValue.selectedMonthIndex  = returnValue.monthData.indexOf(selectedMonth)
    returnValue.selectedMonthValue  = selectedMonth.value
    returnValue.selectedYearIndex   = returnValue.yearData.indexOf(selectedYear)
    returnValue.selectedYearValue   = selectedYear.value
  }
  return returnValue
}

const dateData = (length = 31) => {
  const aDateData = []
  for (let i = 1; i <= length; ++i) {
    aDateData.push({ value: i, label: i })
  }
  return aDateData
}

const monthData = () => {
  const aMonthData = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
  ]
  return aMonthData
}

const yearData = (yearStart, yearEnd, yearSort) => {
  const aYearData = []
  for (let y = yearStart; y <= yearEnd; ++y) {
    aYearData.push({ value: y, label: y })
  }
  if (yearSort==1) {
    aYearData.reverse()
  }
  return aYearData
}

export const daysInMonth = (month = 1, year = 1901) => {
  return dateData(new Date(year, month, 0).getDate())
}

export const isDateValid = (date, month = 1, year = 1901) => {
  if(date > new Date(year, month, 0).getDate()) {
    return false
  }
  return true
}