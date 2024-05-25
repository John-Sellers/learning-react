import React, { useState } from 'react';

function AnotherComponent() {
    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    function handleCarAdd() {
        const newCar = {
            year: year,
            make: make,
            model: model,
        };

        setCar(c => [...c, newCar]);

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }

    function handleCarRemove(index) {
        setCar(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e) {
        setYear(e.target.value);
    }

    function handleMakeChange(e) {
        setMake(e.target.value);
    }

    function handleModelChange(e) {
        setModel(e.target.value);
    }

    return (
        <div>
            <h2>Welcome to The Car Shop</h2>
            <ul>
                {car.map((car, index) => (
                    <li key={index} onClick={() => handleCarRemove(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={year} onChange={handleYearChange} /><br />
            <input type="text" value={make} onChange={handleMakeChange} placeholder="Enter car make" /><br />
            <input type="text" value={model} onChange={handleModelChange} placeholder="Enter car model" /><br />
            <button onClick={handleCarAdd}>Add Car</button>
        </div>
    );
}

export default AnotherComponent;