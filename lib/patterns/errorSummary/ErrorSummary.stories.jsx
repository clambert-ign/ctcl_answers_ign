// import React, { useRef, useEffect } from "react";
// import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// //Components
// import ErrorSummary from "./ErrorSummary";
// import Input from "../input/Input";
// import DropdownList from "../dropdown/DropdownList";
// import Button from "../../button/Button";
// import GlobalNavigation from "../../globalNavigation/GlobalNavigation";
// import HeroHeader from "../../heroHeader/HeroHeader";

// //stories args
// import * as GlobalNavigationArgs from "../../globalNavigation/GlobalNavigation.stories";
// import * as HeroHeaderArgs from "../../heroHeader/HeroHeader.stories";

// //styles
// import styles from "../Form.module.scss";
// import global from "../../assets/styles/global.scss";

// export default {
//   title: "Patterns/Forms/Error Summary",
//   normalize: true,
//   component: ErrorSummary,
//   parameters: {
//     docs: {
//       description: {
//         component: "ErrorSummury",
//       },
//     },
//     layout: "fullscreen",
//   },

//   argTypes: {
//     errorTitle: {
//       type: { name: "string", required: true },
//       table: {
//         category: "Error Summary",
//       },
//       control: {
//         type: "text",
//       },
//     },
//   },
// };

// // This is the only named export in the file, and it matches the component name
// const Template = (args) => {
//   const { errorTitle } = args;

//   const formRef = useRef(null);

//   const selectFieldName = "dropdownDemo";
//   const selectFieldID = "js-dropdown-demo";
//   const selectPlaceholder = "Selected option";
//   const errorMessage = "This field is mandatory"; //Error message

//   //The list of options that will be assign to the dropdown list
//   const dropdownLabel = "Label";
//   const dropdownIsRequired = true;
//   const dropdownIsDisabled = false;
//   const options = [
//     { value: "", label: selectPlaceholder },
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

//   const validate = Yup.object({
//     dropdownDemo: dropdownIsRequired ? Yup.string().required(errorMessage) : "",
//     firstName: Yup.string()
//       .required("This field is mandatory")
//       .trim("Cannot include leading and trailing spaces")
//       .strict(true),
//     lastName: Yup.string()
//       .required("This field is mandatory")
//       .trim("Cannot include leading and trailing spaces")
//       .strict(true),
//     address: Yup.string()
//       .required("This field is mandatory")
//       .trim("Cannot include leading and trailing spaces")
//       .strict(true),
//   });

//   return (
//     <Formik
//       initialValues={{
//         dropdownDemo: "",
//         firstName: "",
//         lastName: "",
//         address: "",
//       }}
//       validationSchema={validate}
//       onSubmit={(values) => {
//         // alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({
//         errors,
//         touched,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         submitCount,
//       }) => {
//         //array of the error keys, used to know which is the first error 
//         //add ref to field and send ref to ErrorSummary
//         let errorKeys = Object.keys(errors);

//         useEffect(() => {
//           if(submitCount > 0) {
//             let element = document.getElementById("form-login");
//             if(formRef.current){
//               element = formRef.current
//             }
//             const elementPosition = submitCount > 1 ? element.offsetTop - 130 : element.offsetTop - 30;
//             window.scrollTo({
//               top: elementPosition,
//               behavior: "smooth",
//             });
//           }
//         }, [submitCount])

