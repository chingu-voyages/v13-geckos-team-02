import React from "react";

import styles from "./infoSection.module.css";

const InfoSection = ({ title, detail }) => (
  <div>
    {title ? (
      <div>
        <h3 className={styles.info_title}>{title}</h3>
        {typeof detail === "object" ? (
          detail.map(detail => <p className={styles.info_detail}>{detail}</p>)
        ) : (
          <p className={styles.info_detail}>{detail}</p>
        )}
      </div>
    ) : null}
  </div>
);

export default InfoSection;
