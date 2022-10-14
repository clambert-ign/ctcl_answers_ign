import { useState } from "react"
import { getValue, getValues, getFullUrl, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'
import Button from './Button'
import EditorialAcousticData from "@patterns/editorial/EditorialAcousticData"
import EditorialText from "@atoms/editorialText/EditorialText"
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

  // add modal behaviour - add audio ctype and include in editorial - then test in modal
  // add scroll behaviour

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
        onClick={(getValue(isExternal) || getSelectionValue(clickEvent)==='modal') ? toggleModal : null}
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
              {getValue(externalText)}
            </ModalContent>
            <ModalFooter>
              <Button type="primary" text={t('confirm')} onClick={openWindow} />
              <Button type="secondary" text={t('cancel')} onClick={toggleModal} />
            </ModalFooter>
          </Modal>
        </ConfirmationDialog>
      )}
      {getSelectionValue(clickEvent)==='modal' ? 
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
            {getValues(behaviourReference?.value?.elements?.editorial).map((content, index) => {
              if (getComponentName(content.type) === 'Editorial') {
                return <EditorialAcousticData key={`${content.type}${index}`} data={content?.elements} />
              }
            })}
          </ModalContent>
        </Modal>
      : 
      null 
      }
    </>
  )
}

export default ButtonAcousticData
