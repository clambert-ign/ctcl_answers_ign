// import { useEffect, useState } from "react";
// import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// //components for start and summary page
// import GlobalNavigation from "../../globalNavigation/GlobalNavigation";
// import HeroHeader from "../../heroHeader/HeroHeader";
// import ToastBar from "../../toastBar/ToastBar";
// import GlobalFooter from "../../globalFooter/GlobalFooter";
// import SectionTitle from "../../sectionTitle/SectionTitle";
// //import AccordionPanel from "../../accordion/AccordionPanel";
// //import AccordionMenu from "../../accordion/AccordionMenu";
// import Editorial from "../../editorial/Editorial";
// import ContentCard from "../../contentCard/ContentCard";
// import Button from "../../button/Button";
// import Input from "../../formElements/input/Input";

// //components for question template only
// import QuestionHeader from "./QuestionHeader";
// import ProgressBar from "./ProgessBar";
// import QuestionControl from "./QuestionFooter";

// //form elements
// import Checkboxes from "../../formElements/checkbox/Checkbox";
// import Slider from "../../formElements/slider/Slider";
// import DropdownList from "../../formElements/dropdown/DropdownList";

// //images
// import OrangeImg from "../../assets/images/_blue-orange.png";
// import CheckboxImg1 from "../../assets/images/question-checkbox-1.png";
// import CheckboxImg2 from "../../assets/images/question-checkbox-2.png";
// import CheckboxImg3 from "../../assets/images/question-checkbox-3.png";
// import CheckboxImg4 from "../../assets/images/question-checkbox-4.png";
// import CheckboxImg5 from "../../assets/images/question-checkbox-5.png";
// import CheckboxImg6 from "../../assets/images/question-checkbox-6.png";

// //css files
// import styles from "./Question.module.scss";
// import grid from "../../assets/grid.scss";
// import global from "../../assets/styles/global.scss";
// import inputStyles from "../../formElements/Form.module.scss";

// export default {
//   title: "Templates/Question",
//   parameters: {
//     docs: {
//       description: {
//         component: "Question Start template",
//       },
//     },
//     layout: "fullscreen",
//     backgrounds: {
//       default: "White",
//     },
//   },
//   argTypes: {},
// };

// // Template Wrapper
// const Template = () => {
//   const [questionNumber, setQuestionNumber] = useState(0);
//   const [quizFinished, setQuizFinished] = useState(false);

//   const exitAction = () => {
//     window.scrollTo(0, 0);
//     setQuestionNumber(0);
//   };

//   const startQuiz = () => {
//     window.scrollTo(0, 0);
//     setQuestionNumber(1);
//   };

//   const nextQuestion = () => {
//     if (questionNumber < 6 && questionNumber > 0) {
//       window.scrollTo(0, 0);
//       setQuestionNumber(questionNumber + 1);
//     }
//   };

//   const backAction = () => {
//     if (questionNumber < 7 && questionNumber > 0) {
//       window.scrollTo(0, 0);
//       setQuestionNumber(questionNumber - 1);
//     }
//   };

//   const submitQuiz = () => {
//     if (questionNumber === 6) {
//       setQuizFinished(true);
//     }
//   };

//   if (questionNumber === 0 && !quizFinished) {
//     return <StartTemplate startQuiz={startQuiz} />;
//   }

//   if (quizFinished) {
//     return <SummaryTemplate />;
//   }
//   return (
//     <QuestionTemplate
//       questionCount="6"
//       questionNumber={questionNumber}
//       exitAction={exitAction}
//       nextAction={nextQuestion}
//       backAction={backAction}
//       submitQuiz={submitQuiz}
//     />
//   );
// };

// const StartTemplate = (props) => {
//   const { startQuiz } = props;

