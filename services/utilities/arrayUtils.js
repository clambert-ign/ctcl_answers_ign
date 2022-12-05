// Group arrays by Key
export const groupBy = (arr, key) => {
  return (arr || []).reduce((acc, x = {}) => ({
    ...acc,
    [x[key]]: [...acc[x[key]] || [], x]
  }), {})
}

export const dynamicSort = (property) => {
  let sortOrder = 1
  if(property[0] === "-") {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a,b) {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result * sortOrder
  }
}