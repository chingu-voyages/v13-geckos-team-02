import React from "react";

import styles from "./toggleButton.module.css";

const ToggleButton = ({ name, active = null }) => (
  <button
    className={`
      ${styles.toggleButton}
      ${active ? styles.toggleButton_enable : styles.toggleButton_disable}`}
  >
    {name}
  </button>
);
export default ToggleButton;