//   const menuItems = {
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
//     ],
//   };
//   const footerLinks = {
//     values: [
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 0 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 7 },
//     ],
//   };
//   return (
//     <div className={styles["question-start-template"]}>
//       <ToastBar
//         linkText="Visit our Healthcare Professional site"
//         text="This website if for the general public. Are you a Healthcare Professional?"
//         linkURL="/"
//         selectIcon="externalLink"
//       />
//       <GlobalNavigation
//         data={menuItems}
//         yourLogo=""
//         navBackground="#ffffff"
//         displayYourLogo={true}
//       />
//       <div className={styles["question-start-body"]}>
//         <div className={styles["hero-header"]}>
//           <HeroHeader
//             pageTitle="Quiz title"
//             headline="Lorem ipsum dolor sit amet, consectet adipiscing elit."
//             description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium,"
//             sideImage={true}
//             backToLevelOneLink="[Name of level 1 page]"
//             showButtons={true}
//             primaryButtonText="Primary Button"
//             primaryButtonURL="#"
//             primaryButtonAction={startQuiz}
//           />
//         </div>
//       </div>
//       <ToastBar
//         linkText="Report an adverse event here"
//         linkURL="/"
//         selectIcon="externalLink"
//         alignText="left"
//       />
//       <GlobalFooter
//         menuItems={footerLinks}
//         toastBarText=""
//         toastBarLinkText=""
//         toastBarLinkUrl=""
//         complianceCode="KKI/INT/IST/0125"
//         publishedDate="April 2021"
//         countrySelector="United Kingdom"
//         countryText="Country / Langauge:"
//       />
//     </div>
//   );
// };

// const SummaryTemplate = () => {
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

//   const menuItems = {
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
//     ],
//   };

//   const footerLinks = {
//     values: [
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 0 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 1 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 2 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 3 },
//       { linkText: "Page Link", linkURL: "https://www.google.com/", id: 7 },
//     ],
//   };

//   const validate = Yup.object({
//     emailAddress: Yup.string()
//       .email("Please enter a valid email address")
//       .matches(
//         RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
//         "Please enter a valid email address"
//       )
//       .trim("Cannot include leading and trailing spaces")
//       .strict(true),
//   });

//   return (
//     <div className={styles["summary-template"]}>
//       <ToastBar
//         linkText="Visit our Healthcare Professional site"
//         text="This website if for the general public. Are you a Healthcare Professional?"
//         linkURL="/"
//         selectIcon="externalLink"
//       />
//       <GlobalNavigation
//         data={menuItems}
//         yourLogo=""
//         navBackground="#ffffff"
//         displayYourLogo={true}
//       />

