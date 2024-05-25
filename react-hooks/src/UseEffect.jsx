/* 
useEffect(function, [dependencies])

1. useEffect(() => {})          //Runs after every re-render
2. useEffect(() => {}, [])      // Runs only on mount (when something is added to the DOM)
3. useEffect(() => {}, [value]) // Runs on mount + when a value changes
*/

import React, { useState, useEffect } from "react";

function UseEffectPrac() {

    // const [count, setCount] = useState(0);

    // useEffect(
    //     () => {
    //         document.title = `Counted: ${count}`
    //     }
    // );

    // function incrementCount() {
    //     setCount(c => c + 1);
    // };

    // function decrementCount() {
    //     setCount(c => c - 1);
    // };

    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={decrementCount}>Decrement Count</button>
    //         <button onClick={incrementCount}>Increment Count</button>
    //     </div>
    // );

    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerHeight);

    useEffect(
        () => {
            window.addEventListener("resize", handleWindowSize);
            console.log("Added Event Listener");

            return () => {
                window.removeEventListener("resize", handleWindowSize)
                console.log("Removed Window Listener")
            }
        },
        []
    )

    useEffect(
        () => {
            document.title = `Size: ${width} x ${heigth}`
        }
    )

    function handleWindowSize() {
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
    }

    return (
        <div>
            <p>Window Height: {heigth}px</p>
            <p>Window Width: {width}px</p>
        </div>
    );
};


export default UseEffectPrac;