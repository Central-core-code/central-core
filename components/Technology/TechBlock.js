import React from "react";
import styles from "@styles/technology.module.scss";

function TechBlock(props) {
  return (
    <div className={`row ${styles.technology__row}`}>
      <div className={`col-sm-4 offset-sm-${props.offset}`}>
        <h2 className={styles.technology__title}>{props.title}</h2>
        <p className={styles.technology__description}>{props.content}</p>
      </div>
    </div>
  );
}

export default TechBlock;