//       <div className={styles["hero-header-summary"]}>
//         <HeroHeader
//           pageTitle="Quiz title"
//           headline="Here’s your results"
//           description="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium,"
//           sideImage={true}
//           backToLevelOneLink="[Name of level 1 page]"
//           showButtons={true}
//           primaryButtonText="Download these results"
//           primaryButtonURL="#"
//           tertiaryLinkText="Print this page"
//           tertiaryLinkURL="#"
//           tertiaryLinkAction={() => {
//             window.print();
//           }}
//         />
//       </div>
//       <div className={`${global["container-width-unset"]} container`}>
//         <div className="row">
//           <div className="col-12 col-md-10 col-lg-8">
//             <SectionTitle
//               headingTag="h3"
//               headerText="Section Title"
//               subText="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
//               align="left"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 gy-sm-1">
//             {/* <AccordionMenu accordionId="a001" accordionType="Controlled">
//               <AccordionPanel title="Accordion title" icon="Globe">
//                 <Editorial title="Lorem ipsum" titleType="h4">
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
//                   <br></br>
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
//                 </Editorial>
//               </AccordionPanel>
//               <AccordionPanel title="Accordion title 1" icon="Globe">
//                 <Editorial title="Lorem ipsum 1" titleType="h4">
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
//                   <br></br>
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
//                 </Editorial>
//               </AccordionPanel>
//               <AccordionPanel title="Accordion title 2" icon="Globe">
//                 <Editorial title="Lorem ipsum 2" titleType="h4">
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
//                   <br></br>
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
//                 </Editorial>
//               </AccordionPanel>
//               <AccordionPanel title="Accordion title 3" icon="Globe">
//                 <Editorial title="Lorem ipsum 3" titleType="h4">
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
//                   <br></br>
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
//                 </Editorial>
//               </AccordionPanel>
//               <AccordionPanel title="Accordion title 4" icon="Globe">
//                 <Editorial title="Lorem ipsum 4" titleType="h4">
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
//                   <br></br>
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
//                 </Editorial>
//               </AccordionPanel>
//             </AccordionMenu> */}
//           </div>
//           <div className="col-12 col-md-10 col-lg-8">
//             <SectionTitle
//               headingTag="h3"
//               headerText="Section Title"
//               subText="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
//               align="left"
//             />
//           </div>
//           <div className="col-12">
//             <ContentCard
//               contentCardDisplayImage={true}
//               contentCardTitle="Content Card Title"
//               contentCardSubtitle="Card Subtitle"
//               contentCardLabel=""
//               contentCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. "
//               contentCardImageAlign="Left"
//               contentCardLinkType="tertiary"
//               contentCardLinkText="Tertiary Button"
//               contentCardLinkIcon="None"
//               contentCardImageUrl={OrangeImg}
//             ></ContentCard>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className={grid["container"]}>
//               <div className={grid["row"]}>
//                 <div className={grid["col"]}>
//                   <ContentCard
//                     contentCardDisplayImage={true}
//                     contentCardTitle="Content Card Title"
//                     contentCardSubtitle="Card Subtitle"
//                     contentCardLabel=""
//                     contentCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. "
//                     contentCardImageAlign="Vertical"
//                     contentCardLinkType="tertiary"
//                     contentCardLinkText="Tertiary Button"
//                     contentCardLinkIcon="None"
//                     contentCardImageUrl={OrangeImg}
//                     contentCardType="three-in-row"
//                   ></ContentCard>
//                 </div>
//                 <div className={grid["col"]}>
//                   <ContentCard
//                     contentCardDisplayImage={true}
//                     contentCardTitle="Content Card Title"
//                     contentCardSubtitle="Card Subtitle"
//                     contentCardLabel=""
//                     contentCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. "
//                     contentCardImageAlign="Vertical"
//                     contentCardLinkType="tertiary"
//                     contentCardLinkText="Tertiary Button"
//                     contentCardLinkIcon="None"
//                     contentCardImageUrl={OrangeImg}
//                     contentCardType="three-in-row"
//                   ></ContentCard>
//                 </div>
//                 {!(width > 767 && width < 1087) && (
//                   <div className={grid["col"]}>
//                     <ContentCard
//                       contentCardDisplayImage={true}
//                       contentCardTitle="Content Card Title"
//                       contentCardSubtitle="Card Subtitle"
//                       contentCardLabel=""
//                       contentCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. "
//                       contentCardImageAlign="Vertical"
//                       contentCardLinkType="tertiary"
//                       contentCardLinkText="Tertiary Button"
//                       contentCardLinkIcon="None"
//                       contentCardImageUrl={OrangeImg}
//                       contentCardType="three-in-row"
//                     ></ContentCard>
//                   </div>
//                 )}
//               </div>
//               {width > 767 && width < 1087 && (
//                 <ContentCard
//                   contentCardDisplayImage={true}
//                   contentCardTitle="Content Card Title"
//                   contentCardSubtitle="Card Subtitle"
//                   contentCardLabel=""
//                   contentCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. Velit tellus vitae dignissim accumsan laoreet cras aliquet ipsum. Elit nisl, odio cursus  suspendisse viverra amet eget posuere ullamcorper. "
//                   contentCardImageAlign="Left"
//                   contentCardLinkType="tertiary"
//                   contentCardLinkText="Tertiary Button"
//                   contentCardLinkIcon="None"
//                   contentCardImageUrl={OrangeImg}
//                 ></ContentCard>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-md-10 col-lg-8">
//             <SectionTitle
//               headingTag="h3"
//               headerText="Section Title"
//               subText="Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
//               align="left"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-sm-6">
//             <div className={styles["summary-email-field"]}>
//               <Formik
//                 initialValues={{ emailAddress: "" }}
//                 validationSchema={validate}
//               >
//                 {({
//                   values,
//                   setFieldValue,
//                   errors,
//                   handleSubmit,
//                   isSubmitting,
//                 }) => {
//                   if (values?.emailAddress.includes(" ")) {
//                     setFieldValue(
//                       "emailAddress",
//                       values?.emailAddress.replace(/ /g, "")
//                     );
//                   }
//                   return (
//                     <Form>
//                       <Field
//                         label="Your email address"
//                         name="emailAddress"
//                         component={Input}
//                         error={errors.emailAddress}
//                       />
//                       {!errors.emailAddress && (
//                         <div
//                           className={`${inputStyles["form-field__texts__assistive-text"]} `}
//                         >
//                           lorem ipsum
//                         </div>
//                       )}
//                       {errors.emailAddress ? (
//                         <div
//                           className={
//                             inputStyles["form-field__texts__error-text"]
//                           }
//                         >
//                           {errors.emailAddress}
//                         </div>
//                       ) : null}
//                       <div className={styles["form-field__sumbit"]}>
//                         <Button
//                           btnType="secondary"
//                           btnText="Email results"
//                           btnLink="/"
//                           type="submit"
//                           isDisabled={isSubmitting}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleSubmit();
//                           }}
//                         />
//                       </div>
//                     </Form>
//                   );
//                 }}
//               </Formik>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-sm-10 col-lg-10 col-xxl-8">
//             <p className={styles["form-field__footer-text"]}>
//               Legal blurb about the use of email address. Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//               voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//               officia deserunt mollit anim id est laborum.
//             </p>
//           </div>
//         </div>
//       </div>
//       <ToastBar
//         linkText="Report an adverse event here"
//         linkURL="/"
//         selectIcon="externalLink"
//         alignText="left"
//       />
//       <GlobalFooter
//         menuItems={footerLinks}
//         toastBarText=""
//         toastBarLinkText=""
//         toastBarLinkUrl=""
//         complianceCode="KKI/INT/IST/0125"
//         publishedDate="April 2021"
//         countrySelector="United Kingdom"
//         countryText="Country / Langauge:"
//       />
//     </div>
//   );
// };

