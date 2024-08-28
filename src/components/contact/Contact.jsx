import React from "react";
import styles from "./Contact.module.css";
import { List } from "./List";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const Contact = () => {
  const details = [
    "☎️ 1800-00-0000 (tollfree)",
    "✉️ help@myrest.com",
    "📞 1234567890",
  ];
  return (
    <>
      <div className={styles.contactPage}>
        <h1>Contact My Resturant</h1>
        <p>
          Welcome to Pinki's Restaurant, where culinary delights await you!
          Indulge in a diverse menu featuring mouth-watering South Indian
          delicacies and a variety of succulent chicken dishes. Our expert chefs
          craft each meal with passion and precision, ensuring a dining
          experience that's both flavorful and memorable. Whether you're craving
          traditional flavors or new culinary adventures, Pinki's Restaurant is
          your destination for delicious food and warm hospitality. Join us for
          a meal that promises to delight your taste buds and leave you wanting
          more!
        </p>
        <div className={styles.contentBox}>
          <div className={styles.contactDetails}>Contact Details</div>
          {details.map((iteam) => (
            <List key={iteam} iteam={iteam} />
          ))}
        </div>
      </div>
    </>
  );
};
