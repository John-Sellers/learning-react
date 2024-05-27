// src/components/AboutUs.js

import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
    return (
        <main className={styles.aboutUsContainer}>
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1 className={styles.firstHeader}>About Us</h1>
                    <p className={styles.missionStatement}>
                        DocuGen is dedicated to revolutionizing the way businesses handle internal documentation. Our team of experts leverages cutting-edge large language models (LLMs) to create precise, contextually relevant, and up-to-date documentation. Our mission is to streamline your internal processes and enhance knowledge sharing, ensuring your business runs smoothly and efficiently.
                    </p>
                </div>
                <div className={styles.image}>
                    <img src="path_to_your_image.jpg" alt="About Us Illustration" className={styles.imageLogo} />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.content}>
                    <h2 className={styles.subHeader}>Our Vision</h2>
                    <p className={styles.missionStatement}>
                        We envision a future where businesses are empowered with seamless and intelligent documentation solutions, allowing them to focus on innovation and growth. Our vision is to be the leading provider of AI-driven documentation services, setting new standards in the industry.
                    </p>
                </div>
                <div className={styles.image}>
                    <img src="path_to_your_image.jpg" alt="Vision Illustration" className={styles.imageLogo} />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.content}>
                    <h2 className={styles.subHeader}>Our Team</h2>
                    <p className={styles.missionStatement}>
                        Our team is comprised of skilled professionals with diverse backgrounds in AI, machine learning, and business consulting. We are passionate about leveraging technology to solve real-world problems and are committed to delivering exceptional service to our clients.
                    </p>
                </div>
                <div className={styles.image}>
                    <img src="path_to_your_image.jpg" alt="Team Illustration" className={styles.imageLogo} />
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
