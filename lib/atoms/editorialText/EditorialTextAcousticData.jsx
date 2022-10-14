import { useState, Fragment } from 'react'
import EditorialText from './EditorialText'
import { useDispatch } from 'react-redux'
import { getValue, getValues, getSelectionValue, capitaliseFirstLetter } from '@services/utilities/utilityHelper'
import RichText from '@lib/richText/RichText'
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import Modal from '@components/modal/Modal'
import { linkHelperConstants } from '@services/utilities/linkHelper'

const EditorialTextAcousticData = (props) => {
  const { 
    align, 
    caption, 
    text,
    titleTag, 
    title, 
    columns,
    linksButtons
  } = props.data

  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }
  
  return (     
    <EditorialText 
      align={getSelectionValue(align)}
      caption={getValue(caption)}
      titleTag={getSelectionValue(titleTag)}
      title={getValue(title)}
      columns={getValue(columns)}
    >
      {getRichText(getValue(text))}      
      {(linksButtons && getValues(linksButtons)) && (
        <>
          {getValues(linksButtons).map((button, i) => {
            return (
              <ButtonAcousticData key={i} data={button.elements} />
            )
          })}
        </>
      )}
    </EditorialText>
  )
}

export default EditorialTextAcousticData