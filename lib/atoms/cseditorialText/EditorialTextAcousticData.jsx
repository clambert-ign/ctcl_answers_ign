import { useState, Fragment } from 'react'
import EditorialText from './EditorialText'
import { useDispatch } from 'react-redux'
import { getValue, getSelectionValue, capitaliseFirstLetter } from '@services/utilities/utilityHelper'
import RichText from '@lib/richText/RichText'
import Button from '@atoms/button/Button'
import Modal from '@components/modal/Modal'
import { linkHelperConstants } from '@services/utilities/linkHelper'

const EditorialTextAcousticData = (props) => {
  const { 
    align, 
    caption, 
    text,
    titleTag, 
    title, 
    columns 
  } = props.data

  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }  
      
  return (            
    <Fragment>
      <EditorialText 
        align={getSelectionValue(align)}
        caption={getValue(caption)}
        titleTag={getSelectionValue(titleTag)}
        title={getValue(title)}
        columns={getValue(columns)}
      >
        {getRichText(getValue(text))}
      </EditorialText>
    </Fragment>
  )
}

export default EditorialTextAcousticData