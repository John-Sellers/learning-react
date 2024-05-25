import React, { useState } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        /* 
        Takes the pending state to calculate the next state.
        React puts the updater function in a queue. During
        the next render, it will call them in the same order
        */

        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    };

    function decrementCount() {
        setCount(c => c - 1)
    };

    function resetCount() {
        setCount(0)
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={resetCount}>Reset Count</button>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}


export default MyComponent