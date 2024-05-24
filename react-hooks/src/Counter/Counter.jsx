import React, { useState } from "react"
import styles from './Counter.module.css'

function Counter() {

    const [count, setCount] = useState(0)

    const incrementCount = () => setCount(count + 1)
    const decrementCount = () => setCount(count - 1)
    const resetCount = () => setCount(0)

    return (
        <div className={styles.counterContainer}>
            <p>{count}</p>
            <div className={styles.buttonContainer}>
                <button id={styles.decrementCounter} className={styles.button} onClick={decrementCount}>Decrement Count</button>
                <button id={styles.resetCounter} className={styles.button} onClick={resetCount}>Reset Count</button>
                <button id={styles.incrementCounter} className={styles.button} onClick={incrementCount}>Increment Count</button>
            </div>
        </div>
    );
}


export default Counter