import React from "react";
import styles from "@styles/header.module.scss";

function MainHeader() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <div className={styles.header__wrap}>
            <p className="h1">Lorem</p>
            <h1>quis nostrud exercitation ullamco laboris </h1>
            <p className="h1">Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
