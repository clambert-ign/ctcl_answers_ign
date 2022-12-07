import React, { useEffect } from 'react'
import { getComponentName } from '@services/utilities/acousticMappings'
import { useDispatch } from 'react-redux'
import { setFooterComplianceCode, setDomain } from '@src/ducks/acousticSlice'
import PageHeadDetails from '@lib/pageHeadDetails/PageHeadDetails'
import HeroHeaderAcousticData from '@components/heroHeader/HeroHeaderAcousticData'
import PageSectionAcousticData from '@patterns/pageSection/PageSectionAcousticData'

const FlexiTemplate = (props) => {
  const dispatch = useDispatch()
  const { data } = props
  const footerComplianceCode = data?.elements?.complianceCode?.value
  
  dispatch(setDomain(window.location.origin))
  

  useEffect(() => {
    if(window.location.hash) {
      setTimeout(() => document.getElementById(window.location.hash.substring(1)).scrollIntoView({inline: 'center', behavior: 'smooth'}), 500)
    }
  })
  
  useEffect(() => {
    if(footerComplianceCode) {
      dispatch(setFooterComplianceCode(footerComplianceCode))
    }
    if (data?.elements?.pageClass?.value) {
      document.querySelector('body').className = ''
      document.querySelector('body').classList.add('body')
      document.querySelector('body').classList.add(data?.elements?.pageClass?.value)
    }
  }, [data])

  return (
    <>
      {data.elements && (<PageHeadDetails data={data} />)}
      {data.pageContent?.map((content, index) => {
        if (getComponentName(content.type) === 'HeroHeader') {
          return <HeroHeaderAcousticData key={`${content.type}${index}`} data={content?.document?.elements} />
        }
        if (getComponentName(content.type) === 'PageSection') {
          return <PageSectionAcousticData key={`${content.type}${index}`} data={content?.document?.elements} />
        }
      })}
    </>
  )
}

export default FlexiTemplate