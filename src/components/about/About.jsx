import React, { useState } from "react";
import styles from "./About.module.css";
import data from "./data.json";

export const About = () => {
  let [ind, setInd] = useState(0);
  return (
    <>
      <div className={styles.aboutPage}>
        <h1>Welcome To My Resturant</h1>
        <p>
          Welcome to Pinki's Restaurant, where every meal is an experience and
          every guest is cherished. Our culinary journey began with a passion
          for blending traditional flavors with contemporary flair. Situated in
          the vibrant heart of <b>USA</b>, Pinki's Restaurant stands out not
          just for its delicious offerings, but also for its enchanting
          ambiance. Our interior design boasts an elegant blend of modern and
          classic elements. Soft, ambient lighting casts a warm glow across the
          restaurant, creating an inviting and cozy atmosphere. The spacious
          layout ensures privacy and comfort, making it an ideal spot for both
          intimate dinners and larger gatherings. At Pinki's, we take pride in
          our diverse menu that caters to all tastes. From the aromatic spices
          of our South Indian dishes to the succulent flavors of our chicken
          specialties, each dish is prepared with utmost care and attention. Our
          chefs use only the freshest ingredients, ensuring that every bite is a
          delight.
        </p>
        <b>
          <u>The restaurant's décor is</u>
        </b>
        <p>
          inspired by local artistry, featuring vibrant colors and unique
          artwork that celebrate the rich cultural heritage of the region. Large
          windows allow natural light to flood the space during the day,
          enhancing the dining experience with a touch of nature. In addition to
          our exquisite food and beautiful setting, Pinki's Restaurant is
          committed to providing exceptional service. Our friendly and attentive
          staff are dedicated to making your visit enjoyable and memorable.
          Whether you're here for a quick lunch, a family dinner, or a special
          celebration, we strive to exceed your expectations. We also offer a
          selection of fine wines and handcrafted cocktails to complement your
          meal, each carefully curated to enhance the flavors of our dishes. Our
          dessert menu features indulgent treats that provide the perfect ending
          to your dining experience. Join us at Pinki's Restaurant, where the
          ambiance is as inviting as the food is delightful. We look forward to
          welcoming you and sharing the joy of great food, good company, and a
          memorable dining experience.
        </p>
        <h1>
          <u>Collections of My Restaurant</u>
        </h1>
        <div className={styles.imageContent}>
          {data[ind % 3].map((image, index) => (
            <div
              className={styles.imageBox}
              style={{ backgroundImage: `url(${image})` }}
              key={index}
            ></div>
          ))}
          <p className={styles.nextArrow} onClick={() => setInd(++ind)}>
            &gt;
          </p>
        </div>
      </div>
    </>
  );
};
