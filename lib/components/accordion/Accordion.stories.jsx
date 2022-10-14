import AccordionComponent from "./Accordion"
import AccordionItem from "./AccordionItem"
import Button from '@atoms/button/Button'
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import Audio from "@atoms/audio/Audio"
import * as AudioArgs from "@atoms/audio/Audio.stories"
import Video from "@atoms/video/Video"
import * as VideoArgs from "@atoms/video/Video.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Editorial from "@patterns/editorial/Editorial"
import * as EditorialArgs from "@patterns/editorial/Editorial.stories"
import ContentCard from "@components/contentCard/ContentCard"
import ContentCardItem from "@components/contentCard/ContentCardItem";

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
      "ac-text-color": {
        value: "#4B4C53",
        description: "Accordion Text Color"
      },
      "ac-headline-font-size": {
        value: "28px",
        description: "Accordion Headline Font Size",
        control: "text"
      },
      "ac-headline-font-weight": {
        value: "400",
        description: "Accordion Headline Font Weight",
        control: "text"
      },
      "ac-headline-line-height": {
        value: "33.6px",
        description: "Accordion Headline Font Line Height",
        control: "text"
      },
      "ac-item-closed-text-color": {
        value: "#4B4C53",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-closed-bgcolor": {
        value: "#F5F5F6",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-closed-border-color": {
        value: "#F5F5F6",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-closed-hover-text-color": {
        value: "#fff",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-closed-hover-bgcolor": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-closed-hover-border-color": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-text-color": {
        value: "#fff",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-text-bgcolor": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-border-color": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-hover-text-color": {
        value: "#fff",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-hover-bgcolor": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      },
      "ac-item-hover-border-color": {
        value: "#6267A1",
        description: "Accordion Headline Font Line Height"
      }
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
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
            <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" iconAlign="right" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <>
            <ContentCard>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
            <ContentCard>
            <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
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
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </AccordionItem>
        <AccordionItem title="Accordion Title">
          <>
            <ContentCard>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
            </ContentCard>
            <ContentCard>
            <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
                imageAlign='left'
              >        
                <Button {...TertiaryButtonArgs.default.args} />
              </ContentCardItem>
              <ContentCardItem 
                image='/images/_blue-orange.png'
                title='Content Cards Title'
                titleTag="h3"
                subtitle='Card Subtitle'
                subtitleTag="h4"
                label="Label text"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. '
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

export const Accordion = Template.bind({})
Accordion.args = {
  heading: 'Accordion Component',
  headingTag: 'h2',
  openPanel: 2,
  openMultiple: false
}

