import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src="/vite.svg" alt="Very Cool Logo" className={styles.picture} />
            </div>
            <ul className={styles.tabsContainer}>
                <li><Link to="/" className={styles.tabs}>Home</Link></li>
                <li><Link to="/services" className={styles.tabs}>Services</Link></li>                <li><Link to="about-us" className={styles.tabs}>About Us</Link></li>
                <li><Link to="pricing" className={styles.tabs}>Pricing</Link></li>
            </ul>
            <div className={styles.userSection}>
                <Link to="/sign-in" className={styles.signIn}>Sign In</Link>
                <Link to="/sign-up" className={styles.signUp}>Sign Up</Link>
            </div>
            <div className={styles.socialMedia}>
                <a href="https://www.facebook.com" className="fa fa-facebook" aria-label="Facebook" target="_blank"></a>
                <a href="https://www.instagram.com" className="fa fa-instagram" aria-label="Instagram" target="_blank"></a>
                <a href="https://www.twitter.com" className="fa fa-twitter" aria-label="Twitter" target="_blank"></a>
                <a href="https://www.linkedin.com" className="fa fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
            </div>
        </nav>
    );
}

export default NavBar;
