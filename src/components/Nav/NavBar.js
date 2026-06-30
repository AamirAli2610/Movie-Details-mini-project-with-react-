import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css"
const NavBar = () => {
  return (
    <div className={styles.container}>
        <h1> <span><FontAwesomeIcon icon={faClapperboard} style={{color: "rgba(244, 113, 113, 1)",}} /></span>
        MovieHub</h1>

        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Top Rated</li>
            <li>Upcoming</li>
            <li>Contact</li>
        </ul>
      
    </div>
  )
}

export default NavBar
