import React, { useState } from 'react'
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <>
            <main>
                <section className={styles.section1}>
                    <div className={styles.callToAction}>
                        <h1 className={styles.firstHeader}>
                            Generate internal documentation for your company in no time
                        </h1>
                        <h2 className={styles.secondHeader}>
                            No longer will it take days to create documentation, cut down on internal
                            creation by up to 80%
                        </h2>
                        <div className={styles.buttons}>
                            <button className={styles.getStartedButton}>Get Started</button>
                            <button className={styles.requestDemoButton}>Request Demo</button>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src='/doc.jpg' alt='Documentation Image' />
                    </div>
                    <div>
                    </div>
                </section>
                <section className={styles.section2}>
                    <div className={styles.whatWeDoImage}>
                        <img src="/vite.svg" alt="Very Cool Logo" className={styles.imageLogo} />
                    </div>
                    <div className={styles.whatWeDoContent}>
                        <h1 className={styles.whatWeDoHeading}>
                            What We Do
                        </h1>
                        <p className={styles.missionStatement}>
                            At *insert company name here* we make it our mission to give you your time
                            time back. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                            maxime voluptatum, accusantium dicta velit, sint repellat iusto consequuntur
                            neque suscipit est dolor sunt fuga consequatur omnis praesentium cum deserunt tempora.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam beatae ex repudiandae!
                            Beatae unde debitis impedit labore sit dignissimos! Alias non hic quasi, voluptas
                            eligendi omnis quam nisi ab eius.
                        </p>
                        <p className={styles.missionStatement}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptatum dolor!
                            Facere soluta magni ratione voluptatem deleniti minus libero et aliquam, non fugit
                            ab explicabo dignissimos quibusdam. Saepe, dolorum eligendi? Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Quasi labore repellendus unde dolores repellat a
                            ipsum recusandae inventore enim ex iste at veritatis laborum eveniet velit, optio
                            commodi similique reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. At fugit, doloribus ullam aliquam impedit, dignissimos illum blanditiis laborum
                            deleniti laudantium aperiam assumenda ea odit deserunt tempora delectus sequi placeat
                            necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
                            porro?
                        </p>
                    </div>
                </section>
                <section className={styles.section3}>
                    <div className={styles.benefitsHeaderContainer}>
                        <h1 className={styles.benefitsHeader}>Benefits of Using Our Product</h1>
                    </div>
                    <div className={styles.benefitsContainer}>
                        <div className={styles.benefits}>
                            <img src="/efficient.jpeg" alt="Improve efficiency" className={styles.benefitsImage} />
                            <p className={styles.benefitsDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={styles.benefits}>
                            <img src="/better_service.jpeg" alt="Improve customer service" className={styles.benefitsImage} />
                            <p className={styles.benefitsDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={styles.benefits}>
                            <img src="/fast.jpeg" alt="Very fast that it saves time" className={styles.benefitsImage} />
                            <p className={styles.benefitsDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={styles.benefits}>
                            <img src="/ml.jpeg" alt="Cutting edge machine learning" className={styles.benefitsImage} />
                            <p className={styles.benefitsDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage