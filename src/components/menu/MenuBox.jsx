import React from 'react'
import styles from './SliderMenu.module.css'
export const MenuBox = ({ menu }) => {
  return (
    <>
        <div className={styles.menuBox}>
            <div style={{backgroundImage: `url(${menu})`}} className={styles.foodImage}>image</div>
            <div style={{padding: '1rem'}}>
            <h2>food name</h2>
            <h6>rating</h6>
            <p>Description</p>
            </div>
        </div>
    </>
  )
}
