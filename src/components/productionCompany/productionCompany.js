import React from "react";

import styles from "./productionCompany.module.css";
import CompanyPlaceholder from "../../assets/images/company@2x.png";

const ProductionCompany = ({ imagePath, name, logoPath }) => {
  const imageUrl = logoPath ? `${imagePath}/${logoPath}` : CompanyPlaceholder;
  return (
    <li className={styles.company_list}>
      <img className={styles.company_logo} src={`${imageUrl}`} alt={name} />
      <h6>{name}</h6>
    </li>
  );
};

export default ProductionCompany;
