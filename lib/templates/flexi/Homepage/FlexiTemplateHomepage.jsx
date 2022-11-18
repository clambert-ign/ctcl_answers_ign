// import React from "react";

// //components
// import GlobalNavigation from "../../globalNavigation/GlobalNavigation";
// import HeroHeader from "../../heroHeader/HeroHeader";
// import SectionTitle from "../../sectionTitle/SectionTitle";
// import Editorial from "../../editorial/Editorial";
// import Button from "../../button/Button";
// import ContentCard from "../../contentCard/ContentCard";
// import GlobalFooter from "../../globalFooter/GlobalFooter";
// import ToastBar from "../../toastBar/ToastBar";
// import windowSize from "../windowSize";
// import InlineHelp from "../../inlineHelp/InlineHelp";

// //images
// import KKILogoWhite from "../../assets/images/kki-logo-white.png";
// import YourLogoWhite from "../../assets/images/your-logo-white.png";
// import ContentCardImageBottom1 from "../../assets/images/content-image-3.png";
// import ContentCardImageBottom2 from "../../assets/images/content-image-2.png";
// import ContentCardImageBottom3 from "../../assets/images/content-image-1.png";
// import ContentCardImage from "../../assets/images/content-image-5.png";
// import contentCardImageThree from "../../assets/images/content-image-4.png";
// import contentCardImageFour from "../../assets/images/contentCardImageFour.png";
// import sideImage from "../../assets/images/Image space - optional.png";
// import editorialImageRight from "../../assets/images/full-bleed-right-desk.png";
// import EditorialBleedLeft from "../../assets/images/editorial-full-bleed-left.png";
// import EditorialImageMobile from "../../assets/images/editorial-image-mobile.png";

// //styles
// import global from "../../assets/styles/global.scss";
// import grid from "../../assets/grid.scss";
// import styles from "./FlexiTemplateHomepage.style.scss";

// const FlexiTemplateHomepage = (props) => {
//   const {
//     toastBarProps,
//     globalNavigationProps,
//     HeroHeaderProps,
//     contentCardProps,
//     sectionTitleProps,
//     sectionTitleCardProps,
//     sectionTitleBottomProps,
//     footerProps,
//     footerToastBarProps,
//   } = props;
//   const { height, width } = windowSize();
  
