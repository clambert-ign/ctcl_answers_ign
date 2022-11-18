// //libraries
// import React from "react";
// import { Slide, Slider } from "pure-react-carousel";

// //components
// import GlobalNavigation from "../../globalNavigation/GlobalNavigation";
// import StandardHeader from "../../standardHeader/StandardHeader";
// import Editorial from "../../editorial/Editorial";
// import GlobalFooter from "../../globalFooter/GlobalFooter";
// import Carousel from "../../carousel/Carousel";
// import Image from "../../image/Image";
// import Divider from "../../divider/Divider";
// import ToastBar from "../../toastBar/ToastBar";
// //import AccordionMenu from "../../accordion/AccordionMenu";
// //import AccordionPanel from "../../accordion/AccordionPanel";
// import Table from "../../table/Table";
// import InlineHelp from "../../inlineHelp/InlineHelp";

// //images
// import SectionTitle from "../../sectionTitle/SectionTitle";
// import KKILogoWhite from "../../assets/images/kki-logo-white.png";
// import YourLogoWhite from "../../assets/images/your-logo-white.png";
// import EditorialImageMobile from "../../assets/images/editorial-image-mobile.png";

// //helpers
// import useWindowSize from "../../carousel/WindowResize";

// //styles
// import global from "../../assets/styles/global.scss";
// import styles from "./FlexiTemplateLevel2.style.scss";
// import "pure-react-carousel/dist/react-carousel.es.css";

// const FlexiTemplateLevel2 = (props) => {
//   const {
//     toastBarProps,
//     globalNavigationProps,
//     standardHeaderProps,
//     editorialTextProps,
//     editorialTwoTextProps,
//     level2SectionTitleProps,
//     accordionProps,
//     carouselImageProps1,
//     carouselImageProps2,
//     tableProps,
//     footerProps,
//     footerToastBarProps,
//   } = props;
//   const accordionArgs = {
//     accordionId: "a001",
//     accordionType: accordionProps.accordionType,
//     accordiontitle: accordionProps.accordiontitle,
//   };
//   const CalculateSlides = (type) => {
//     /* type can be : 
// 		oneItem - carousel contains one item only on any screen size
// 		twoItem - carousel contain two items except on mobile
// 		threeItem -  carousel contains one item on mobile, two item on tablet and three item on larger screen
//  */
//     const size = useWindowSize();
//     const width = size.width;

//     let numberOfSlides;

//     if (type === "twoItem" && width < 832) {
//       numberOfSlides = 1;
//     } else if (type === "twoItem" && width > 831) {
//       numberOfSlides = 2;
//     } else if (type === "threeItem" && width < 832) {
//       numberOfSlides = 1;
//     } else if (type === "threeItem" && width > 831 && width < 1088) {
//       numberOfSlides = 2;
//     } else if (type === "threeItem" && width > 1087) {
//       numberOfSlides = 3;
//     } else {
//       numberOfSlides = 1;
//     }

//     return numberOfSlides;
//   };
//   const numberOfSlides = 5;
//   let numberSlideToShow = CalculateSlides("twoItem");
//   const CarouselArgs = {
//     carouselTitle: "Carousel Title",
//     carouselSlidesNo: numberOfSlides,
//     carouselSlideNoSlideToShow: numberSlideToShow,
//   };
//   const rowLabels = ["Row label", "Row label"];

