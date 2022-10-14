import React from "react";

import styles from "./ProgessBar.module.scss";

/**
 * ProgressBar Component
 * @param {string} progress - it's the percentage of the progress (width) - required
 * @param {string} color - it's the color of the progress bar - required
 * @returns React Component
 */

const ProgressBar = (props) => {
  const { progress, color } = props;
  const style = {
    backgroundColor: color ? color : "#6267A1",
    width: progress,
  };
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-bar--completed"]} style={style}></div>
    </div>
  );
};

export default ProgressBar;
