import React from "react";

import styles from "./productionCompany.module.css";

const ProductionCompany = ({ list = [] }) =>
  list.length > 0 ? (
    <div className={styles.productionCompany}>
      <h2 className={styles.productionCompany_heading}>
        The Production Company
      </h2>
      <ul className={styles.company_list_menu}>
        {list.map(company => (
          <li className={styles.company_list_menu_item}>{company}</li>
        ))}
      </ul>
    </div>
  ) : null;

export default ProductionCompany;
