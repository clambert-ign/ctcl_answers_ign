import React, { useEffect, useRef } from "react";

import Button from "../../button/Button";

import styles from "./ErrorSummary.module.scss";

/**
 * ErrorSummary Component
 * @param {string} title - it's the Title of the error summary - required
 * @param {string} description - it's the description of error summary - required
 * @param {string} buttonText - it's the description of error summary - required
 * @param {string} errorsCount - it's the number of errors - optional
 * @param {string} errorRef - it's the invalid field to scroll to - optional
 * @return React component
 */

const ErrorSummary = (props) => {
  const { title, description, errorsCount, buttonText, errorRef } = props;

  const errorSummaryRef = useRef(null);
  const errorContentRef = useRef(null);

  let desc = description;
  if (description.includes("%d")) {
    desc = description.split("%d");
  }

  //function to check if the user has scrolled to the container of the div
  const handleScroll = () => {
    if (errorsCount > 0 && errorSummaryRef.current) {
      let errorSummaryOffset = errorSummaryRef.current.offsetTop;
      let userScrolled = window.pageYOffset;
      if (userScrolled > errorSummaryOffset) {
        errorContentRef.current.classList.add(styles["error-summary-sticky"]);
      } else {
        errorContentRef.current.classList.remove(
          styles["error-summary-sticky"]
        );
      }
    }
  };

  //function to find the first error in the form and scroll to it
  const scrollToError = () => {
    if (errorRef.current) {
      let formLabel = errorRef.current.getElementsByTagName("label");
      if(formLabel){
        if(formLabel[0]){
          formLabel[0].click();
        }
      }
      let formField = errorRef.current.getElementsByTagName("input");
      if(formField){
        if(formField[0]){
          formField[0].click();
        }
      }
      window.scrollTo({
        top: errorRef.current.offsetTop - 145,
        behavior: "smooth",
      });
    }
  };

  //add eventListener when component initialises
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  //listen to changes in errorsCount and once it reaches 0 errors, remove the event listener
  useEffect(() => {
    if (errorsCount === 0) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [errorsCount]);

  return (
    <div ref={errorSummaryRef} className={styles["error-summary"]}>
      <div ref={errorContentRef} className={styles["error-summary__content"]}>
        <div className={styles["error-summary__box"]}>
          <p className={styles["error-summary-title"]}>{title}</p>
          <div className={styles["error-summary-description"]}>
            {description && description.includes("%d") && (
              <p>
                {desc[0]} <span>{errorsCount}</span> {desc[1]}
              </p>
            )}
            {description && !description.includes("%d") && (
              <p>
                {description}
              </p>
            )}
            <Button
              btnLink="#"
              btnText={buttonText ? buttonText : "Please review them"}
              btnType="tertiary"
              onClick={(e) => {
                e.preventDefault();
                scrollToError();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSummary;
