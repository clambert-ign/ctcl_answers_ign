// import FlexiTemplateHomepage from "./Homepage/FlexiTemplateHomepage";
// import FlexiTemplateLevel1 from "./Level 1/FlexiTemplateLevel1";
// import FlexiTemplateLevel2 from "./Level 2/FlexiTemplateLevel2";
// import DesktopImage from "../assets/images/desktop-fullsize.png";
// import callOutQuotePath from "../assets/images/quoteImg.png";
// import CarouselImg1 from "../assets/images/Carousel-1.png";
// import CarouselImg2 from "../assets/images/Carousel-2.png";

// export default {
//   title: "Templates/FlexiTemplate",
//   component: FlexiTemplateHomepage,
//   parameters: {
//     docs: {
//       description: {
//         component: "FlexiTemplateHomepage",
//       },
//     },
//     layout: "fullscreen",
//   },
//   argTypes: {},
// };
// const GlobalNavigationProps = {
//   data: {
//     menuItems: [
//       {
//         header: "Level one",
//         values: [
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//         ],
//       },
//       {
//         header: "Level one",
//         values: [
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//           { linkUrl: "/", linkText: "Level 2" },
//         ],
//       },
//       {
//         header: "Level one",
//         values: [
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 2" },
//         ],
//       },
//       {
//         header: "Level one",
//         values: [
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 3" },
//           { linkUrl: "/", linkText: "Level 2" },
//         ],
//       },
//     ],
//   },
// };
// const tabsProps = {
//   tabID1: "js-tab-six",
//   tabPanel1Title: "Accordion Panel 1",
//   tabPanel2Title: "Accordion Panel 2",
//   tabPanel3Title: "Accordion Panel 3",
//   tabPanel4Title: "Accordion Panel 4",
//   tabsNumber: 2,
// };
// const homepageHeroHeaderProps = {
//   pageTitle: "Name of website",
//   headline: "H2 Around 145,000 people live with (Disease Y) in the UK",
//   description:
//     "This website is intended to help people understand (Disease Y) and improve awareness of the condition.",
//   sideImage: true,
//   backToLevelOneLink: "",
//   showButtons: true,
//   primaryButtonText: "Press this button",
//   primaryButtonURL: "#",
//   secondaryButtonText: "",
//   secondaryButtonURL: "#",
//   tertiaryLinkText: "",
//   tertiaryLinkURL: "",
//   backgroundColour: "#6267a1",
//   backgroundVideo: false,
//   backgroundImage: "Shape",
// };
// const HeroHeaderProps = {
//   pageTitle: "Page title",
//   headline: "H2 Around 145,000 people live with (Disease Y) in the UK",
//   description:
//     "This website is intended to help people understand (Disease Y) and improve awareness of the condition.",
//   sideImage: true,
//   backToLevelOneLink: "",
//   showButtons: false,
//   primaryButtonText: "Primary Button",
//   primaryButtonURL: "#",
//   secondaryButtonText: "Secondary Button",
//   secondaryButtonURL: "#",
//   tertiaryLinkText: "",
//   tertiaryLinkURL: "",
//   backgroundColour: "#6267a1",
//   backgroundVideo: false,
//   backgroundImage: "Shape",
// };
// const StandardHeaderProps = {
//   pageTitle: "H1 Page title (invisible on homepage)",
//   headline: "H2 Around 145,000 people live with (Disease Y)",
//   description:
//     "",
//   backgroundImage: "Image Shape",
//   backToLevel1Link: "[Name of level 1 page]",
// };
// const VideoProps = {
//   mediaTranscript: "/video/video_sample.txt",
//   mediaSubtitle: "/video/video_sample.eng.vtt",
//   mediaSrc: "/video/video_sample.mp4",
//   mediaSrcType: "video/mp4",
// };
// const tabsContentProps = {
//   col1Title: "H3 Editorial module title two column with image",
//   col1Caption: "",
//   col1BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   col1MediaDisplay: true,
//   col1MediaTitle: "",
//   col1MediaSelect: "Video",
//   mediaAlign: "Right",
//   col1MediaCaption: "Video caption lorem ipsum dolor sit amet",
//   col1Btn1DisplayType: "Secondary",
//   col1Btn1Text: "Secondary Button",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1Icon: "None",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "Tertiary",
//   col1Btn2Text: "Tertiary Button",
//   col1Btn2Icon: "None",
//   col1Btn2AlignIcon: "Right",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: false,
//   col2MediaTitle: "",
//   col2MediaSelect: "Video",
//   col2MediaCaption: "Video caption lorem ipsum dolor sit amet",
// };
// const imageProps = {
//   url: DesktopImage,
//   altText: "Image description",
//   standardImg: true,
//   corners: "Rounded",
//   position: "Full Bleed",
//   size: "Large",
// };
// const CarouselImageProps1 = {
//   url: CarouselImg1,
//   altText: "Image description",
//   standardImg: true,
//   corners: "Rounded",
//   position: "Full Bleed",
//   size: "Large",
// };
// const CarouselImageProps2 = {
//   url: CarouselImg2,
//   altText: "Image description",
//   standardImg: true,
//   corners: "Rounded",
//   position: "Full Bleed",
//   size: "Large",
// };
// const homepageEditorialTopProps = {
//   col1Title:
//     "H2 Editorial module title two column with image and a really bold large title ",
//   col1Caption: "Body copy bold Label (Optional)",
//   col1BodyText: "",
//   col1MediaDisplay: false,
//   col1MediaTitle: "",
//   col1MediaSelect: "Video",
//   mediaAlign: "Left",
//   col1MediaCaption: "Video caption lorem ipsum dolor sit amet",
//   col1Btn1DisplayType: "Secondary",
//   col1Btn1Text: "Secondary Button",
//   col1Btn1AlignIcon: "",
//   col1Btn1Icon: "none",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "Tertiary",
//   col1Btn2Text: "Tertiary Button",
//   col1Btn2Icon: "none",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: true,
//   col2MediaTitle: "",
//   col2MediaSelect: "Image",
//   col2MediaCaption: "",
// };
// const homepageEditorial2Props = {
//   col1Title: "",
//   col1Caption: "",
//   col1BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col2BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "Media Title",
//   col1MediaSelect: "Audio",
//   mediaAlign: "Left",
//   col1MediaCaption:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit",
//   col1Btn1DisplayType: "None",
//   col1Btn1Text: "Button",
//   col1Btn1Icon: "None",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Button",
//   col1Btn2Icon: "None",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: false,
//   col2MediaTitle: "",
//   col2MediaSelect: "",
//   col2MediaCaption: "",
// };
// const homepageEditorial3Props = {
//   col1Title: "H3 Editorial module title two column with image ",
//   col1Caption: "",
//   col1BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "",
//   col1MediaSelect: "Video",
//   mediaAlign: "Right",
//   col1MediaCaption: "Video caption lorem ipsum dolor sit amet",
//   col1Btn1DisplayType: "Tertiary",
//   col1Btn1Text: "Did you know?",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1Icon: "download",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Tertiary Button",
//   col1Btn2Icon: "none",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: true,
//   col2MediaTitle: "",
//   col2MediaSelect: "Image",
//   col2MediaCaption: "Boldcopy bold Caption goes here",
// };
// const imageEditorialProps = {
//   col1Title:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col1Caption: "H3 Editorial module title two column with image",
//   col1BodyText:
//     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "",
//   col1MediaSelect: "Video",
//   mediaAlign: "Left",
//   col1MediaCaption: "Video caption lorem ipsum dolor sit amet",
//   col1Btn1DisplayType: "Tertiary",
//   col1Btn1Text: "What is Dihydrocodeine?",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1Icon: "download",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Tertiary Button",
//   col1Btn2Icon: "none",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: true,
//   col2MediaTitle: "",
//   col2MediaSelect: "CallOutQuote",
//   col2MediaCaption: "Video caption lorem ipsum dolor sit amet",
// };
// const callOutQuoteProps = {
//   quoteText:
//     "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl metus, rutrum at lacus pellentesque, pulvinar rhoncus nisi.",
//   authorImg: true,
//   srcImgAuthor: callOutQuotePath,
//   authorName: "Jonathan Smith",
//   authorRole: "Lead Scientist at ABC",
// };
// const contentCardProps = {
//   contentCardDisplayImage: true,
//   contentCardTitle: "Content cards title",
//   contentCardSubtitle: "",
//   contentCardLabel: "",
//   contentCardDescription:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//   contentCardLinkType: "None",
//   contentCardLinkText: "",
//   contentCardImageAlign: "vertical",
//   contentCard2LinkIcon: "none",
//   contentCard2DisplayImage: true,
//   contentCard2Title: "Content cards title",
//   contentCard2Subtitle: "",
//   contentCard2Label: "",
//   contentCard2Description:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//   contentCard2ImageAlign: "vertical",
//   contentCard2LinkType: "None",
//   contentCard2LinkText: "",
//   contentCard2LinkIcon: "None",
//   contentCard3Title: "Content cards title",
//   contentCard3Subtitle: "",
//   contentCard3Label: "",
//   contentCard3Description:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//   contentCard3LinkType: "None",
//   contentCard3LinkText: "",
//   contentCard3LinkIcon: "None",
//   contentCard3DisplayImage: true,
//   contentCard3ImageAlign: "vertical",
// };
// const editorialTextProps = {
//   col1Title: "Editorial module title two column ",
//   col1Caption: "",
//   col1BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col2BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "Media Title",
//   col1MediaSelect: "Audio",
//   mediaAlign: "Left",
//   col1MediaCaption:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit",
//   col1Btn1DisplayType: "None",
//   col1Btn1Text: "Button",
//   col1Btn1Icon: "None",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Button",
//   col1Btn2Icon: "None",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: false,
//   col2MediaTitle: "",
//   col2MediaSelect: "",
//   col2MediaCaption: "",
// };
// const sectionTitleProps = {
//   headingTag: "h3",
//   headerText: "H3 Section title",
//   subText:
//     "Lead Bodycopy Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//   align: "left",
// };
// const level2SectionTitleProps = {
//   headingTag: "h3",
//   headerText: "H3 Section title",
//   subText:
//     "Leade bosycopyIntro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//   align: "left",
// };
// const sectionTitleBottomProps = {
//   headingTag: "h2",
//   headerText: "H2 Section title",
//   subText:
//     "Leade bosycopyIntro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//   align: "left",
// };
// const homepageSectionTitleProps = {
//   headingTag: "h3",
//   headerText: "H3 Section title",
//   subText:
//     "Leade bosycopyIntro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//   align: "center",
// };
// const editorialAudioProps = {
//   col1Title: "",
//   col1Caption: "",
//   col1BodyText: "",
//   col1MediaDisplay: true,
//   col1MediaTitle: "Audio title Lorem ipsum dolor sit amet",
//   col1MediaSelect: "Audio",
//   mediaAlign: "Left",
//   col1MediaCaption:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit",
//   col1Btn1DisplayType: "None",
//   col1Btn1Text: "Button",
//   col1Btn1Icon: "None",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Button",
//   col1Btn2Icon: "None",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
// };
// const sectionTitleCardProps = {
//   contentCardDisplayImage: true,
//   contentCardTitle: "H5 Content cards title",
//   contentCardSubtitle: "",
//   contentCardLabel: "",
//   contentCardDescription: "",
//   contentCardLinkType: "tertiary",
//   contentCardLinkText: "Tertiary Button",
//   contentCardImageAlign: "vertical",
//   contentCard2LinkIcon: "None",
//   contentCard2DisplayImage: true,
//   contentCard2Title: "H5 Content cards title",
//   contentCard2Subtitle: "",
//   contentCard2Label: "",
//   contentCard2Description: "",
//   contentCard2ImageAlign: "vertical",
//   contentCard2LinkType: "tertiary",
//   contentCard2LinkText: "Tertiary Button",
//   contentCard2LinkIcon: "None",
//   contentCard3Title: "H5 Content cards title",
//   contentCard3Subtitle: "",
//   contentCard3Label: "",
//   contentCard3Description: "",
//   contentCard3LinkType: "tertiary",
//   contentCard3LinkText: "Tertiary Button",
//   contentCard3LinkIcon: "None",
//   contentCard3DisplayImage: true,
//   contentCard3ImageAlign: "vertical",
// };
// const footerProps = {
//   menuItems: {
//     values: [
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 0 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 4 },
//     ],
//   },
//   toastBarText: "",
//   toastBarLinkText: "",
//   toastBarLinkUrl: "",
//   complianceCode: "KKI/INT/IST/0125",
//   publishedDate: "August 2021",
//   countrySelector: "United Kingdom",
//   countryText: "Country / Region:",
// };
// const footerToastBarProps = {
//   text: "",
//   linkText: "Report an adverse event here",
//   linkURL: "https://www.google.com/",
//   selectIcon: "externalLink",
//   isExternal: false,
//   alertMessage: "",
//   alignText: "left",
// };
// const editorialTextOnlyProps = {
//   title: "Editorial Module Title",
//   caption: "",
//   col1Title: "Editorial Module Title",
//   col1Caption: "",
//   col1BodyText:
//     "abcdefghijklmnpopqrstuvwxyzabcdefghijklmnpopqrstuvwxyzabcdefghijklmnpUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "",
//   col1MediaSelect: "None",
//   mediaAlign: "Left",
//   col1MediaCaption: "Test",
//   col1Btn1DisplayType: "None",
//   col1Btn1Text: "Button",
//   col1Btn1DisplayIcon: false,
//   col1Btn1Icon: "None",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Button",
//   col1Btn2DisplayIcon: false,
//   col1Btn2Icon: "None",
//   col1Btn2Align: "Left",
//   col1Btn2IsExternal: false,
// };
// const editorialTwoTextProps = {
//   col1Title: "Editorial Module Title",
//   col1Caption: "Caption (optional)",
//   col1BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col2BodyText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   col1MediaDisplay: false,
//   col1MediaTitle: "Media Title",
//   col1MediaSelect: "Audio",
//   mediaAlign: "Left",
//   col1MediaCaption:
//     "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor, adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit  adipi scing Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consect etur adipi scing elit",
//   col1Btn1DisplayType: "Tertiary",
//   col1Btn1Text: "Helpful advice",
//   col1Btn1Icon: "download",
//   col1Btn1AlignIcon: "Left",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Button",
//   col1Btn2Icon: "None",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: false,
//   col2MediaTitle: "",
//   col2MediaSelect: "",
//   col2MediaCaption: "",
// };
// const editorialTextAndImage = {
//   col1Title:
//     "H2 Editorial module title two column with image and a really bold large title ",
//   col1Caption: "",
//   col1BodyText: "",
//   col1MediaDisplay: false,
//   col1MediaTitle: "",
//   col1MediaSelect: "Video",
//   mediaAlign: "Left",
//   col1MediaCaption: "Video caption lorem ipsum dolor sit amet",
//   col1Btn1DisplayType: "Secondary",
//   col1Btn1Text: "Secondary Button",
//   col1Btn1AlignIcon: "",
//   col1Btn1Icon: "none",
//   col1Btn1IsExternal: false,
//   col1Btn2DisplayType: "None",
//   col1Btn2Text: "Tertiary Button",
//   col1Btn2Icon: "none",
//   col1Btn2AlignIcon: "Left",
//   col1Btn2IsExternal: false,
//   col2MediaDisplay: true,
//   col2MediaTitle: "",
//   col2MediaSelect: "Image",
//   col2MediaCaption: "",
// };
// const accordionProps = {
//   accordionType: "Controlled",
//   accordiontitle: "Accordion title",
//   accordionPanel1title: "Accordion title",
//   accordionPanel1IconType: "Globe",
//   accordionPanel1Icon: true,
//   accordionPanel2title: "Accordion title",
//   accordionPanel2Icon: true,
//   accordionPanel2IconType: "Globe",
//   accordionPanel3title: "Accordion title",
//   accordionPanel3Icon: true,
//   accordionPanel3IconType: "Globe",
//   accordionPanel4title: "Accordion title",
//   accordionPanel4Icon: true,
//   accordionPanel4IconType: "Globe",
//   accordionPanel5title: "Accordion title",
//   accordionPanel5Icon: true,
//   accordionPanel5IconType: "Globe",
// };
// const tableProps = {
//   tableTitle: "Table title",
//   tableIntroText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
//   tableEnableAxisXLabel: true,
//   tableAxisXLabel: "x-axis label",
//   tableEnableAxisYLabel: true,
//   tableAxisYLabel: "y-axis",
//   tableShowColumnLabel: true,
//   tableShowRowLabel: true,
//   tableAxisXFixed: false,
//   tableAxisYFixed: false,
// };
// const toastBarProps = {
//   toastBarLinkText: "Visit our Healthcare Professional site",
//   toastBarLinkUrl: "https://www.google.com/",
//   toastBarText:
//     "This website is for the general public. Are you a Healthcare Professional?",
//   selectIcon: "externalLink",
// };
// const FlexiTemplateLvl0 = (args) => {
//   const title = args;