//         return (
//           <>
//             <GlobalNavigation {...GlobalNavigationArgs.Default.args} />
//             {submitCount > 0 && Object.keys(errors).length > 0 && (
//               <ErrorSummary
//                 title={errorTitle}
//                 description="Your form contains %d errors."
//                 buttonText="Please review them"
//                 errorsCount={errors ? Object.keys(errors).length : 0}
//                 errorRef={formRef}
//               />
//             )}
//             <HeroHeader {...HeroHeaderArgs.NoBackground.args} pageTitle="" />
//             <Form id="form-login">
//                 <div className={`${global["container-width-unset"]} container`}>
//                 <div className="row">
//                   <div className="col-sm-8 col-md-3">
//                     <div className={styles["form-field"]} ref={errorKeys[0] === "dropdownDemo" ? formRef : null}>
//                       <DropdownList
//                         id={selectFieldID}
//                         name={selectFieldName}
//                         placeholder={selectPlaceholder}
//                         label={dropdownLabel}
//                         options={options}
//                         error={
//                           touched.dropdownDemo &&
//                           !dropdownIsDisabled &&
//                           dropdownIsRequired
//                             ? errors.dropdownDemo
//                             : false
//                         }
//                         disabled={dropdownIsDisabled}
//                         required={dropdownIsRequired}
//                         onchangeHandler={(selectedOption) => {
//                           if (dropdownIsRequired) {
//                             let event = {
//                               target: {
//                                 name: "dropdownDemo",
//                                 value: selectedOption.value,
//                               },
//                             };
//                             handleChange(event);
//                           }
//                         }}
//                         onblurHandler={() => {
//                           if (dropdownIsRequired) {
//                             handleBlur({ target: { name: "dropdownDemo" } });
//                           }
//                         }}
//                       />
//                       {touched.dropdownDemo &&
//                       errors.dropdownDemo &&
//                       !dropdownIsDisabled &&
//                       dropdownIsRequired ? (
//                         <div
//                           className={styles["form-field__texts__error-text"]}
//                         >
//                           {errors.dropdownDemo}
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-sm-8 col-md-6">
//                     <div className={styles["form-field"]} ref={errorKeys[0] === "firstName" ? formRef : null}>
//                       <Field
//                         label="Label"
//                         name="firstName"
//                         type="text"
//                         component={Input}
//                         error={touched.firstName ? errors.firstName : ""}
//                       />
//                       {(!errors.firstName || !touched.firstName) && (
//                         <div
//                           className={
//                             styles["form-field__texts__assistive-text"]
//                           }
//                         >
//                           Assistive Text 1
//                         </div>
//                       )}
//                       {errors.firstName && touched.firstName ? (
//                         <div
//                           className={styles["form-field__texts__error-text"]}
//                         >
//                           {errors.firstName}
//                         </div>
//                       ) : null}
//                     </div>
//                     <div className={styles["form-field"]} ref={errorKeys[0] === "lastName" ? formRef : null}>
//                       <Field
//                         label="Label 2"
//                         name="lastName"
//                         type="text"
//                         component={Input}
//                         error={touched.lastName ? errors.lastName : ""}
//                       />
//                       {(!errors.lastName || !touched.lastName) && (
//                         <div
//                           className={
//                             styles["form-field__texts__assistive-text"]
//                           }
//                         >
//                           Assistive Text 2
//                         </div>
//                       )}
//                       {errors.lastName && touched.lastName ? (
//                         <div
//                           className={styles["form-field__texts__error-text"]}
//                         >
//                           {errors.lastName}
//                         </div>
//                       ) : null}
//                     </div>
//                     <div className={styles["form-field"]} ref={errorKeys[0] === "address" ? formRef : null}>
//                       <Field
//                         label="Label 3"
//                         name="address"
//                         type="text"
//                         component={Input}
//                         error={touched.address ? errors.address : ""}
//                       />
//                       {(!errors.address || !touched.address) && (
//                         <div
//                           className={
//                             styles["form-field__texts__assistive-text"]
//                           }
//                         >
//                           Assistive Text 3
//                         </div>
//                       )}
//                       {errors.address && touched.address ? (
//                         <div
//                           className={styles["form-field__texts__error-text"]}
//                         >
//                           {errors.address}
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <Button
//                       btnType="primary"
//                       btnText="Submit"
//                       btnLink="/"
//                       type="submit"
//                       isDisabled={isSubmitting}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleSubmit();
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </Form>
//           </>
//         );
//       }}
//     </Formik>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {
//   errorTitle: "There's a problem",
// };
