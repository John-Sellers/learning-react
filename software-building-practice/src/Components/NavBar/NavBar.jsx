import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src="/cool_logo.png" alt="Very Cool Logo" className={styles.picture} />
            </div>
            <ul className={styles.tabsContainer}>
                <li><Link to="/" className={styles.tabs}>Home</Link></li>
                <li><Link to="/services" className={styles.tabs}>Services</Link></li>
                <li><Link to="/how-it-works" className={styles.tabs}>How It Works</Link></li>
                <li><Link to="about-us" className={styles.tabs}>About Us</Link></li>
                <li><Link to="pricing" className={styles.tabs}>Pricing</Link></li>
            </ul>
            <div className={styles.userSection}>
                <Link to="/sign-in" className={styles.signIn}>Sign In</Link>
                <Link to="/sign-up" className={styles.signUp}>Sign Up</Link>
            </div>
            <div className={styles.socialMedia}>
                <a href="https://www.facebook.com" className="fa fa-facebook" aria-label="Facebook"></a>
                <a href="https://www.instagram.com" className="fa fa-instagram" aria-label="Instagram"></a>
                <a href="https://www.twitter.com" className="fa fa-twitter" aria-label="Twitter"></a>
                <a href="https://www.linkedin.com" className="fa fa-linkedin" aria-label="LinkedIn"></a>
            </div>
        </nav>
    );
}

export default NavBar;
