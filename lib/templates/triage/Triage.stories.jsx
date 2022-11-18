// import { React, useEffect, useState } from "react";

// //components
// import Nav from "./Nav";
// import SectionTitle from "../../sectionTitle/SectionTitle";
// import ContentCardImage from "../../assets/images/triage-cc-1.png";
// import contentCardImageThree from "../../assets/images/triage-cc-2.png";
// import contentCardImageFour from "../../assets/images/triage-cc-3.png";
// import ContentCard from "../../contentCard/ContentCard";
// import Footer from "./Footer";

// //styles
// import grid from "../../assets/grid.scss";
// import styles from "./Triage.stories.module.scss";
// import global from "../../assets/styles/global.scss";

// export default {
//   title: "Templates/Triage",
//   parameters: {
//     docs: {
//       description: {
//         component: "Triage",
//       },
//     },
//     layout: "fullscreen",
//   },
//   argTypes: {},
// };

// const Template = () => {
//   const [width, setWidth] = useState();

//   function handleResize() {
//     setWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//   }, []);

//   const threeInRow = {
//     contentCardDisplayImage: true,
//     contentCardTitle: "Healthcare Professionals",
//     contentCardSubtitle: "Card Subtitle",
//     contentCardLabel: "Card Label 1",
//     contentCardDescription:
//       "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//     contentCardLinkType: "secondary",
//     contentCardLinkText: "Visit website",
//     contentCardLinkIcon: "externalLink",
//     contentCardLinkIconAlign: "right",
//     contentCardImageAlign: "vertical",
//     contentCard2LinkIcon: "None",
//     contentCard2DisplayImage: true,
//     contentCard2Title: "Patient",
//     contentCard2Subtitle: "Card Subtitle 2",
//     contentCard2Label: "Card Label 2",
//     // contentCard2Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper.',
//     contentCard2Description:
//       "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//     contentCard2ImageAlign: "vertical",
//     contentCard2LinkType: "secondary",
//     contentCard2LinkText: "Visit website",
//     contentCard2LinkIcon: "None",
//     contentCard3Title: "Member of the public",
//     contentCard3Subtitle: "Card Subtitle 3",
//     contentCard3Label: "Card Label 3",
//     contentCard3Description:
//       "Lorem ipsum dolor sit amet, consect etur adipi scing elit sed do eiusmod tempor",
//     // contentCard3Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. 3Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. 3Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. 3',
//     contentCard3LinkType: "secondary",
//     contentCard3LinkText: "Visit website",
//     contentCard3LinkIcon: "None",
//     contentCard3LinkIcon: "externalLink",
//     contentCard3LinkIconAlign: "right",
//     contentCard3DisplayImage: true,
//     contentCard3ImageAlign: "vertical",
//   };

//   return (
//     <div className={styles["triage"]}>
//       <Nav />
//       <div className={`${global["container-width-unset"]} container`}>
//         <div className="row">
//           <div className="col-12">
//             <div className={styles["triage-section-title"]}>
//               <SectionTitle
//                 align="center"
//                 headerText="Welcome to [name]"
//                 headerTextColor="#6267a1"
//                 headingTag="h3"
//                 subText="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
//               />  
//             </div>
//             <div className={`${grid["container"]} ${styles["triage-content-cards"]}`}>
//               <div className={grid["row"]}>
//                 <div className={grid["col"]}>
//                   <ContentCard
//                     contentCardDisplayImage={threeInRow.contentCardDisplayImage}
//                     contentCardTitle={threeInRow.contentCardTitle}
//                     contentCardDescription={threeInRow.contentCardDescription}
//                     contentCardImageAlign={threeInRow.contentCardImageAlign}
//                     contentCardLinkType={threeInRow.contentCardLinkType}
//                     contentCardLinkText={threeInRow.contentCardLinkText}
//                     contentCardLinkIcon={threeInRow.contentCardLinkIcon}
//                     contentCardLinkIconAlign={
//                       threeInRow.contentCardLinkIconAlign
//                     }
//                     contentCardImageUrl={ContentCardImage}
//                     contentCardType="three-in-row"
//                   ></ContentCard>
//                 </div>
//                 <div className={grid["col"]}>
//                   <ContentCard
//                     contentCardDisplayImage={
//                       threeInRow.contentCard2DisplayImage
//                     }
//                     contentCardTitle={threeInRow.contentCard2Title}
//                     contentCardDescription={threeInRow.contentCard2Description}
//                     contentCardImageAlign={threeInRow.contentCard2ImageAlign}
//                     contentCardLinkType={threeInRow.contentCard2LinkType}
//                     contentCardLinkText={threeInRow.contentCard2LinkText}
//                     contentCardLinkIcon={threeInRow.contentCard2LinkIcon}
//                     contentCardImageUrl={contentCardImageThree}
//                     contentCardType="three-in-row"
//                   ></ContentCard>
//                 </div>
//                 {!(width > 767 && width < 1087) && (
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={
//                         threeInRow.contentCard3DisplayImage
//                       }
//                       contentCardTitle={threeInRow.contentCard3Title}
//                       contentCardDescription={
//                         threeInRow.contentCard3Description
//                       }
//                       contentCardImageAlign={threeInRow.contentCard3ImageAlign}
//                       contentCardLinkType={threeInRow.contentCard3LinkType}
//                       contentCardLinkText={threeInRow.contentCard3LinkText}
//                       contentCardLinkIcon={threeInRow.contentCard3LinkIcon}
//                       contentCardLinkIconAlign={
//                         threeInRow.contentCard3LinkIconAlign
//                       }
//                       contentCardImageUrl={contentCardImageFour}
//                       contentCardType="three-in-row"
//                     ></ContentCard>
//                   </div>
//                 )}
//               </div>
//               {width > 767 && width < 1087 && (
//                 <ContentCard
//                   contentCardDisplayImage={threeInRow.contentCard3DisplayImage}
//                   contentCardTitle={threeInRow.contentCard3Title}
//                   contentCardDescription={threeInRow.contentCard3Description}
//                   contentCardImageAlign="Left"
//                   contentCardLinkType={threeInRow.contentCard3LinkType}
//                   contentCardLinkText={threeInRow.contentCard3LinkText}
//                   contentCardLinkIcon={threeInRow.contentCard3LinkIcon}
//                   contentCardLinkIconAlign={
//                     threeInRow.contentCard3LinkIconAlign
//                   }
//                   contentCardImageUrl={contentCardImageFour}
//                 ></ContentCard>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer>
//         <p>
//           [name]® and [name]® are registered trademarks of the Kyowa Kirin
//           Group.
//         </p>
//         <p>© [year] Kyowa Kirin International plc. All rights reserved.</p>
//         <p>KKI/XXXX/XXXX/XXXX</p>
//         <p>Date of preparation: [month] [year]</p>
//       </Footer>
//     </div>
//   );
// };

// export const Default = Template.bind({});
