import React from "react";
import styles from "./SliderMenu.module.css";
export const MenuBox = ({ title, image, rating }) => {
  return (
    <>
      <div className={styles.menuBox}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.foodImage}
        ></div>
        <div style={{ padding: "1rem" }}>
          <h2>{title}</h2>
          <h6>{rating}</h6>
          <button className={styles.addBtn}>ADD</button>
        </div>
      </div>
    </>
  );
};
