import GlobalFooter from './GlobalFooter'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getValue, convertAcousticDateToPublishDate } from '@services/utilities/utilityHelper'
import { getLibraryCode, getActiveLibrariesLocalised } from '@services/utilities/libraryUtils'
import '@i18n/config'
import { useTranslation } from 'react-i18next'
import RichText from '@lib/richText/RichText'
import Image from "@atoms/image/Image"
import Button from '@atoms/button/Button'
import ButtonAcousticData from '@atoms/button/ButtonAcousticData'
import EditorialText from "@atoms/editorialText/EditorialText"
import List from '@atoms/list/List'
import ListItem from '@atoms/list/ListItem'
import Divider from '@atoms/divider/Divider'
import Modal from '@components/modal/Modal'
import ModalContent from "@components/modal/ModalContent"
import CountrySelector from '@patterns/countrySelector/CountrySelector'

const GlobalFooterAcousticData = (props) => {
  const { 
    datePublished, 
    globalComplianceCode, 
    menuItems,
    footerSignoff
  } = props.data  

  const { t } = useTranslation()  
  const [showModal, setShowModal] = useState(false)
  const languagePath = useSelector((state) => state.acoustic.language)
  const languageCode = getLibraryCode(languagePath)
  const date = datePublished?.value ? convertAcousticDateToPublishDate(datePublished?.value, languageCode) : ''
  const activeCountriesTranslations = t('activeCountries', { returnObjects: true })
  const activeLib = getActiveLibrariesLocalised(activeCountriesTranslations)
  const toggleModal = (e) => {
    e ? e.preventDefault() : null
    setShowModal(!showModal)
  }
  const getRichText = (text) => {
    if (!text) return null
    return <RichText data={text} />
  }

  return (
    <>
    <GlobalFooter
      logo=<Image src="/images/kki-logo-orange.png" altText="Kyowa Kirin Logo" />
      languageIcon="globe"
      languageText={t('countryRegion')} 
      languageLink=<Button type='tertiary' link="#" text="United Kingdom" onClick={toggleModal} />
      datePublished={date}
      complianceCode={getValue(globalComplianceCode)}
      footerSignoff={getRichText(getValue(footerSignoff))}
    >
      <List columns={4}>
        {menuItems?.values.map((item, index) => {
          return (
            <ListItem key={index}>
              <ButtonAcousticData index={index} data={item?.elements} />
            </ListItem>
          )
        })}
      </List>
    </GlobalFooter>
    <Modal 
      show={showModal} 
      title={t('pleaseSelectYourCountryOrRegion')}
      onClose={(value) => {
        toggleModal(value)
      }}
    >
      <ModalContent>
        <CountrySelector>
          {Object.keys(activeLib).map((region, i) => {
            return (
              <div key={i}>
                <EditorialText title={t('region')} />
                <Divider />
                <List columns={2}>
                    {activeLib[region]?.map((library) => {
                      return (
                        <ListItem key={library?.libraryId}>
                          <Button type="tertiary" text={library?.country} onClick={(e) => changeLanguage(e,library.code)} />
                        </ListItem>
                      )
                    })}
                </List>
              </div>
            )
          })}
        </CountrySelector>
      </ModalContent>
    </Modal>
    </>
  )
}

export default GlobalFooterAcousticData