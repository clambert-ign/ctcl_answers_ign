// import React from "react";
// import GlobalNavigation from "../../globalNavigation/GlobalNavigation";
// import StandardHeader from "../../standardHeader/StandardHeader";
// import ToastBar from "../../toastBar/ToastBar";
// import Divider from "../../divider/Divider";
// import Editorial from "../../editorial/Editorial";
// import GlobalFooter from "../../globalFooter/GlobalFooter";

// import { ChevronLeft } from "../../assets/svgIcons/SvgIcons";
// import KKILogoWhite from "../../assets/images/kki-logo-white.png"
// import YourLogoWhite from "../../assets/images/your-logo-white.png"

// import styles from "./Text.stories.module.scss";
// import global from "../../assets/styles/global.scss";

// export default {
//   title: "Templates/Text",
//   parameters: {
//     docs: {
//       description: {
//         component: "Text",
//       },
//     },
//     layout: "fullscreen",
//   },
// };

// const Template = (args) => {
//   const globalNavigationProps = {
//     data: {
//       menuItems: [
//         {
//           header: "Level one",
//           values: [
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//           ],
//         },
//         {
//           header: "Level one",
//           values: [
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 2" },
//           ],
//         },
//         {
//           header: "Level one",
//           values: [
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//             { linkUrl: "/", linkText: "Level 2" },
//           ],
//         },
//         {
//           header: "Level one",
//           values: [
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 3" },
//             { linkUrl: "/", linkText: "Level 2" },
//           ],
//         },
//       ],
//     },
//     toastBarLinkUrl: "https://www.google.com/",
//     toastBarText:
//       "This website if for the general public. Are you a Healthcare Professional?",
//     yourLogo: "",
//     displayYourLogo: true,
//   };

//   //Editorial props
//   const editorialProps = {
//     titleType: "h3",
//     title: "Editorial module title two column",
//     caption: "Caption (optional)",
//     col1BodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//     col1BodyText2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//     col2BodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//     col2BodyText2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//   };

//   const editorialPropsOneCol = {
//     titleType: "h3",
//     title: "Editorial module title one column",
//     caption: "Caption (optional)",
//     col1BodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//     col2BodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//   };

//   const toastBarProps = {
//     toastBarLinkText: "Visit our Healthcare Professional site",
//     toastBarLinkUrl: "https://www.google.com/",
//     toastBarText:
//       "This website if for the general public. Are you a Healthcare Professional?",
//   };

//   const globalFooterProps = {
//     menuItems: {
//       values: [
//         { linkText: "Page Link 1", linkURL: "https://www.google.com/", id: 0 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 4 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 5 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 6 },
//         { linkText: "Page Link", linkURL: "https://www.google.com/", id: 7 },
//       ],
//     },
//     complianceCode: "KKI/INT/IST/0125",
//     publishedDate: "August 2021",
//     countrySelector: "United Kingdom",
//     countryText: "Country / Region:",
//   };
//   return (
//     <div className={styles["text-template"]}>
//       <ToastBar
//         linkText={toastBarProps.toastBarLinkText}
//         text={toastBarProps.toastBarText}
//         linkURL={toastBarProps.toastBarLinkUrl}
//         selectIcon="externalLink"
//       />
//       <div className={styles["nav--background"]}>
//         <GlobalNavigation
//           {...globalNavigationProps}
//           displayYourLogo={true}
//           yourLogo={YourLogoWhite}
//           logo={KKILogoWhite}
//           color="purple"
//         />
//       </div>
//       <StandardHeader
//         backToLevel1Link="[Name of level 1 page]"
//         pageTitle="Privacy policy"
//         headline="Our privacy policy explained"
//       />
//       <div className={`${global["container-width-unset"]} container`}>
//         <div className="row">
//           <div className="col-12">
//             {(editorialProps.title || editorialProps.caption) && (
//               <Editorial {...editorialProps}>
//                 <div className="row">
//                   <div className="col-sm-6 col-12">
//                     <p>{editorialProps.col1BodyText}</p>
//                     <p>{editorialProps.col1BodyText2}</p>
//                   </div>
//                   <div className="col-sm-6 col-12">
//                     <p>{editorialProps.col2BodyText}</p>
//                     <p>{editorialProps.col2BodyText2}</p>
//                   </div>
//                 </div>
//               </Editorial>
//             )}
//             <Divider animate={true} color="#4B4C53" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             {(editorialProps.title || editorialProps.caption) && (
//               <Editorial {...editorialProps}>
//                 <div className="row">
//                   <div className="col-sm-6 col-12">
//                     <p>{editorialProps.col1BodyText}</p>
//                     <p>{editorialProps.col1BodyText2}</p>
//                   </div>
//                   <div className="col-sm-6 col-12">
//                     <p>{editorialProps.col2BodyText}</p>
//                     <p>{editorialProps.col2BodyText2}</p>
//                   </div>
//                 </div>
//               </Editorial>
//             )}
//             <Divider animate={true} color="#4B4C53" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             {(editorialProps.title || editorialProps.caption) && (
//               <Editorial {...editorialProps}>
//                 <div className="row">
//                   <div className="col-sm-6 col-12">
//                     <p className={styles["p--margin"]}>
//                       {editorialProps.col1BodyText}
//                     </p>
//                     <p>{editorialProps.col1BodyText2}</p>
//                   </div>
//                   <div className="col-sm-6 col-12">
//                     <ul>
//                       <li>{editorialProps.col2BodyText}</li>
//                       <li>{editorialProps.col2BodyText2}</li>
//                     </ul>
//                   </div>
//                 </div>
//               </Editorial>
//             )}
//             <Divider animate={true} color="#4B4C53" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <Editorial {...editorialPropsOneCol} fullWidth={true}>
//               <ul>
//                 <li>{editorialPropsOneCol.col1BodyText}</li>
//                 <li>{editorialPropsOneCol.col2BodyText}</li>
//               </ul>
//             </Editorial>
//           </div>
//         </div>
//       </div>
//       <ToastBar
//         alignText="left"
//         linkText="Report an adverse event here"
//         linkURL={toastBarProps.toastBarLinkUrl}
//         selectIcon="externalLink"
//       />
//       <GlobalFooter
//         menuItems={globalFooterProps.menuItems}
//         complianceCode={globalFooterProps.complianceCode}
//         publishedDate={globalFooterProps.publishedDate}
//         countrySelector={globalFooterProps.countrySelector}
//         countryText={globalFooterProps.countryText}
//       />
//     </div>
//   );
// };

// export const Default = Template.bind({});