//   return (
//     <>
//       <div className={styles["flexi-template-level-0"]}>
//         <ToastBar
//           linkText={toastBarProps.toastBarLinkText}
//           text={toastBarProps.toastBarText}
//           linkURL={toastBarProps.toastBarLinkUrl}
//           selectIcon={toastBarProps.selectIcon}
//         />
//         <GlobalNavigation
//           {...globalNavigationProps}
//           displayYourLogo={true}
//           yourLogo={YourLogoWhite}
//           logo={KKILogoWhite}
//           color="purple"
//         />
//         <HeroHeader
//           {...HeroHeaderProps}
//           pageTitle="H1 Name of website "
//           sideImagePath={sideImage}
//           backgroundColour="#ffffff"
//         />
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-12">
//               <div className={styles["section-title"]}>
//                 <SectionTitle {...sectionTitleProps} />
//               </div>
//               <div className={grid["container"]}>
//                 <div className={grid["row"]}>
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={
//                         sectionTitleCardProps.contentCardDisplayImage
//                       }
//                       contentCardTitle={sectionTitleCardProps.contentCardTitle}
//                       contentCardSubtitle={
//                         sectionTitleCardProps.contentCardSubtitle
//                       }
//                       contentCardDescription={
//                         sectionTitleCardProps.contentCardDescription
//                       }
//                       contentCardImageAlign={
//                         sectionTitleCardProps.contentCardImageAlign
//                       }
//                       contentCardLinkType={
//                         sectionTitleCardProps.contentCardLinkType
//                       }
//                       contentCardLinkText={
//                         sectionTitleCardProps.contentCardLinkText
//                       }
//                       contentCardLinkIcon={
//                         sectionTitleCardProps.contentCardLinkIcon
//                       }
//                       contentCardLabel={sectionTitleCardProps.contentCardLabel}
//                       contentCardImageUrl={ContentCardImage}
//                       contentCardType="two-in-row"
//                     ></ContentCard>
//                   </div>
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={
//                         sectionTitleCardProps.contentCard2DisplayImage
//                       }
//                       contentCardTitle={sectionTitleCardProps.contentCard2Title}
//                       contentCardSubtitle={
//                         sectionTitleCardProps.contentCard2Subtitle
//                       }
//                       contentCardDescription={
//                         sectionTitleCardProps.contentCard2Description
//                       }
//                       contentCardImageAlign={
//                         sectionTitleCardProps.contentCard2ImageAlign
//                       }
//                       contentCardLinkType={
//                         sectionTitleCardProps.contentCard2LinkType
//                       }
//                       contentCardLinkText={
//                         sectionTitleCardProps.contentCard2LinkText
//                       }
//                       contentCardLinkIcon={
//                         sectionTitleCardProps.contentCard2LinkIcon
//                       }
//                       contentCardLabel={sectionTitleCardProps.contentCard2Label}
//                       contentCardImageUrl={contentCardImageThree}
//                       contentCardType="two-in-row"
//                     ></ContentCard>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles["flexi-background-homepage"]}>
//           <div className={styles["editorial-fullbleed"]}>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <Editorial
//                     title="H2 Editorial module title two column with image and a really bold large title "
//                     titleType="h2"
//                     caption="Body copy bold Label (Optional)"
//                     fullWidth={true}
//                   >
//                     <div className={styles["editorial-buttons"]}>
//                       <Button
//                         btnType="secondary"
//                         btnText="Secondary Button"
//                         btnLink="/"
//                       />
//                       <Button
//                         btnType="tertiary"
//                         btnText="Tertiary Button"
//                         btnLink="/"
//                       />
//                     </div>
//                   </Editorial>
//                 </div>
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12">
//                   <img
//                     src={EditorialImageMobile}
//                     altText="Editorial Image"
//                     className={styles["editorial-fullbleed-mobile"]}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={`${global["container-width-unset"]} container`}>
//             <div className="row">
//               <div className="col-12 col-sm-6">
//                 <Editorial>
//                   <p>
//                     Bodycopy Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et dolore
//                     magna aliqua.
//                   </p>
//                   <p>
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                     irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     cupidatat non proident, sunt in culpa qui officia deserunt
//                     mollit anim id est laborum.
//                   </p>
//                 </Editorial>
//               </div>
//               <div className="col-12 col-sm-6">
//                 <Editorial>
//                   <p>
//                     Bodycopy Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et dolore
//                     magna aliqua.
//                   </p>
//                   <p>
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                     irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     cupidatat non proident, sunt in culpa qui officia deserunt
//                     mollit anim id est laborum.
//                   </p>
//                 </Editorial>
//               </div>
//             </div>
//           </div>
//           <div className={styles["editorial-fullbleed-left"]}>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12 col-sm-6">
//                   <Editorial
//                     title="H3 Editorial module title two column with image"
//                     titleType="h3"
//                     fullWidth={true}
//                   >
//                     <p className={styles["editorial-large-paragragh"]}>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <br></br>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <InlineHelp
//                     linkTitle="Did you know?"
//                     selectIcon="Did you know"
//                     modalTitle="Did you know?"
//                     modalBackgroundColor="#6267A1"
//                     modalTextColor="#FFFFFF"
//                   >
//                     <h4>Editorial module title one column with image</h4>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                       Duis aute irure dolor in reprehenderit in voluptate velit
//                       esse cillum dolore eu fugiat nulla pariatur. Excepteur
//                       sint occaecat cupidatat non proident, sunt in culpa qui
//                       officia deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                       Duis aute irure dolor in reprehenderit in aliquip ex ea
//                       commodo consequat. Duis aute irure dolor in reprehenderit
//                       i aliquip ex ea commodo consequat. Duis aute irure dolor
//                       in reprehenderit in
//                     </p>
//                   </InlineHelp>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["editorial-image-caption"]}>
//                     Boldcopy bold Caption goes here
//                   </p>
//                 </div>
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12">
//                   <img
//                     src={EditorialImageMobile}
//                     className={styles["editorial-fullbleed-mobile"]}
//                     altText="Editorial Image"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <p className={styles["editorial-image-caption-mobile"]}>
//                     Boldcopy bold Caption goes here
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-12 col-md-8">
//               <div className={styles["section-title"]}>
//                 <SectionTitle {...sectionTitleBottomProps} />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               <div className={grid["container"]}>
//                 <div className={grid["row"]}>
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={
//                         sectionTitleCardProps.contentCardDisplayImage
//                       }
//                       contentCardTitle={contentCardProps.contentCardTitle}
//                       contentCardSubtitle={
//                         sectionTitleCardProps.contentCardSubtitle
//                       }
//                       contentCardDescription={
//                         sectionTitleCardProps.contentCardDescription
//                       }
//                       contentCardImageAlign={
//                         sectionTitleCardProps.contentCardImageAlign
//                       }
//                       contentCardLinkType={
//                         sectionTitleCardProps.contentCardLinkType
//                       }
//                       contentCardLinkText={
//                         sectionTitleCardProps.contentCardLinkText
//                       }
//                       contentCardLinkIcon={
//                         sectionTitleCardProps.contentCardLinkIcon
//                       }
//                       contentCardLabel={sectionTitleCardProps.contentCardLabel}
//                       contentCardImageUrl={ContentCardImageBottom1}
//                       contentCardType="three-in-row"
//                     ></ContentCard>
//                   </div>
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={
//                         sectionTitleCardProps.contentCard2DisplayImage
//                       }
//                       contentCardTitle={contentCardProps.contentCard2Title}
//                       contentCardSubtitle={
//                         sectionTitleCardProps.contentCard2Subtitle
//                       }
//                       contentCardDescription={
//                         sectionTitleCardProps.contentCard2Description
//                       }
//                       contentCardImageAlign={
//                         sectionTitleCardProps.contentCard2ImageAlign
//                       }
//                       contentCardLinkType={
//                         sectionTitleCardProps.contentCard2LinkType
//                       }
//                       contentCardLinkText={
//                         sectionTitleCardProps.contentCard2LinkText
//                       }
//                       contentCardLinkIcon={
//                         sectionTitleCardProps.contentCard2LinkIcon
//                       }
//                       contentCardLabel={sectionTitleCardProps.contentCard2Label}
//                       contentCardImageUrl={ContentCardImageBottom2}
//                       contentCardType="three-in-row"
//                     ></ContentCard>
//                   </div>
//                   {!(width > 767 && width < 1087) && (
//                     <div className={grid["col"]}>
//                       <ContentCard
//                         contentCardDisplayImage={
//                           sectionTitleCardProps.contentCard3DisplayImage
//                         }
//                         contentCardTitle={contentCardProps.contentCard3Title}
//                         contentCardSubtitle={
//                           sectionTitleCardProps.contentCard3Subtitle
//                         }
//                         contentCardDescription={
//                           sectionTitleCardProps.contentCard3Description
//                         }
//                         contentCardImageAlign={
//                           sectionTitleCardProps.contentCard3ImageAlign
//                         }
//                         contentCardLinkType={
//                           sectionTitleCardProps.contentCard3LinkType
//                         }
//                         contentCardLinkText={
//                           sectionTitleCardProps.contentCard3LinkText
//                         }
//                         contentCardImageUrl={ContentCardImageBottom3}
//                         contentCardLabel={
//                           sectionTitleCardProps.contentCard3Label
//                         }
//                         contentCardLinkIcon={
//                           sectionTitleCardProps.contentCard3LinkIcon
//                         }
//                         contentCardType="three-in-row"
//                       ></ContentCard>
//                     </div>
//                   )}
//                 </div>
//                 {width > 767 && width < 1087 && (
//                   <ContentCard
//                     contentCardDisplayImage={
//                       sectionTitleCardProps.contentCard3DisplayImage
//                     }
//                     contentCardTitle={contentCardProps.contentCard3Title}
//                     contentCardSubtitle={
//                       sectionTitleCardProps.contentCard3Subtitle
//                     }
//                     contentCardDescription={
//                       sectionTitleCardProps.contentCard3Description
//                     }
//                     contentCardImageAlign="Left"
//                     contentCardLinkType={
//                       sectionTitleCardProps.contentCard3LinkType
//                     }
//                     contentCardLinkText={
//                       sectionTitleCardProps.contentCard3LinkText
//                     }
//                     contentCardLabel={sectionTitleCardProps.contentCard3Label}
//                     contentCardLinkIcon={
//                       sectionTitleCardProps.contentCard3LinkIcon
//                     }
//                     contentCardImageUrl={contentCardImageFour}
//                   ></ContentCard>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles["flexi-footer"]}>
//           <ToastBar {...footerToastBarProps} />
//           <GlobalFooter {...footerProps} />
//         </div>
//       </div>
//     </>
//   );
// };
// export default FlexiTemplateHomepage;
