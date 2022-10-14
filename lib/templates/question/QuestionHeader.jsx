import React from "react";

import Image from "../../image/Image";
import MainLogoDefault from "../../assets/images/kki-logo.png";
import YourLogoDefault from "../../assets/images/your-logo.png";
import { CloseIcon } from "../../assets/svgIcons/SvgIcons";
import styles from "./QuestionHeader.module.scss";

/**
 * Header Component
 * @param {string} yourLogo - it's the url for the yourlogo
 * @param {string} mainLogo - it's the url for kki logo or mainLogo
 * @param {string} exitButtonText - it's the text of the exit button
 * @param {string} exitAction - it's the action of the exit button
 * @returns React Component
 */

const QuestionHeader = (props) => {
  const { yourLogo, mainLogo, exitButtonText, exitAction } = props;

  return (
    <div className={styles["nav-background"]}>
      <div className={styles["nav"]}>
        <div className={styles["nav__logos"]}>
          <img
            className={styles["nav__your-logo"]}
            src={yourLogo ? yourLogo : YourLogoDefault}
            standardImg={true}
            altText="Your Logo"
          />
          <img
            className={styles["nav__main-logo"]}
            src={mainLogo ? mainLogo : MainLogoDefault}
            standardImg={true}
            altText="Main Logo"
          />
        </div>
        {exitButtonText && (
          <a
            className={styles["nav__exit-button"]}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              exitAction();
            }}
          >
            {exitButtonText} <CloseIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default QuestionHeader;
