import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './GlobalFooter.module.scss'
import Button from '@atoms/button/Button'
import Image from '@atoms/image/Image'
import Divider from '@atoms/divider/Divider'
import EditorialText from "@atoms/cseditorialText/EditorialText"
import List from '@atoms/list/List'
import ListItem from '@atoms/list/ListItem'
import Modal from '@components/modal/Modal'
import ModalContent from '@components/modal/ModalContent'
import CountrySelector from '@patterns/countrySelector/CountrySelector'
import { ScrollToTop } from '@assets/svgIcons/SvgIcons'
import '@i18n/config'
import { useTranslation } from 'react-i18next'


import { getLibraryList } from '@services/utilities/libraryUtils'
import { dynamicSort, groupBy } from '@services/utilities/arrayUtils'

/**
  * Global Footer
  * @param {string} complianceCode  - The compliance code of the Global Footer Component to be displayed.
  * @param {string} datePublished   - The published date of the Global Footer Component to be displayed.
  * @param {object} menuItems       - The menu item links of the Global Footer Component to be displayed.
  * @param {object} footerSignoff
  * @return React component
  */

const GlobalFooter = (props) => {

  const {
    complianceCode,
    datePublished, 
    menuItems,
    footerSignoff
  } = props

  const date = (datePublished) ? datePublished : <FooterDate />
  const [openModal, setOpenModal] = useState(false)
  const libraries = getLibraryList()
  const { t } = useTranslation()   
  
  const activeCountriesTranslations = t('activeCountries', { returnObjects: true })

  const result = libraries.map((item) => {
    const obj = activeCountriesTranslations.find((o) => o.id === item.id)
    return { ...item, ...obj }
})

  const activeLib = groupBy(
      result.filter((library) => library.active === true),
      'region'
  )

  //sort countries alphabetically
  Object.keys(activeLib).map((region) => {
      activeLib[region].sort(dynamicSort('country'))
  })

  const changeLanguage = (e,locale) => {
    e.stopPropagation()
    if (typeof window !== 'undefined') {
      window.location.href = "/"+locale;
    }
  }

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-container-content']}>
          <Image src="/images/kki-logo-orange.png" altText="Kyowa Kirin Logo" />
          <div className={styles['footer-container-content-countrySelector']}>
            <Image src="/images/globe.png" position='fixed' />
            <span>{t('countryRegion')} </span>
            <Button type='tertiary' text={t('country')} onClick={() => setOpenModal(true)} />
          </div>
        </div>
        <div className={styles['footer-container-content']}>
          <div className={styles['footer-container-content-siteInfo']}>
            <p>{date}</p>
            <p>{complianceCode}</p>
          </div>
          <ScrollToTop />
        </div>
      </div>        
      <Divider />
      <div className={styles['footer-menuItems']}>
        <ul>
          {menuItems?.values?.map(({linkText, linkURL}, index) => (
            <li key={index}>
              <Button type='tertiary' text={linkText} link={linkURL} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['footer-signOff']}>
      {footerSignoff}
      </div>
    </footer>
    <Modal show={openModal} title={t('pleaseSelectYourCountryOrRegion')} onClose={setOpenModal}>
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
                          <Button type="tertiary" link="#" ext={library?.country} onClick={(e) => changeLanguage(e,library.code)} />
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

const FooterDate = () => {
  const dateObj = new Date()
  const year = dateObj.getUTCFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ]
  const month = monthNames[dateObj.getMonth()]
  return (`${month} ${year}`)
}

GlobalFooter.propTypes = {
  complianceCode: PropTypes.string,
  datePublished:  PropTypes.string,
  menuItems:      PropTypes.object,
  footerSignoff:  PropTypes.object
}

export default GlobalFooter
