import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <div className={styles.NavBar}>
            <div className={styles.logo}>
                <img src="/cool_logo.png" alt="Very Cool Logo" id={styles.picture} />
            </div>
            <div className={styles.tabsContainer}>
                <a href="#" className={styles.tabs}>Home</a>
                <a href="#" className={styles.tabs}>Products</a>
                <a href="#" className={styles.tabs}>About Us</a>
                <a href="#" className={styles.tabs}>Pricing</a>
            </div>
            <div className={styles.userSection}>
                <a href="#" className={styles.signIn}>Sign In</a>
                <a href="#" className={styles.signUp}>Sign Up</a>
            </div>
            <div className={styles.socialMedia}>
                <a href="https://www.facebook.com" className="fa fa-facebook"></a>
                <a href="https://www.instagram.com" className="fa fa-instagram"></a>
                <a href="https://www.twitter.com" className="fa fa-twitter"></a>
                <a href="https://www.linkedin.com" className="fa fa-linkedin"></a>
            </div>
        </div>
    );
}

export default NavBar;
