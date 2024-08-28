import React, { useState } from "react";
import images from "./menu.json";
import menus from "./menu1.json";
import menus2 from "./menu2.json";
import styles from "./SliderMenu.module.css";
import { MenuBox } from "./MenuBox";
import { FilterBotton } from "./FilterBotton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const SliderMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let filters = [
    "Filter...",
    "Sort By",
    "Fast Delivery",
    "New on Swiggy",
    "Ratings 4.0+",
    "Pure Veg",
    "Offers",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];
  // let dishes = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className={styles.box1}>
        <div className={styles.headingCard}>
          <h2>What's on your mind?</h2>
          <ShoppingCartIcon className={styles.card} />
        </div>
        <div className={styles.imageDiv}>
          {images.map((img, ind) => (
            <div
              className={styles.imageBox}
              style={{ backgroundImage: `url(${img})` }}
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
              className={`${styles.panel} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => handlePanelClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.box1}>
        <h1>Restaurants with online food delivery in Bangalore</h1>
        <div className={styles.filterBtns}>
          {filters.map((element, ind) => (
            <FilterBotton element={element} key={ind} />
          ))}
        </div>
        {/* <div className={styles.filterDishes}>
          <ul>
              {dishes.map((ele, ind) => <li key={ind}>{ele}</li>)}
          </ul>
        </div> */}

        <div className={styles.BigMenuBox}>
          {menus2.map((menu, ind) => (
            <MenuBox
              key={ind}
              title={menu.title}
              image={menu.image_url}
              rating={menu.ratings}
            />
          ))}
        </div>
      </div>
    </>
  );
};
