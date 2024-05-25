import React, { useState } from 'react';

function ArrayUpdater() {

    const [fruit, setFruit] = useState(['Pineapple', 'Grapefruit', 'Dragon Fruit', 'Apple']);
    const [error, setError] = useState("")

    function handleFruitChange() {
        const newFruit = document.getElementById('fruitInput').value;
        document.getElementById("fruitInput").value = "";

        if (newFruit !== '') {
            setFruit(f => [...f, newFruit]);
            setError("")
        }
        else {
            setError("Please provide a valid input")
        }
    };

    function handleRemoveFruit(index) {
        setFruit(fruit.filter((_, i) => i !== index))
    };

    return (
        <div>
            <h1>List of Fruits</h1>
            <ul>
                {fruit.map((item, index) => (<li key={index} onClick={() => handleRemoveFruit(index)}>{item}</li>))}
            </ul>
            <input type="text" id='fruitInput' placeholder='Input a fruit to add' />
            <button onClick={handleFruitChange}>Add Fruit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );

};

export default ArrayUpdater;