import { useRef, useState } from "react"
import ReferencesComponent from './References'
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import SectionTitle from '@atoms/sectionTitle/SectionTitle'
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import List from "@atoms/list/List"
import ListItem from "@atoms/list/ListItem"
import Editorial from "@patterns/editorial/Editorial"
import * as EditorialArgs from "@patterns/editorial/Editorial.stories"
import Accordion from "@components/accordion/Accordion"
import AccordionItem from "@components/accordion/AccordionItem"
import * as AccordionArgs from "@components/accordion/Accordion.stories"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import * as ModalArgs from "@components/modal/Modal.stories"
import PanelList from "@components/panelList/PanelList"
import PageSection from '@patterns/pageSection/PageSection'
import * as PageSectionArgs from "@patterns/pageSection/PageSection.stories"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

export default {
  title: 'Patterns/References',
  component: ReferencesComponent,
  parameters: {
    docs: {
      description: {
        component: 'This pattern demonstrates how to combine atoms and components to create page references. It makes use of PageSection, Section Title, Editorial, EditorialText, Button, Accordion, PanelList and PanelListItem'
      }
    },
    cssprops: {}
  },
  args: {},
  argTypes: {}
}

const Template = (args) => {
  const [referencesOpen, setReferencesOpen] = useState(0)
  const referencesRef = useRef()
  const scrollTo = (e) => {
    e.preventDefault()    
    setReferencesOpen(1)
    referencesRef.current.scrollIntoView({ behavior: 'smooth', block: "center"})     
  }
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(TertiaryButtonArgs.ExternalLink.args.link, '_blank')
      setShowModal(!showModal)
    }
  }
  return (
    <>
      <PageSection {...args}>
        <SectionTitle
          title="Section title"
          titleTag="h3"
          description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        />
        <Editorial {...EditorialArgs.Editorial.args}>
          <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol></>}>
            <Button {...PrimaryButtonArgs.default.args} />
            <Button {...SecondaryButtonArgs.default.args} />
            <Button {...TertiaryButtonArgs.default.args} />
          </EditorialText>
        </Editorial>
      </PageSection>
      <PageSection {...args} cssClass="demo-purple">
        <SectionTitle
          title="Section title"
          titleTag="h3"
          description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        />
        <Editorial {...EditorialArgs.Editorial.args}>
          <EditorialText {...EditorialTextArgs.EditorialText.args} columns="3" text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol></>} />
        </Editorial>
      </PageSection>
      <PageSection {...args}>
        <SectionTitle
          title="Section title"
          titleTag="h3"
          description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        />
        <Editorial {...EditorialArgs.Editorial.args}>
          <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" onClick={toggleModal} /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" onClick={scrollTo} /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol></>} />
        </Editorial>
      </PageSection>
      <PageSection {...PageSectionArgs.default.args} ref={referencesRef}>
        <ReferencesComponent>
          <Accordion {...AccordionArgs.Accordion.args} heading="" openPanel={referencesOpen}>
            <AccordionItem title="References">
              <PanelList title="References Title" complianceCode="KKI/INT/KKI/0420">
                <List type="ordered">
                  <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="Link" /></ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.ExternalLink.args} onClick={toggleModal} type="tertiary" iconAlign="right" text="www.Link@example.com sed do eiusmod tempor" /></ListItem>
                  <ListItem>Author. publication, 2011. 26(7): p. 1381-8.</ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consect etur adipi scing elit <Button {...TertiaryButtonArgs.DownloadLink.args} type="tertiary" text="Download this resource" download /></ListItem>
                </List>
              </PanelList>
            </AccordionItem>
          </Accordion>
        </ReferencesComponent>
      </PageSection>
      <ConfirmationDialog>
        <Modal 
          {...ModalArgs.Modal.args}
          show={showModal} 
          title="Warning!"
          align="center"
          onClose={(value) => {
            setShowModal(value)
          }}
        >
          <ModalContent>
            <EditorialText align="center" text={<><p>You are about to leave this website, are you sure you want to continue?</p></>} />            
          </ModalContent>
          <ModalFooter>
            <Button {...PrimaryButtonArgs.default.args} text="Confirm" onClick={openWindow} />
            <Button {...SecondaryButtonArgs.default.args} text="Cancel" onClick={toggleModal} />
          </ModalFooter>
        </Modal>
      </ConfirmationDialog>
    </>
  )
}

export const References = Template.bind({})
References.parameters = {
  controls: { hideNoControlsWarning: true }
}