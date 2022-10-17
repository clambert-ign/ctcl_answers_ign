import { useState } from "react"
import { getValue, getValues, getSelectionValue } from '@services/utilities/utilityHelper'
import Button from './Button'
import EditorialAcousticData from "@patterns/editorial/EditorialAcousticData"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"
import '@i18n/config'
import { useTranslation } from 'react-i18next'
import { getComponentName } from '@services/utilities/acousticMappings'

const ButtonAcousticData = (props) => {
  const { 
    behaviourReference,
    clickEvent,
    downloadFilename,
    externalText,
    icon,
    iconAlign,
    id,
    isDisabled,
    isExternal,
    isDownload,
    link,
    text,
    type
  } = props.data

  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
    
  const handleClickEvent = (clickEvent) => {
    switch (clickEvent) {
      case 'scroll':
        return scrollTo
      case 'modal':
        return toggleModal
      default:
        return null
    }
  }

  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(getValue(link), '_blank')
    }
  }
  
  const scrollTo = (e) => {
    e.preventDefault()  
    if(behaviourReference) {
      document.getElementById(getValue(behaviourReference?.value?.elements?.sectionId)).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Button
        type={getSelectionValue(type)} 
        text={getValue(text)}  
        icon={getSelectionValue(icon)} 
        iconAlign={getSelectionValue(iconAlign)} 
        link={getValue(link)}
        isDisabled={getValue(isDisabled)}
        isDownload={getValue(isDownload)}
        downloadFilename={getValue(downloadFilename)}
        isExternal={getValue(isExternal)}
        onClick={getValue(isExternal) ? toggleModal : handleClickEvent(getSelectionValue(clickEvent))}
      />
      {(getValue(isExternal)===true) && (
        <ConfirmationDialog>
          <Modal 
            show={showModal} 
            title={t('warning')}
            titleTag="h3"
            align="center"
            onClose={(value) => {
              setShowModal(value)
            }}
          >
            <ModalContent>
              <p>{externalText? getValue(externalText) : t('externalLink')}</p>
            </ModalContent>
            <ModalFooter>
              <Button type="primary" text={t('confirm')} onClick={openWindow} />
              <Button type="secondary" text={t('cancel')} onClick={toggleModal} />
            </ModalFooter>
          </Modal>
        </ConfirmationDialog>
      )}
      {(getSelectionValue(clickEvent)==='modal' && behaviourReference) ? 
        <Modal 
          show={showModal} 
          title={getValue(behaviourReference?.value?.elements?.title)}
          titleTag={getSelectionValue(behaviourReference?.value?.elements?.titleTag)}
          align={getSelectionValue(behaviourReference?.value?.elements?.align)}
          onClose={(value) => {
            setShowModal(value)
          }}
        >
          <ModalContent>
            {
              getValues(behaviourReference?.value?.elements?.editorial).map((content, index) => {
                if(getComponentName(content.type) === 'Editorial') {
                  return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
                }
              })
            }
          </ModalContent>
        </Modal>
      : 
      null 
      }
    </>
  )
}

export default ButtonAcousticData
