import { useState, useEffect } from 'react'
import config from '@config/config'

export const convertAcousticDateToPublishDate = (acousticDate, languageCode) => {
  const dateObj = new Date(acousticDate)
  const month = dateObj.toLocaleString(languageCode, { month: 'long' })
  const year = dateObj.getUTCFullYear()
  let publishedDate = `${month} ${year}`
  return publishedDate
}

export const getValue = (element) => {
  if(element?.value) {
    return element?.value
  }  
  return null
}

export const getValues = (element) => {
  if(element?.values) {
    return element.values
  }
  return null
}

export const getSelectionValue = (element) => {
  const elementValue = getValue(element)
  return elementValue ? elementValue.selection : null
}

export const getSelectionLabel = (element) => {
  const elementValue = getValue(element)
  return elementValue ? elementValue.label : null
}

export const getFullImageStr = (imageUrl) => {
  if(imageUrl) {
    return config?.acoustic?.domain + imageUrl
  }
  return null
}

export const getFullUrl = (url) => {
  if(url) {
   return config?.acoustic?.domain + url
  }
  return null  
}

export const capitaliseFirstLetter = (string) => {
  if(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return null  
}

export const arrayToStringBuilder = (values) => {
  let stringArray = []
  if (values != undefined) {
      values.forEach((val) => {
        if(val?.selection != undefined) {
          stringArray.push(val?.selection);
        } else {
          stringArray.push(val); 
        }
      })
  }
  return stringArray.toString() == null || stringArray.toString() == undefined ? ' ' : stringArray.toString();
}
