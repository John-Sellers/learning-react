import React, { useState } from 'react'
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <>
            <main className={styles.section1}>
                <div className={styles.callToAction}>
                    <h1 className={styles.firstHeader}>
                        Generate Internal Documentation For Your Company In No Time
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
            </main>
            <main className={styles.section2}>
                <div className={styles.whatWeDoImage}>
                    <img src="/cool_logo.png" alt="Very Cool Logo" id={styles.picture} />
                </div>
                <div className={styles.whatWeDo}>
                    <h1 className={styles.whatWeDoHeading}>
                        What we do
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
                        porro? Nisi animi, enim quaerat maiores quod sed consectetur veniam debitis, facere
                        molestias eaque reiciendis pariatur tempora fugiat ea quo asperiores?
                    </p>
                </div>
            </main >
        </>
    )
}

export default HomePage