// const QuestionTemplate = (props) => {
//   const {
//     questionCount,
//     questionNumber,
//     exitAction,
//     nextAction,
//     backAction,
//     submitQuiz,
//   } = props;

//   const [hasError, setHasError] = useState(false);

//   let progress = (parseInt(questionNumber) / parseInt(questionCount)) * 100;
//   progress = progress + "%";

//   const onClickAction = () => {
//     if (questionNumber === 6) {
//       let error = true;
//       let checkboxes = document.getElementsByName("checkbox_image");
//       checkboxes.forEach((checkbox) => {
//         if (checkbox.checked) {
//           error = false;
//         }
//       });
//       if (error) {
//         setHasError(true);
//       } else {
//         submitQuiz();
//       }
//     } else {
//       nextAction();
//     }
//   };

//   const skipAction = () => {
//     if (questionNumber === 6) { 
//       setHasError(true);
//     } else {
//       nextAction();
//     }
//   };

//   const back = () => {
//     setHasError(false);
//     backAction();
//   };

//   const exit = () => {
//     setHasError(false);
//     exitAction();
//   };

//   return (
//     <div className={styles["question"]}>
//       <div className={styles["question-header"]}>
//         <QuestionHeader exitButtonText="Exit" exitAction={exit} />
//         <ProgressBar progress={progress} />
//       </div>
//       <div className={styles["question-template"]}>
//         <div className={styles["question-background"]}></div>
//         {questionNumber === 1 && <QuestionOne />}
//         {questionNumber === 2 && <QuestionTwo />}
//         {questionNumber === 3 && <QuestionThree />}
//         {questionNumber === 4 && <QuestionFour />}
//         {questionNumber === 5 && <QuestionFive />}
//         {questionNumber === 6 && <QuestionSix error={hasError} />}
//       </div>
//       <div className={styles["question-footer"]}>
//         <QuestionControl
//           primaryBtnAction={onClickAction}
//           primaryBtnText={questionNumber === 6 ? "Submit" : "Next"}
//           secondaryBtnAction={back}
//           secondaryBtnText="Back"
//           tertiaryBtnAction={skipAction}
//           tertiaryBtnText="Skip this question"
//         />
//       </div>
//     </div>
//   );
// };

