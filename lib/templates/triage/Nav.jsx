import React from 'react'
import Image from '../../image/Image'
import MainLogoDefault from '../../assets/images/kki-logo.png'
import YourLogoDefault from '../../assets/images/your-logo.png'
import styles from './Nav.module.scss'

/**
 * Nav Component
 * @param {string} yourLogo - it's the url for the yourlogo 
 * @param {string} mainLogo - it's the url for kki logo or mainLogo
 * @returns React Component
 */

const Nav = (props) => {
	const {
		yourLogo,
		mainLogo
	} = props
	
	return (
		<div className={styles["nav"]}>
			<div className={styles["nav__your-logo"]}>
				<Image 
					url={yourLogo ? yourLogo : YourLogoDefault} 
					standardImg={true} 
					altText="Your Logo" 
			/>
			</div>
			<div className={styles["nav__main-logo"]}>
				<Image 
					url={mainLogo ? mainLogo : MainLogoDefault} 
					standardImg={true} 
					altText="Main Logo" 
				/>
			</div>
		</div>	
	)
}

export default Nav
