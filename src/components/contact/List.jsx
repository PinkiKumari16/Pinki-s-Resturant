import React from 'react'
import styles from './Contact.module.css'

export const List = ({icon, iteam}) => {
  return (
    <>
        <div className={styles.list}>{icon}{iteam}</div>
    </>
  )
}
