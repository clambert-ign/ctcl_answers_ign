import AccordionComponent from "./Accordion"
import AccordionItem from "./AccordionItem"
import Button from '@atoms/button/Button'
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import Image from "@atoms/image/Image"
import Audio from "@atoms/audio/Audio"
import * as AudioArgs from "@atoms/audio/Audio.stories"
import Video from "@atoms/video/Video"
import * as VideoArgs from "@atoms/video/Video.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Editorial from "@patterns/editorial/Editorial"
import * as EditorialArgs from "@patterns/editorial/Editorial.stories"
import ContentCard from "@components/contentCard/ContentCard"
import ContentCardItem from "@components/contentCard/ContentCardItem"

export default {
  title: "Components/In-page Navigation/Accordion",
  component: AccordionComponent,
  normalize: true,
  parameters: {
    docs: {
      description: {
        component: "Accordion components progressively disclose content. They are a list-based navigation component that can be expanded or collapsed to hide or reveal other components or atoms."
      }
    },
    cssprops: {
      "acc-text-color": {
        value: "#4B4C53",
        description: "Accordion Text Color"
      },
      "acc-headline-font-size": {
        value: "28px",
        description: "Accordion Headline Font Size",
        control: "text"
      },
      "acc-headline-font-weight": {
        value: "400",
        description: "Accordion Headline Font Weight",
        control: "text"
      },
      "acc-headline-line-height": {
        value: "33.6px",
        description: "Accordion Headline Font Line Height",
        control: "text"
      },
      "acc-item-font-size": {
        value: "16px",
        description: "Accordion Item Font Size",
        control: "text"
      },
      "acc-item-font-weight": {
        value: "700",
        description: "Accordion Item Font Weight",
        control: "text"
      },
      "acc-item-line-height": {
        value: "19.2px",
        description: "Accordion Item Font Line Height",
        control: "text"
      },
      "acc-item-box-shadow": {
        value: "none",
        description: "Accordion Item Box Shadow",
        control: "text"
      },
      "acc-item-text-color": {
        value: "#fff",
        description: "Accordion Item Text Colour",
        control: "text"
      },
      "acc-item-icon-color": {
        value: "#fff",
        description: "Accordion Item Icon Colour",
        control: "text"
      },
      "acc-item-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item Background Colour",
        control: "text"
      },
      "acc-item-border-color": {
        value: "#6267A1",
        description: "Accordion Item Border Colour",
        control: "text"
      },
      "acc-item-hover-box-shadow": {
        value: "none",
        description: "Accordion Item Box Shadow",
        control: "text"
      },
      "acc-item-hover-text-color": {
        value: "#fff",
        description: "Accordion Item Text Colour",
        control: "text"
      },
      "acc-item-hover-icon-color": {
        value: "#fff",
        description: "Accordion Item Icon Colour",
        control: "text"
      },
      "acc-item-hover-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item Background Colour",
        control: "text"
      },
      "acc-item-hover-border-color": {
        value: "#6267A1",
        description: "Accordion Item Border Colour",
        control: "text"
      },
      "acc-item-active-box-shadow": {
        value: "none",
        description: "Accordion Item Box Shadow",
        control: "text"
      },
      "acc-item-active-text-color": {
        value: "#fff",
        description: "Accordion Item Text Colour",
        control: "text"
      },
      "acc-item-active-icon-color": {
        value: "#fff",
        description: "Accordion Item Icon Colour",
        control: "text"
      },
      "acc-item-active-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item Background Colour",
        control: "text"
      },
      "acc-item-active-border-color": {
        value: "#6267A1",
        description: "Accordion Item Border Colour",
        control: "text"
      },
      "acc-item-focus-box-shadow": {
        value: "none",
        description: "Accordion Item Box Shadow",
        control: "text"
      },
      "acc-item-focus-text-color": {
        value: "#fff",
        description: "Accordion Item Text Colour",
        control: "text"
      },
      "acc-item-focus-icon-color": {
        value: "#fff",
        description: "Accordion Item Icon Colour",
        control: "text"
      },
      "acc-item-focus-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item Background Colour",
        control: "text"
      },
      "acc-item-focus-border-color": {
        value: "#6267A1",
        description: "Accordion Item Border Colour",
        control: "text"
      },
      "acc-item-disabled-box-shadow": {
        value: "none",
        description: "Accordion Item Box Shadow",
        control: "text"
      },
      "acc-item-disabled-text-color": {
        value: "#fff",
        description: "Accordion Item Text Colour",
        control: "text"
      },
      "acc-item-disabled-icon-color": {
        value: "#fff",
        description: "Accordion Item Icon Colour",
        control: "text"
      },
      "acc-item-disabled-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item Background Colour",
        control: "text"
      },
      "acc-item-disabled-border-color": {
        value: "#6267A1",
        description: "Accordion Item Border Colour",
        control: "text"
      },
      "acc-item-closed-font-size": {
        value: "16px",
        description: "Accordion Item (Closed) Font Size",
        control: "text"
      },
      "acc-item-closed-font-weight": {
        value: "700",
        description: "Accordion Item (Closed) Font Weight",
        control: "text"
      },
      "acc-item-closed-line-height": {
        value: "19.2px",
        description: "Accordion Item (Closed) Font Line Height",
        control: "text"
      },
      "acc-item-closed-box-shadow": {
        value: "none",
        description: "Accordion Item (Closed) Box Shadow",
        control: "text"
      },
      "acc-item-closed-text-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Text Colour",
        control: "text"
      },
      "acc-item-closed-icon-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Icon Colour",
        control: "text"
      },
      "acc-item-closed-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Background Colour",
        control: "text"
      },
      "acc-item-closed-border-color": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Border Colour",
        control: "text"
      },
      "acc-item-closed-hover-box-shadow": {
        value: "none",
        description: "Accordion Item (Closed) Box Shadow",
        control: "text"
      },
      "acc-item-closed-hover-text-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Text Colour",
        control: "text"
      },
      "acc-item-closed-hover-icon-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Icon Colour",
        control: "text"
      },
      "acc-item-closed-hover-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Background Colour",
        control: "text"
      },
      "acc-item-closed-hover-border-color": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Border Colour",
        control: "text"
      },
      "acc-item-closed-active-box-shadow": {
        value: "none",
        description: "Accordion Item (Closed) Box Shadow",
        control: "text"
      },
      "acc-item-closed-active-text-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Text Colour",
        control: "text"
      },
      "acc-item-closed-active-icon-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Icon Colour",
        control: "text"
      },
      "acc-item-closed-active-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Background Colour",
        control: "text"
      },
      "acc-item-closed-active-border-color": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Border Colour",
        control: "text"
      },
      "acc-item-closed-focus-box-shadow": {
        value: "none",
        description: "Accordion Item (Closed) Box Shadow",
        control: "text"
      },
      "acc-item-closed-focus-text-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Text Colour",
        control: "text"
      },
      "acc-item-closed-focus-icon-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Icon Colour",
        control: "text"
      },
      "acc-item-closed-focus-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Background Colour",
        control: "text"
      },
      "acc-item-closed-focus-border-color": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Border Colour",
        control: "text"
      },
      "acc-item-closed-disabled-box-shadow": {
        value: "none",
        description: "Accordion Item (Closed) Box Shadow",
        control: "text"
      },
      "acc-item-closed-disabled-text-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Text Colour",
        control: "text"
      },
      "acc-item-closed-disabled-icon-color": {
        value: "#fff",
        description: "Accordion Item (Closed) Icon Colour",
        control: "text"
      },
      "acc-item-closed-disabled-bgcolor": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Background Colour",
        control: "text"
      },
      "acc-item-closed-disabled-border-color": {
        value: "#6267A1",
        description: "Accordion Item (Closed) Border Colour",
        control: "text"
      },
    }
  },
  args: {
    heading: '',
    headingTag: 'h2',
    openPanel: 2,
    openMultiple: false
  },
  argTypes: {
    heading: {
      description: "The heading of the component to be displayed",
      type: { 
        name: 'string',
        required: false
      },
      control: { 
        type: 'text' 
      },
      table: {}
    },
    headingTag: {
      description: 'The heading tag to wrap around the component heading.',
      type: { 
        name: 'enum', 
        required: true 
      },
      control: false,
      table: {}
    },
    openPanel: {
      description: 'Decide which accordion item should be open when the accordion loads.',
      type: { 
        name: 'number' 
      },
      control: {
        type: 'number',
      },
      table: {}
    }, 
    openMultiple: {
      description: 'Should we allow multiple accordion items to be open at the same time?',
      type: { 
        name: 'boolean' 
      },
      control: {
        type: 'boolean',
      },
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <>
      <AccordionComponent {...args}>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" iconAlign="right" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol></>}>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>}>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <>
            <ContentCard>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageTwo.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
            <ContentCard>
            <ContentCardItem 
                image={<Image src="/images/contentCardImageTwo.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageThree.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
          </>
        </AccordionItem>
      </AccordionComponent>
      <AccordionComponent {...args}>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>}>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>} />
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args} text={<><p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>}>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <>
            <ContentCard>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageTwo.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
            <ContentCard>
            <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
          </>
        </AccordionItem>
      </AccordionComponent>
    </>
  )
}
export const Accordion = Template.bind()
Accordion.args = {
  heading: 'Accordion Component',
  headingTag: 'h2',
  openPanel: 2,
  openMultiple: false
}

