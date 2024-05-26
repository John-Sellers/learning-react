import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src="/cool_logo.png" alt="Very Cool Logo" className={styles.picture} />
            </div>
            <ul className={styles.tabsContainer}>
                <li><a href="/home" className={styles.tabs}>Home</a></li>
                <li><a href="/products" className={styles.tabs}>Products</a></li>
                <li><a href="/how-it-works" className={styles.tabs}>How It Works</a></li>
                <li><a href="/about-us" className={styles.tabs}>About Us</a></li>
                <li><a href="/pricing" className={styles.tabs}>Pricing</a></li>
            </ul>
            <div className={styles.userSection}>
                <a href="/sign-in" className={styles.signIn}>Sign In</a>
                <a href="/sign-up" className={styles.signUp}>Sign Up</a>
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
