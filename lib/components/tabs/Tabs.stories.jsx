import TabsComponent from "./Tabs"
import TabsContent from "./TabsContent"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
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
  title: "Components/In-page Navigation/Tabs",
  component: TabsComponent,
  normalize: true,
  parameters: {
    docs: {
      description: {
        component: "Tab components are used to navigate between different content views within a single page and can contain various components and atoms."
      }
    },
    cssprops: {
      "tab-text-colorr": {
        value: "#4B4C53",
        description: "Tabs Text Color"
      },
      "tab-headline-font-size": {
        value: "28px",
        description: "Tabs Headline Font Size",
        control: "text"
      },
      "tab-headline-font-weight": {
        value: "28px",
        description: "Tabs Headline Font Weight",
        control: "text"
      },
      "tab-headline-line-height": {
        value: "28px",
        description: "Tabs Headline Line Height",
        control: "text"
      },
      "tab-list-bgcolor": {
        value: "transparent",
        description: "Tabs Button Background Colour"
      },
      "tab-list-color": {
        value: "#4B4C53",
        description: "Tabs Button Text Colour"
      },
      "tab-list-border-color": {
        value: "#C3C4CA",
        description: "Tabs Button Border Colour"
      },
      "tab-list-hover-bgcolor": {
        value: "transparent",
        description: "Tabs Button Hover Background Colour"
      },
      "tab-list-hover-color": {
        value: "#6267A1",
        description: "Tabs Button Hover Text Colour"
      },
      "tab-list-hover-border-color": {
        value: "#C3C4CA",
        description: "Tabs Button Hover Border Colour"
      },
      "tab-list-active-bgcolor": {
        value: "#F5F5F6",
        description: "Tabs Button Active Background Colour"
      },
      "tab-list-active-color": {
        value: "#6267A1",
        description: "Tabs Button Active Text Colour"
      },
      "tab-list-active-border-color": {
        value: "#C3C4CA",
        description: "Tabs Button Active Border Colour"
      },
      "tab-list-selected-color": {
        value: "#6267A1",
        description: "Tabs Button Selected Text Colour"
      },
      "tab-list-selected-border-color": {
        value: "#6267A1",
        description: "Tabs Button Selected Border Colour"
      },
      "tab-list-scroll-left-bgcolor": {
        value: "#fff",
        description: "Tabs Button Scroll Left Background Colour"
      },
      "tab-list-scroll-left-color": {
        value: "#4B4C53",
        description: "Tabs Button Scroll Left Colour"
      },
      "tab-list-scroll-right-bgcolor": {
        value: "#fff",
        description: "Tabs Button Scroll Right Background Colour"
      },
      "tab-list-scroll-right-color": {
        value: "#4B4C53",
        description: "Tabs Button Scroll Right Colour"
      }
    }
  },
  args: {
    heading: '',
    headingTag: 'h2'
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
    }
  }
}

const Template = (args) => {

  return (
    <>
      <TabsComponent {...args}>
        <Button {...PrimaryButtonArgs.default.args} text="This is Tab Item 1" />
        <Button {...PrimaryButtonArgs.default.args} text="This is Tab Item 2" />
        <Button {...PrimaryButtonArgs.default.args} text="This is Tab Item 3" />
        <Button {...PrimaryButtonArgs.default.args} text="This is Tab Item 4" />
        <TabsContent>
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
            <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" iconAlign="right" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="ullamco laboris nisi ut aliquip ex ea commodo consequat" />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="Unordered List item one" /></li><li>Unordered List item two</li><li>Unordered List item three but with more text so we can test wrapping</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="3" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <small>reprehenderit in voluptate</small> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ol><li>Ordered List item one</li><li><del>Ordered List item two</del></li><li>Ordered List item three but with more text so we can test wrapping</li></ol>
            </EditorialText>
          </Editorial>
        </TabsContent>
        <TabsContent>
          <Editorial {...EditorialArgs.Editorial.args}>
            <Audio {...AudioArgs.Audio.args} title="" downloadText="" />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button {...SecondaryButtonArgs.default.args} />
              <Button {...TertiaryButtonArgs.default.args} />
            </EditorialText>
          </Editorial>
        </TabsContent>
        <TabsContent>
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
        </TabsContent>
        <TabsContent>
          <Editorial {...EditorialArgs.Editorial.args}>
            <Video {...VideoArgs.Video.args} />
            <EditorialText {...EditorialTextArgs.EditorialText.args}>
              <p>Lorem ipsum dolor sit amet, <strong><i>consectetur adipiscing elit</i></strong> <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="1" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco <Button {...TertiaryButtonArgs.ExternalLink.args} type="tertiary" text="laboris nisi ut aliquip ex ea" iconAlign="right" /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <sup><Button {...TertiaryButtonArgs.Default.args} type="tertiary" text="2" /></sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <sub>1</sub>. <mark>Ut enim ad minim veniam, quis nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </EditorialText>
          </Editorial>
        </TabsContent>
      </TabsComponent>
    </>
  )
}

export const Tabs = Template.bind({})
Tabs.args = {
  heading: 'Tab Component',
  headingTag: 'h2'
}