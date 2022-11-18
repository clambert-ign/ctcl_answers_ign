import ContentCardTileComponent from "./ContentCardTile";
import ContentCardItem from "./ContentCardTileItem";
import Button from '@atoms/button/Button'
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import Image from "@atoms/image/Image"

export default {
  title: 'Components/Editorial/Content Card Tile',
  component: ContentCardTileComponent,
  parameters: {
    docs: {
      description: {
        component: 'Content Card components are used to feature snippets of content and links to further detail. For example featured site pages, articles, videos or podcasts.'
      }
    },
    cssprops: {
      "cctile-bgcolor": { 
        value: "transparent", 
        description: "Content Card Background Colour"
      },
      "cctile-border-radius": { 
        value: "8px", 
        description: "Content Card Border Radius",
        control: "text"
      },
      "cctile-item-font-size": { 
        value: "16px", 
        description: "Content Card Item Font Size",
        control: "text"
      },
      "cctile-item-font-weight": { 
        value: "200", 
        description: "Content Card Item Font Weight",
        control: "text"
      },
      "cctile-item-line-height": { 
        value: "25.6px", 
        description: "Content Card Item Line Height",
        control: "text"
      },
      "cctile-item-text-color": { 
        value: "#fff", 
        description: "Content Card Item Font Colour"
      },
      "cctile-item-border-radius": { 
        value: "8px", 
        description: "Content Card Item Border Radius",
        control: "text"
      },
      "cctile-item-bgcolor": { 
        value: "#6267A1", 
        description: "Content Card Item Background Colour"
      },
      "cctile-item-label-font-size": { 
        value: "16px", 
        description: "Content Card Item Label Font Size",
        control: "text"
      },
      "cctile-item-label-font-weight": { 
        value: "400", 
        description: "Content Card Item Label Font Weight",
        control: "text"
      },
      "cctile-item-label-line-height": { 
        value: "25.6px", 
        description: "Content Card Item Label Line Height",
        control: "text"
      },
      "cctile-item-headline-font-size": { 
        value: "28px", 
        description: "Content Card Item Headline Font Size",
        control: "text"
      },
      "cctile-item-headline-font-weight": { 
        value: "600", 
        description: "Content Card Item Headline Font Weight",
        control: "text"
      },
      "cctile-item-headline-line-height": { 
        value: "33.6px", 
        description: "Content Card Item Headline Line Height",
        control: "text"
      },
      "cctile-item-subheadline-font-size": { 
        value: "24px", 
        description: "Content Card Item Subheadline Font Size",
        control: "text"
      },
      "cctile-item-subheadline-font-weight": { 
        value: "400", 
        description: "Content Card Item Subheadline Font Weight",
        control: "text"
      },
      "cctile-item-subheadline-line-height": { 
        value: "38.4px", 
        description: "Content Card Item Subheadline Line Height",
        control: "text"
      },
      "cctile-item-border-radius": { 
        value: "8px", 
        description: "Content Card Item Image Border Radius",
        control: "text"
      },
      "cctile-item-primary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Primary Button Font Weight",
        control: "text"
      },
      "cctile-item-primary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Primary Button Line Height",
        control: "text"
      },
      "cctile-item-primary-btn-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Primary Button Text Colour"
      },
      "cctile-item-primary-btn-bgcolor": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Background Colour"
      },
      "cctile-item-primary-btn-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Border Colour"
      },
      "cctile-item-primary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Hover Text Colour"
      },
      "cctile-item-primary-btn-hover-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Primary Button Hover Background Colour"
      },
      "cctile-item-primary-btn-hover-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Hover Border Colour"
      },
      "cctile-item-primary-btn-active-text-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Active Text Colour"
      },
      "cctile-item-primary-btn-active-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Primary Button Active Background Colour"
      },
      "cctile-item-primary-btn-active-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Active Border Colour"
      },
      "cctile-item-secondary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Secondary Button Font Weight",
        control: "text"
      },
      "cctile-item-secondary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Secondary Button Line Height",
        control: "text"
      },
     "cctile-item-secondary-btn-text-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Text Colour"
      },
      "cctile-item-secondary-btn-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Secondary Button Background Colour"
      },
      "cctile-item-secondary-btn-border-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Border Colour"
      },
      "cctile-item-secondary-btn-hover-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Secondary Button Hover Text Colour"
      },
      "cctile-item-secondary-btn-hover-bgcolor": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Hover Background Colour"
      },
      "cctile-item-secondary-btn-hover-border-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Hover Border Colour"
      },
      "cctile-item-secondary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Secondary Button Active Text Colour"
      },
      "cctile-item-secondary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Content Card Item Secondary Button Active Background Colour"
      },
      "cctile-item-secondary-btn-active-border-color": { 
        value: "#F5F5F6", 
        description: "Content Card Item Secondary Button Active Border Colour"
      },
      "cctile-item-secotertiaryndary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Tertiary Button Font Weight",
        control: "text"
      },
      "cctile-item-tertiary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Tertiary Button Line Height",
        control: "text"
      },
      "cctile-item-tertiary-btn-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Text Colour"
      },
      "cctile-item-tertiary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Hover Text Colour"
      },
      "cctile-item-tertiary-btn-hover-text-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Tertiary Button Hover Text Background Colour"
      },
      "cctile-item-tertiary-btn-active-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Active Text Colour"
      },
      "cctile-item-tertiary-btn-active-bgcolor": { 
        value: "#6267A1", 
        description: "Content Card Item Tertiary Button Active Background Colour"
      }
    }
  },
  args: {
    isMultiple: false
  },
  argTypes: {
    isMultiple: {
      description: 'Are multiple cards being displayed?',
      type: { 
        name: 'boolean',
        required: false
      },
      control: false,
      table: {}
    }
  }
}

const Template = (args) => {
  return (
    <>
      <ContentCardTileComponent>
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
      </ContentCardTileComponent>
      <ContentCardTileComponent>
        <ContentCardItem 
          image={<Image src="/images/contentCardImageThree.png" altText="Alternative text" />}
          title='Content Cards Title'
          titleTag="h3"
          subtitle='Card Subtitle'
          subtitleTag="h4"
          label="Label text"
          text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.</p>}
          imageAlign='right'
        >        
          <Button {...TertiaryButtonArgs.default.args} />
        </ContentCardItem>
      </ContentCardTileComponent>
      <ContentCardTileComponent>
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
      </ContentCardTileComponent>
      <ContentCardTileComponent>
        <ContentCardItem 
          image={<Image src="/images/contentCardImageFour.png" altText="Alternative text" />}
          title='Content Cards Title'
          titleTag="h3"
          subtitle='Card Subtitle'
          subtitleTag="h4"
          label="Label text"
          text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'</p>}
          imageAlign='left'
        >        
          <Button {...TertiaryButtonArgs.default.args} />
        </ContentCardItem>
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
          imageAlign='right'
        >        
          <Button {...TertiaryButtonArgs.default.args} />
        </ContentCardItem>
      </ContentCardTileComponent>
    </>
  )
}
export const ContentCardTile = Template.bind()
ContentCardTile.args = {
  isMultiple: false
}