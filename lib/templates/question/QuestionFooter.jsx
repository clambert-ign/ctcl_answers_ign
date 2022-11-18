import React, { useEffect, useState } from "react";
import Button from "../../button/Button";

import styles from "./QuestionFooter.module.scss";

/**
 * QuestionControl Component
 * @param {string} primaryBtnAction - it's the action of the primary button - required
 * @param {string} primaryBtnText - it's the text of the primary button - required
 * @param {string} secondaryBtnAction - it's the action of the secondary button - required
 * @param {string} secondaryBtnText - it's the text of the secondary button - required
 * @param {string} tertiaryBtnAction - it's the action of the tertiary button - required
 * @param {string} tertiaryBtnText - it's the text of the tertiary button - required
 * @returns React Component
 */

const QuestionControl = (props) => {
  const {
    primaryBtnAction,
    primaryBtnText,
    secondaryBtnAction,
    secondaryBtnText,
    tertiaryBtnAction,
    tertiaryBtnText,
  } = props;

  const [width, setWidth] = useState();

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["control-panel"]}>
      <div className={styles["control-panel__content"]}>
        {width > 544 && (
          <Button
            btnType="secondary"
            btnText={secondaryBtnText ? secondaryBtnText : "Back"}
            btnLink="/"
            onClick={secondaryBtnAction}
          />
        )}
        {width < 545 && (
          <Button
            btnType="primary"
            btnText={primaryBtnText ? primaryBtnText : "Next"}
            btnLink="/"
            onClick={primaryBtnAction}
          />
        )}

        <div className={styles["control-panel__content__buttons"]}>
          {width > 544 && (
            <>
              <Button
                btnType="tertiary"
                btnText={
                  tertiaryBtnText ? tertiaryBtnText : "Skip this question"
                }
                btnLink="/"
                onClick={tertiaryBtnAction}
              />
              <Button
                btnType="primary"
                btnText={primaryBtnText ? primaryBtnText : "Next"}
                btnLink="/"
                onClick={primaryBtnAction}
              />
            </>
          )}
          {width < 545 && (
            <>
              <Button
                btnType="secondary"
                btnText={secondaryBtnText ? secondaryBtnText : "Back"}
                btnLink="/"
                onClick={secondaryBtnAction}
              />
              <Button
                btnType="tertiary"
                btnText={
                  tertiaryBtnText ? tertiaryBtnText : "Skip this question"
                }
                btnLink="/"
                onClick={tertiaryBtnAction}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionControl;
