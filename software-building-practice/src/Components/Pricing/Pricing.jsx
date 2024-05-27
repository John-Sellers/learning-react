import React, { useState } from 'react';
import styles from './Pricing.module.css'; // Import CSS for styling

function Pricing() {

    const handleClick = (e) => e.target.textContent = "Got Started"


    return (
        <div className={styles.pricingContainer}>
            <h2>Choose a Plan</h2>
            <div className={styles.pricingCards}>
                <div className={styles.pricingCard}>
                    <h3>Basic Plan</h3>
                    <p>Perfect for starters</p>
                    <div className={styles.price}>$9.99/month</div>
                    <ul>
                        <li>5 GB Storage</li>
                        <li>10 Projects</li>
                        <li>Email Support</li>
                    </ul>
                    <button onClick={handleClick}>Get Started</button>
                </div>
                <div className={styles.pricingCard}>
                    <h3>Pro Plan</h3>
                    <p>For growing businesses</p>
                    <div className={styles.price}>$19.99/month</div>
                    <ul>
                        <li>15 GB Storage</li>
                        <li>Unlimited Projects</li>
                        <li>Priority Support</li>
                    </ul>
                    <button onClick={handleClick}>Get Started</button>
                </div>
                <div className={styles.pricingCard}>
                    <h3>Enterprise Plan</h3>
                    <p>For large organizations</p>
                    <div className={styles.price}>Contact Us</div>
                    <ul>
                        <li>50 GB Storage</li>
                        <li>Unlimited Projects</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button onClick={handleClick}>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
