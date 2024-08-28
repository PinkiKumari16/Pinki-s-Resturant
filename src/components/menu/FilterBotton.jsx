import React from "react";
import styles from "./SliderMenu.module.css";

export const FilterBotton = ({ element }) => {
  let showFilterList = () => {
    if (element === "Filter...") {
      alert(`${element}`);
    }
  };
  return (
    <>
      <button className={styles.btn} onMouseOver={showFilterList}>
        {element}
      </button>
    </>
  );
};
