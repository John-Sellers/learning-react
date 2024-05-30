import React from "react";
import styles from "./StickyFooter.module.css"

export function StickyFooter() {
    return (
        <div className={styles.StickyFooterContainer}>
            <p className={styles.StickyFooterContent}>
                This web application is currently under construction
            </p>
        </div>
    )
}