//   return (
//     <FlexiTemplateHomepage
//       toastBarProps={toastBarProps}
//       globalNavigationProps={GlobalNavigationProps}
//       HeroHeaderProps={homepageHeroHeaderProps}
//       tabsProps={tabsProps}
//       videoProps={VideoProps}
//       contentCardProps={contentCardProps}
//       imageEditorialProps={imageEditorialProps}
//       homepageEditorialTopProps={homepageEditorialTopProps}
//       homepageEditorial2Props={homepageEditorial2Props}
//       homepageEditorial3Props={homepageEditorial3Props}
//       sectionTitleProps={homepageSectionTitleProps}
//       sectionTitleCardProps={sectionTitleCardProps}
//       sectionTitleBottomProps={sectionTitleBottomProps}
//       footerProps={footerProps}
//       footerToastBarProps={footerToastBarProps}
//     />
//   );
// };
// const FlexiTemplateLvl1 = (args) => {
//   const title = args;

//   return (
//     <FlexiTemplateLevel1
//       toastBarProps={toastBarProps}
//       globalNavigationProps={GlobalNavigationProps}
//       HeroHeaderProps={HeroHeaderProps}
//       tabsProps={tabsProps}
//       tabsContentProps={tabsContentProps}
//       videoProps={VideoProps}
//       imageProps={imageProps}
//       callOutQuoteProps={callOutQuoteProps}
//       imageEditorialProps={imageEditorialProps}
//       contentCardProps={contentCardProps}
//       editorialTextProps={editorialTextProps}
//       editorialAudioProps={editorialAudioProps}
//       sectionTitleProps={sectionTitleProps}
//       sectionTitleCardProps={sectionTitleCardProps}
//       footerProps={footerProps}
//       footerToastBarProps={footerToastBarProps}
//     />
//   );
// };
// const FlexiTemplateLvl2 = (args) => {
//   const title = args;

//   return (
//     <FlexiTemplateLevel2
//       toastBarProps={toastBarProps}
//       globalNavigationProps={GlobalNavigationProps}
//       standardHeaderProps={StandardHeaderProps}
//       editorialTextProps={editorialTextOnlyProps}
//       footerProps={footerProps}
//       level2SectionTitleProps={level2SectionTitleProps}
//       footerToastBarProps={footerToastBarProps}
//       imageProps={imageProps}
//       carouselImageProps1={CarouselImageProps1}
//       carouselImageProps2={CarouselImageProps2}
//       homepageEditorialTopProps={homepageEditorialTopProps}
//       editorialTwoTextProps={editorialTwoTextProps}
//       editorialTextAndImage={editorialTextAndImage}
//       accordionProps={accordionProps}
//       tableProps={tableProps}
//     />
//   );
// };
// export const Level0 = FlexiTemplateLvl0.bind({});
// export const Level1 = FlexiTemplateLvl1.bind({});
// export const Level2 = FlexiTemplateLvl2.bind({});
