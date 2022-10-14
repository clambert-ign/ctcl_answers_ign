import GlobalFooter from './GlobalFooter'
import { useDispatch, useSelector } from 'react-redux'
import { getValue, getValues, getFullImageStr } from '@services/utilities/utilityHelper'
import { convertAcousticDateToPublishDate } from '@services/utilities/utilityHelper'
import { getLibraryCode } from '@services/utilities/libraryUtils'
import RichText from '@lib/richText/RichText'

const GlobalFooterAcousticData = (props) => {
  const { 
    datePublished, 
    globalComplianceCode, 
    menuItems,
    footerSignoff
  } = props.data  

  const getRichText = (text) => {
    if (!text) return ''
    return <RichText data={text} />
  }  
  
  const languagePath = useSelector((state) => state.acoustic.language)
  const languageCode = getLibraryCode(languagePath)
  const publishedDate = datePublished?.value ? convertAcousticDateToPublishDate(datePublished?.value, languageCode) : ''
  
  let footerMenuItems = { values: [] }
  if (menuItems?.values) {
    menuItems?.values.map((item) => {
      let obj = {}
      obj['btnType'] = item?.elements?.type?.value?.selection
      obj['linkText'] = item?.elements?.text?.value
      obj['linkURL'] = item?.elements?.link?.value
      obj['btnIcon'] = item?.elements?.icon?.value?.selection
      obj['btnIconAlign'] = item?.elements?.iconAlign?.value?.selection
      obj['isDisabled'] = item?.elements?.isDisabled?.value
      obj['isDownload'] = item?.elements?.isDownload?.value
      obj['isExternal'] = item?.elements?.isExternal?.value
      obj['externalText'] = item?.elements?.externalText?.value
      footerMenuItems.values.push(obj)
    })
  }

  return (
    <GlobalFooter
      menuItems={footerMenuItems}
      datePublished={publishedDate}
      complianceCode={getValue(globalComplianceCode)}
      footerSignoff={getRichText(getValue(footerSignoff))}
    />
  )
}

export default GlobalFooterAcousticData
