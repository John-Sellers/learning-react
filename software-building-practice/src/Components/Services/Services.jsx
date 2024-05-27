// src/components/Services.js

import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <main className={styles.servicesContainer}>
            <section className={styles.section}>
                <div className={`${styles.service} ${styles.callToAction}`}>
                    <h1 className={styles.firstHeader}>Our Services</h1>
                    <p className={styles.missionStatement}>
                        At DocuGen, we specialize in leveraging large language models (LLMs) to create comprehensive and accurate internal documentation tailored for the B2B market. Our services are designed to streamline your internal processes, enhance knowledge sharing, and improve overall efficiency.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.service} ${styles.whatWeDoContent}`}>
                    <h2 className={styles.whatWeDoHeading}>Automated Documentation Creation</h2>
                    <p className={styles.missionStatement}>
                        Using state-of-the-art LLMs, we generate high-quality documentation that is precise, contextually relevant, and tailored to your business needs. Our automated systems ensure that your documentation is always up-to-date and accurate.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.service} ${styles.whatWeDoContent}`}>
                    <h2 className={styles.whatWeDoHeading}>Customizable Templates</h2>
                    <p className={styles.missionStatement}>
                        We offer a variety of customizable templates to suit different types of documentation requirements. Whether you need technical manuals, user guides, or policy documents, we have templates that fit your needs.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.service} ${styles.whatWeDoContent}`}>
                    <h2 className={styles.whatWeDoHeading}>Integration with Existing Systems</h2>
                    <p className={styles.missionStatement}>
                        Our solutions seamlessly integrate with your existing systems and workflows. This ensures that the documentation process is smooth and that there is minimal disruption to your current operations.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.service} ${styles.whatWeDoContent}`}>
                    <h2 className={styles.whatWeDoHeading}>Consulting and Support</h2>
                    <p className={styles.missionStatement}>
                        Our team of experts is available to provide consulting services and ongoing support to ensure that you get the most out of our documentation solutions. We are here to help you every step of the way.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Services;