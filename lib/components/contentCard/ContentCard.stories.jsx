import ContentCardComponent from "./ContentCard";
import ContentCardItem from "./ContentCardItem";
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import Image from "@atoms/image/Image"

export default {
  title: 'Components/Editorial/Content Card',
  component: ContentCardComponent,
  parameters: {
    docs: {
      description: {
        component: 'Content Card components are used to feature snippets of content and links to further detail. For example featured site pages, articles, videos or podcasts.'
      }
    },
    cssprops: {
      "cc-bgcolor": { 
        value: "transparent", 
        description: "Content Card Background Colour"
      },
      "cc-border-radius": { 
        value: "8px", 
        description: "Content Card Border Radius",
        control: "text"
      },
      "cc-item-font-size": { 
        value: "16px", 
        description: "Content Card Item Font Size",
        control: "text"
      },
      "cc-item-font-weight": { 
        value: "200", 
        description: "Content Card Item Font Weight",
        control: "text"
      },
      "cc-item-line-height": { 
        value: "25.6px", 
        description: "Content Card Item Line Height",
        control: "text"
      },
      "cc-item-text-color": { 
        value: "#fff", 
        description: "Content Card Item Font Colour"
      },
      "cc-item-border-radius": { 
        value: "8px", 
        description: "Content Card Item Border Radius",
        control: "text"
      },
      "cc-item-bgcolor": { 
        value: "#6267A1", 
        description: "Content Card Item Background Colour"
      },
      "cc-item-label-font-size": { 
        value: "16px", 
        description: "Content Card Item Label Font Size",
        control: "text"
      },
      "cc-item-label-font-weight": { 
        value: "400", 
        description: "Content Card Item Label Font Weight",
        control: "text"
      },
      "cc-item-label-line-height": { 
        value: "25.6px", 
        description: "Content Card Item Label Line Height",
        control: "text"
      },
      "cc-item-headline-font-size": { 
        value: "28px", 
        description: "Content Card Item Headline Font Size",
        control: "text"
      },
      "cc-item-headline-font-weight": { 
        value: "600", 
        description: "Content Card Item Headline Font Weight",
        control: "text"
      },
      "cc-item-headline-line-height": { 
        value: "33.6px", 
        description: "Content Card Item Headline Line Height",
        control: "text"
      },
      "cc-item-subheadline-font-size": { 
        value: "24px", 
        description: "Content Card Item Subheadline Font Size",
        control: "text"
      },
      "cc-item-subheadline-font-weight": { 
        value: "400", 
        description: "Content Card Item Subheadline Font Weight",
        control: "text"
      },
      "cc-item-subheadline-line-height": { 
        value: "38.4px", 
        description: "Content Card Item Subheadline Line Height",
        control: "text"
      },
      "cc-item-1col-image-left-border-radius": { 
        value: "8px 8px 0 0", 
        description: "Content Card Item Left Image Border Radius",
        control: "text"
      },
      "cc-item-1col-image-right-border-radius": { 
        value: "0 8px 8px 0", 
        description: "Content Card Item Right Image Border Radius",
        control: "text"
      },
      "cc-item-1col-image-top-border-radius": { 
        value: "8px 8px 0 0", 
        description: "Content Card Item Top Image Border Radius",
        control: "text"
      },
      "cc-item-primary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Primary Button Font Weight",
        control: "text"
      },
      "cc-item-primary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Primary Button Line Height",
        control: "text"
      },
      "cc-item-primary-btn-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Primary Button Text Colour"
      },
      "cc-item-primary-btn-bgcolor": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Background Colour"
      },
      "cc-item-primary-btn-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Border Colour"
      },
      "cc-item-primary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Hover Text Colour"
      },
      "cc-item-primary-btn-hover-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Primary Button Hover Background Colour"
      },
      "cc-item-primary-btn-hover-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Hover Border Colour"
      },
      "cc-item-primary-btn-active-text-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Active Text Colour"
      },
      "cc-item-primary-btn-active-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Primary Button Active Background Colour"
      },
      "cc-item-primary-btn-active-border-color": { 
        value: "#fff", 
        description: "Content Card Item Primary Button Active Border Colour"
      },
      "cc-item-secondary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Secondary Button Font Weight",
        control: "text"
      },
      "cc-item-secondary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Secondary Button Line Height",
        control: "text"
      },
     "cc-item-secondary-btn-text-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Text Colour"
      },
      "cc-item-secondary-btn-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Secondary Button Background Colour"
      },
      "cc-item-secondary-btn-border-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Border Colour"
      },
      "cc-item-secondary-btn-hover-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Secondary Button Hover Text Colour"
      },
      "cc-item-secondary-btn-hover-bgcolor": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Hover Background Colour"
      },
      "cc-item-secondary-btn-hover-border-color": { 
        value: "#fff", 
        description: "Content Card Item Secondary Button Hover Border Colour"
      },
      "cc-item-secondary-btn-active-text-color": { 
        value: "#6267A1", 
        description: "Content Card Item Secondary Button Active Text Colour"
      },
      "cc-item-secondary-btn-active-bgcolor": { 
        value: "#F5F5F6", 
        description: "Content Card Item Secondary Button Active Background Colour"
      },
      "cc-item-secondary-btn-active-border-color": { 
        value: "#F5F5F6", 
        description: "Content Card Item Secondary Button Active Border Colour"
      },
      "cc-item-secotertiaryndary-btn-font-weight": { 
        value: "700", 
        description: "Content Card Item Tertiary Button Font Weight",
        control: "text"
      },
      "cc-item-tertiary-btn-line-height": { 
        value: "19.2px", 
        description: "Content Card Item Tertiary Button Line Height",
        control: "text"
      },
      "cc-item-tertiary-btn-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Text Colour"
      },
      "cc-item-tertiary-btn-hover-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Hover Text Colour"
      },
      "cc-item-tertiary-btn-hover-text-bgcolor": { 
        value: "transparent", 
        description: "Content Card Item Tertiary Button Hover Text Background Colour"
      },
      "cc-item-tertiary-btn-active-text-color": { 
        value: "#fff", 
        description: "Content Card Item Tertiary Button Active Text Colour"
      },
      "cc-item-tertiary-btn-active-bgcolor": { 
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
      <ContentCardComponent>
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
      </ContentCardComponent>
      <ContentCardComponent>
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
          <Button {...PrimaryButtonArgs.Default.args} />
          <Button {...SecondaryButtonArgs.Default.args} />
        </ContentCardItem>
      </ContentCardComponent>
      <ContentCardComponent>
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
          <Button {...SecondaryButtonArgs.Default.args} />
        </ContentCardItem>
      </ContentCardComponent>
      <ContentCardComponent>
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
          <Button {...PrimaryButtonArgs.Default.args} />
          <Button {...SecondaryButtonArgs.Default.args} />
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
          <Button {...PrimaryButtonArgs.Default.args} />
          <Button {...SecondaryButtonArgs.Default.args} />
          <Button {...TertiaryButtonArgs.default.args} />
        </ContentCardItem>
      </ContentCardComponent>
    </>
  )
}
export const ContentCard = Template.bind()
ContentCard.args = {
  isMultiple: false
}