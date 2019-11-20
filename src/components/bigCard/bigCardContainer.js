import React from "react";

const BigCardContainer = ({ imageUrl, children }) => {
  const styles = {
    position: "absolute",
    background: `url(${imageUrl}) #000`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "left",
    width: "100vw",
    height: "100%"
  };

  return <div style={styles}>{children}</div>;
};

export default BigCardContainer;
