import React from "react";

import styles from "./Banner.module.css";
import pic from "../images/Banner.png";

const banner = () => {
    return(
          <div className={styles.container}>
              <img src={pic} className={styles.img} alt="banner"/>  
              <div className={styles.textContainer}>
                <h1>wofsmag</h1>
                <p>
                    choose your <span>style</span> 
                </p>
              </div>

          </div>
    );
};

export default banner;

