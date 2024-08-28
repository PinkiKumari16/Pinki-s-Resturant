import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerDiv}>
          <div>
            <p>
              <b>Conmany</b>
            </p>
            <p>About</p>
            <p>Career</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Genie</p>
          </div>
          <div>
            <p>
              <b>Contact us</b>
            </p>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div>
            <p>
              <b>Legal</b>
            </p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>Investor Relations</p>
          </div>
          <div>
            <p>
              <b>We deliver to:</b>
            </p>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <p className={styles.lastText}>© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>
    </>
  );
};
