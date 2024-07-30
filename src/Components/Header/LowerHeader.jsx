import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import classes from './Header.module.css'

function LowerHeader() {
  return (
    <div className={classes.lower_container}>

    <ul>
        <li>
          <AiOutlineMenu/>
        <p>All</p></li>
      <li>Medical Care</li>
      <li>Groceries</li>
      <li>Best Sellers</li>
      <li>Amazon Basics</li>
      <li>Prime</li>
      <li>Today's Deals</li>
      <li>New Relese</li>
      <li>Music</li>
      <li>Gift Cards</li>
      <li>Customer Service</li>
      
    </ul>

    </div>
  )
}

export default LowerHeader