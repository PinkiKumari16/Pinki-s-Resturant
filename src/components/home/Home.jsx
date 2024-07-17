import React from 'react'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
        <div className={styles.homeBg}>
            <h1>Food Website</h1>
            <p>Best Food in India</p>
            <button>Order Now</button>
        </div>
    </>
  )
}
