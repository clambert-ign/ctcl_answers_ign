import { useRef, useState } from "react"
import FaqsComponent from './Faqs'
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
  title: 'Patterns/Faqs',
  component: FaqsComponent,
  parameters: {
    docs: {
      description: {
        component: 'This pattern demonstrates how to combine atoms and components to create FAQs. It makes use of PageSection, Section Title, Editorial, EditorialText, Button, Accordion, PanelList and PanelListItem'
      }
    },
    cssprops: {}
  },
  args: {},
  argTypes: {}
}

const Template = (args) => {
  const [faqsOpen, setReferencesOpen] = useState(0)
  const faqsRef = useRef()
  return (
    <>
      <PageSection {...PageSectionArgs.default.args} ref={faqsRef}>
        <SectionTitle
          title="FAQs"
          titleTag="h3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <FaqsComponent>
          <Accordion {...AccordionArgs.Accordion.args} heading="" openPanel={faqsOpen}>
          <AccordionItem title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" icon="">
            <Editorial {...EditorialArgs.Editorial.args}>
              <EditorialText {...EditorialTextArgs.EditorialText.args} title="" caption="" columns={2} text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
            </Editorial>
            </AccordionItem>
            <AccordionItem title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" icon="">
            <Editorial {...EditorialArgs.Editorial.args}>
              <EditorialText {...EditorialTextArgs.EditorialText.args} title="" caption="" columns={2} text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
            </Editorial>
            </AccordionItem>
            <AccordionItem title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" icon="">
            <Editorial {...EditorialArgs.Editorial.args}>
              <EditorialText {...EditorialTextArgs.EditorialText.args} title="" caption="" columns={2} text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
            </Editorial>
            </AccordionItem>
            <AccordionItem title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" icon="">
            <Editorial {...EditorialArgs.Editorial.args}>
              <EditorialText {...EditorialTextArgs.EditorialText.args} title="" caption="" columns={2} text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
            </Editorial>
            </AccordionItem>
            <AccordionItem title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" icon="">
            <Editorial {...EditorialArgs.Editorial.args}>
              <EditorialText {...EditorialTextArgs.EditorialText.args} title="" caption="" columns={2} text={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
            </Editorial>
            </AccordionItem>
          </Accordion>
        </FaqsComponent>
      </PageSection>
    </>
  )
}

export const Faqs = Template.bind({})
Faqs.parameters = {
  controls: { hideNoControlsWarning: true }
}