import React from 'react'
import styles from './Footer.module.scss'

/**
 * Footer Component
 * @param {string} registeredGroup - it's the text for registered trademarks of the Kyowa Kirin Group
 * @param {string} copyright - it's the copyright of site
 * @param {string} kki - it's the title of the content card
 * @param {string} datePreparation - it's the date of preparation
 * @returns React Component
 */

const Footer = (props) => {

	return (
		<>
			<footer className={styles["footer"]}>
				{props.children}
			</footer>
		</>
	)
}

export default Footer
