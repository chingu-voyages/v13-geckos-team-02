import React from "react";

import styles from "./productionCompany.module.css";

const ProductionCompany = ({ company }) => (
  <div className={styles.productionCompany}>
    <h2 className={styles.productionCompany_heading}>The Production Company</h2>
    <ul className={styles.company_list_menu}>
      <li className={styles.company_list_menu_item}>{company}</li>
    </ul>
  </div>
);

export default ProductionCompany;