//   return (
//     <div className={styles["flexi-template-level-2"]}>
//       <ToastBar
//         linkText={toastBarProps.toastBarLinkText}
//         text={toastBarProps.toastBarText}
//         linkURL={toastBarProps.toastBarLinkUrl}
//         selectIcon={toastBarProps.selectIcon}
//       />
//       <GlobalNavigation
//         {...globalNavigationProps}
//         displayYourLogo={true}
//         yourLogo={YourLogoWhite}
//         color="purple"
//         logo={KKILogoWhite}
//       />
//       <StandardHeader {...standardHeaderProps} level={2} />
//       <div className={styles["page-section"]}>
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-10 col-xxl-8">
//               <Editorial
//                 {...editorialTextProps}
//                 title="Editorial module title one column"
//                 fullWidth={true}
//                 titleType="h3"
//               >
//                 <p>
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in reprehenderit in voluptate velit esse cillum
//                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt
//                   mollit anim id est laborum.
//                 </p>
//                 <br></br>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//                 <p>
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in reprehenderit in voluptate velit esse cillum
//                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt
//                   mollit anim id est laborum.
//                 </p>
//               </Editorial>
//             </div>
//           </div>
//         </div>
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-12 col-md-12 col-sm-12">
//               <Carousel {...CarouselArgs}>
//                 <Slider aria-label="Slider video" role="option">
//                   <Slide index={0}>
//                     <Image
//                       {...carouselImageProps2}
//                       caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                     />
//                   </Slide>
//                   <Slide index={1}>
//                     <Image
//                       {...carouselImageProps1}
//                       caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                     />
//                   </Slide>
//                   <Slide index={2}>
//                     <Image
//                       {...carouselImageProps1}
//                       caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                     />
//                   </Slide>
//                   <Slide index={3}>
//                     <Image
//                       {...carouselImageProps2}
//                       caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                     />
//                   </Slide>
//                   <Slide index={4}>
//                     <Image
//                       {...carouselImageProps1}
//                       caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                     />
//                   </Slide>
//                 </Slider>
//               </Carousel>
//             </div>
//           </div>
//         </div>
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-12">
//               <Divider animate={true} />
//             </div>
//             <div className="col-sm-12 col-md-12 col-lg-10 col-xxl-8">
//               <Editorial
//                 {...editorialTextProps}
//                 titleType="h2"
//                 title="H2 Editorial module title two column with image and a really bold large title"
//                 fullWidth={true}
                
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles["image-wrapper"]}>
//           <div className={`${global["container-width-unset"]} container`}>
//             <div className="row">
//               <div className="col-12">
//                 <Divider animate={true} />
//                 <Editorial
//                   {...editorialTwoTextProps}
//                   title="Editorial module title two column"
//                   type="two-column"
//                   titleType="h3"
//                   caption="Caption (Optional)"
//                 >
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor
//                     <br /> incididunt ut labore et dolore magna aliqua.
//                     <br /> Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.
//                   </p>
//                   <br></br>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor
//                     <br /> incididunt ut labore et dolore magna aliqua.
//                     <br /> Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.
//                   </p>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor
//                     <br /> incididunt ut labore et dolore magna aliqua.
//                     <br /> Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.
//                   </p>
//                   <br></br>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor <br />
//                     incididunt ut labore et dolore magna aliqua.
//                     <br /> Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.
//                   </p>
//                 </Editorial>
//               </div>
//               <div className="col-12">
//                 <InlineHelp
//                   linkTitle="Helpful advice"
//                   selectIcon="Helpful advice"
//                   modalTitle="Helpful advice"
//                   modalBackgroundColor="#6267A1"
//                   modalTextColor="#FFFFFF"
//                 >
//                   <h4>Editorial module title one column with image</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.
//                   </p>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in aliquip ex ea
//                     commodo consequat. Duis aute irure dolor in reprehenderit i
//                     aliquip ex ea commodo consequat. Duis aute irure dolor in
//                     reprehenderit in
//                   </p>
//                 </InlineHelp>
//               </div>
//             </div>
//           </div>
//           <div className={styles["editorial-fullbleed-left"]}>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12 col-sm-6">
//                   <Editorial
//                     title="H4 Editorial module title two column with image"
//                     titleType="h3"
//                     fullWidth={true}
//                   >
//                     <p className={styles["editorial-large-paragragh"]}>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                 </div>
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12">
//                   <img
//                     src={EditorialImageMobile}
//                     className={styles["editorial-fullbleed-mobile"]}
//                     altText="Editorial Image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles["editorial-fullbleed-left"]}>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12 col-sm-6">
//                   <Editorial
//                     title="Editorial module title two column with image"
//                     titleType="h4"
//                     fullWidth={true}
//                   >
//                     <p className={styles["editorial-large-paragragh"]}>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                 </div>
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12">
//                   <img
//                     src={EditorialImageMobile}
//                     className={styles["editorial-fullbleed-mobile"]}
//                     altText="Editorial Image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles["editorial-fullbleed-left"]}>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12 col-sm-6">
//                   <Editorial
//                     title="H4 Editorial module title two column with image"
//                     titleType="h4"
//                     fullWidth={true}
//                   >
//                     <p className={styles["editorial-large-paragragh"]}>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                 </div>
//                 <div className="col-12 col-sm-6"></div>
//                 <div className="col-12">
//                   <img
//                     src={EditorialImageMobile}
//                     className={styles["editorial-fullbleed-mobile"]}
//                     altText="Editorial Image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${styles["page-section"]} ${styles["page-section--accordion"]}`}
//       >
//         <div className={`${global["container-width-unset"]} container`}>
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-8 col-xxl-6">
//               <SectionTitle {...level2SectionTitleProps} />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               {/* <AccordionMenu {...accordionArgs}>
//                 <AccordionPanel
//                   title={accordionProps.accordionPanel1title}
//                   icon="Globe"
//                 >
//                   <Editorial
//                     {...editorialTextProps}
//                     title="Editorial module title two column "
//                     fullWidth={true}
//                     titleType="h4"
//                     type="two-column"
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <div className={styles["table-wrapper"]}>
//                     <Table
//                       xAxisLabel="X axis label"
//                       yAxisLabel="Y axis label"
//                       rowLabels={rowLabels}
//                       columnLabels={true}
//                     >
//                       <table cellPadding={16} cellSpacing={0}>
//                         <thead>
//                           <tr>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </Table>
//                   </div>
//                 </AccordionPanel>
//                 <AccordionPanel
//                   title={accordionProps.accordionPanel1title}
//                   icon="Globe"
//                 >
//                   <Editorial
//                     {...editorialTextProps}
//                     title="Editorial module title two column "
//                     fullWidth={true}
//                     titleType="h4"
//                     type="two-column"
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <div className={styles["table-wrapper"]}>
//                     <Table
//                       xAxisLabel="X axis label"
//                       yAxisLabel="Y axis label"
//                       rowLabels={rowLabels}
//                       columnLabels={true}
//                     >
//                       <table cellPadding={16} cellSpacing={0}>
//                         <thead>
//                           <tr>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </Table>
//                   </div>
//                 </AccordionPanel>
//                 <AccordionPanel
//                   title={accordionProps.accordionPanel1title}
//                   icon="Globe"
//                 >
//                   <Editorial
//                     {...editorialTextProps}
//                     title="Editorial module title two column "
//                     fullWidth={true}
//                     titleType="h4"
//                     type="two-column"
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <div className={styles["table-wrapper"]}>
//                     <Table
//                       xAxisLabel="X axis label"
//                       yAxisLabel="Y axis label"
//                       rowLabels={rowLabels}
//                       columnLabels={true}
//                     >
//                       <table cellPadding={16} cellSpacing={0}>
//                         <thead>
//                           <tr>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </Table>
//                   </div>
//                 </AccordionPanel>
//                 <AccordionPanel
//                   title={accordionProps.accordionPanel1title}
//                   icon="Globe"
//                 >
//                   <Editorial
//                     {...editorialTextProps}
//                     title="Editorial module title two column "
//                     fullWidth={true}
//                     titleType="h4"
//                     type="two-column"
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <div className={styles["table-wrapper"]}>
//                     <Table
//                       xAxisLabel="X axis label"
//                       yAxisLabel="Y axis label"
//                       rowLabels={rowLabels}
//                       columnLabels={true}
//                     >
//                       <table cellPadding={16} cellSpacing={0}>
//                         <thead>
//                           <tr>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </Table>
//                   </div>
//                 </AccordionPanel>
//                 <AccordionPanel
//                   title={accordionProps.accordionPanel1title}
//                   icon="Globe"
//                 >
//                   <Editorial
//                     {...editorialTextProps}
//                     title="Editorial module title two column "
//                     fullWidth={true}
//                     titleType="h4"
//                     type="two-column"
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <p>
//                       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                       irure dolor in reprehenderit in voluptate velit esse
//                       cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </Editorial>
//                   <div className={styles["table-wrapper"]}>
//                     <Table
//                       xAxisLabel="X axis label"
//                       yAxisLabel="Y axis label"
//                       rowLabels={rowLabels}
//                       columnLabels={true}
//                     >
//                       <table cellPadding={16} cellSpacing={0}>
//                         <thead>
//                           <tr>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                             <th>Column label</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                           <tr>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                             <td>Text cell</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </Table>
//                   </div>
//                 </AccordionPanel>
//               </AccordionMenu> */}
//             </div>
//           </div>
//         </div>
//         <div className={styles["flexi-footer"]}>
//           <ToastBar {...footerToastBarProps} />
//           <GlobalFooter {...footerProps} />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FlexiTemplateLevel2;