// const QuestionOne = () => {
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

//   return (
//     <Formik initialValues={{ checkbox: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>1 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div className="container g-0">
//                     <div className="row">
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox"
//                           value="checkbox"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox") ? true : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox2"
//                           value="checkbox2"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox2") ? true : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox3"
//                           value="checkbox3"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox3") ? true : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox4"
//                           value="checkbox4"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox4") ? true : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox5"
//                           value="checkbox5"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox5") ? true : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4 gx-4"
//                             : "col-12 col-md-6 col-lg-4 gx-4"
//                         }
//                       >
//                         <Field
//                           label="Checkbox title"
//                           name="checkbox"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox6"
//                           value="checkbox6"
//                           showTiles={true}
//                           assistiveText="Lorem ipsum dolor sit amet, consectetur"
//                           checked={
//                             values.checkbox.includes("checkbox6") ? true : false
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// const QuestionTwo = () => {
//   return (
//     <Formik initialValues={{ checkbox: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>2 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div
//                     className={`${global["container-width-unset"]} ${styles["question-form-fields"]} container g-0`}
//                   >
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <Field
//                           name="vote"
//                           id="myRange"
//                           label="What about this?"
//                           showValueThumb={true}
//                           startValue="0"
//                           endValue="100"
//                           component={Slider}
//                           value="50"
//                           markersLabels="0%,10%,20%,30%,40%,50%,60%,70%,80%,90%,100%"
//                         />
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// const QuestionThree = () => {
//   return (
//     <Formik initialValues={{ checkbox: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>3 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div
//                     className={`${global["container-width-unset"]} ${styles["question-form-fields"]} container g-0`}
//                   >
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <Field
//                           name="vote"
//                           id="myRange"
//                           label="What about this?"
//                           showValueThumb={true}
//                           startValue="0"
//                           endValue="100"
//                           component={Slider}
//                           value="50"
//                           markersLabels="0,10%,20%,30%,40%,50%,60%,70%,80%,90%,100%"
//                         />
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <Field
//                           name="vote1"
//                           id="myRange1"
//                           label="What about this?"
//                           showValueThumb={true}
//                           startValue="0"
//                           endValue="100"
//                           component={Slider}
//                           value="50"
//                           markersLabels="0,10%,20%,30%,40%,50%,60%,70%,80%,90%,100%"
//                         />
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// const QuestionFour = () => {
//   //The list of options that will be assign to the dropdown list
//   const options = [
//     { value: "", label: "Selected option" },
//     { value: "option one", label: "Option One" },
//     { value: "option two", label: "Option Two" },
//     { value: "option three", label: "Option Three" },
//     { value: "option four", label: "Option Four" },
//     { value: "option five", label: "Option Five" },
//     { value: "option six", label: "Option Six" },
//     { value: "option seven", label: "Option Seven" },
//     { value: "option eight", label: "Option Eight" },
//     { value: "option nine", label: "Option Nine" },
//     { value: "option ten", label: "Option Ten" },
//   ];
//   return (
//     <Formik initialValues={{ checkbox: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>4 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div
//                     className={`${global["container-width-unset"]} ${styles["question-form-fields"]} container g-0`}
//                   >
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <div className={styles["form-field"]}>
//                           <DropdownList
//                             id="dropdown-one"
//                             name="dropdown-one"
//                             placeholder="Selected option"
//                             label="Pick one"
//                             options={options}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// const QuestionFive = () => {
//   //The list of options that will be assign to the dropdown list
//   const options = [
//     { value: "", label: "Selected option" },
//     { value: "option one", label: "Option One" },
//     { value: "option two", label: "Option Two" },
//     { value: "option three", label: "Option Three" },
//     { value: "option four", label: "Option Four" },
//     { value: "option five", label: "Option Five" },
//     { value: "option six", label: "Option Six" },
//     { value: "option seven", label: "Option Seven" },
//     { value: "option eight", label: "Option Eight" },
//     { value: "option nine", label: "Option Nine" },
//     { value: "option ten", label: "Option Ten" },
//   ];
//   return (
//     <Formik initialValues={{ checkbox: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>5 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div
//                     className={`${global["container-width-unset"]} ${styles["question-form-fields"]} container g-0`}
//                   >
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <div className={styles["form-field"]}>
//                           <DropdownList
//                             id="dropdown-one"
//                             name="dropdown-one"
//                             placeholder="Selected option"
//                             label="Pick one"
//                             options={options}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-sm-12 col-md-8">
//                         <div className={styles["form-field"]}>
//                           <DropdownList
//                             id="dropdown-two"
//                             name="dropdown-two"
//                             placeholder="Selected option"
//                             label="Pick one"
//                             options={options}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// const QuestionSix = (props) => {
//   const { error } = props;
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

