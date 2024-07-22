import React from 'react'
import styles from './SliderMenu.module.css'

export const FilterBotton = ({element}) => {
  return (
    <>
        <button className={styles.btn}>{element}</button>
    </>
  )
}
