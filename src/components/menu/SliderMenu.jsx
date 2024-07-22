import React, { useState } from 'react'
import images from './menu.json'
import menus from './menu1.json'
import menus2 from './menu2.json'
import styles from './SliderMenu.module.css'
import { MenuBox } from './MenuBox'
import { FilterBotton } from './FilterBotton'
export const SliderMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let filters = ['Filter...', 'Sort By', 'Fast Delivery', 'New on Swiggy', 'Ratings 4.0+', 'Pure Veg', 'Offers', 'Rs. 300-Rs. 600', 'Less than Rs. 300'];

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className={styles.box1}>
        <h2>What's on your mind?</h2>
        <div className={styles.imageDiv}>
          {images.map((img, ind)=>
            (<div 
              className={styles.imageBox} 
              style={{backgroundImage: `url(${img})`}}
              key={ind}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.box1}>
        <h2>Top restaurant chains in Bangalore</h2>
        <div className={styles.container}>
        {menus.map((menu, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${menu})` }}
            className={`${styles.panel} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => handlePanelClick(index)}
          ></div>
        ))}
      </div>

      </div>
      <div className={styles.box1}>
        <h1>Restaurants with online food delivery in Bangalore</h1>
        <div className={styles.filterBtns}>
          {filters.map((element, ind)=>(
            <FilterBotton element={element} key={ind}/>
          ))}
        </div>
        <div className={styles.BigMenuBox}>
          {menus2.map((menu, ind)=>
            <MenuBox key={ind} menu={menu} />
          )}
        </div>

      </div>
    </>
  )
}