//   return (
//     <Formik initialValues={{ checkbox_image: [] }}>
//       {({ values }) => {
//         return (
//           <Form>
//             {error && (
//               <div className={styles["question-error"]}>
//                 <div className={`styles.question-error__content styles.error-summary-sticky`}>
//                   <p>This question is required.</p>
//                 </div>
//               </div>
//             )}
//             <div className={`${global["container-width-unset"]} container`}>
//               <div className="row">
//                 <div className="col-12 col-sm-6">
//                   <p className={styles["question-counter"]}>6 of 6</p>
//                   <Editorial
//                     title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?"
//                     titleType="h4"
//                     caption="GP Discussion Guide"
//                     fullWidth={true}
//                   >
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </Editorial>
//                   <div className={styles["editorial-button"]}>
//                     <Button
//                       btnType="tertiary"
//                       btnText="Watch the video"
//                       btnLink="/"
//                       isExternal={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <div className="container g-0">
//                     <div className="row">
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox"
//                           value="checkbox"
//                           showTiles={true}
//                           tileImage={CheckboxImg1}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox2"
//                           value="checkbox2"
//                           showTiles={true}
//                           tileImage={CheckboxImg2}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox2")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox3"
//                           value="checkbox3"
//                           showTiles={true}
//                           tileImage={CheckboxImg3}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox3")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox4"
//                           value="checkbox4"
//                           showTiles={true}
//                           tileImage={CheckboxImg4}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox4")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox5"
//                           value="checkbox5"
//                           showTiles={true}
//                           tileImage={CheckboxImg5}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox5")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                       <div
//                         className={
//                           width > 545 && width < 831
//                             ? "col-6 col-md-6 col-lg-4"
//                             : "col-12 col-md-6 col-lg-4"
//                         }
//                       >
//                         <Field
//                           name="checkbox_image"
//                           type="checkbox"
//                           component={Checkboxes}
//                           id="checkbox6"
//                           value="checkbox6"
//                           showTiles={true}
//                           tileImage={CheckboxImg6}
//                           error={
//                             error && values.checkbox_image.length === 0
//                               ? error
//                               : ""
//                           }
//                           checked={
//                             values.checkbox_image.includes("checkbox6")
//                               ? true
//                               : false
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// // Basic Usage Story
// export const Default = Template.bind({});
// Default.args = {};
