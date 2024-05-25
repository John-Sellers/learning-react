import React, { useState } from "react"

function MyComponent() {

    const [name, setName] = useState("Name");
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value);
    };

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    };

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <textarea value={comment} placeholder="Please leave a comment..." onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select An Option</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="American Express">American Express</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping} </p>
        </>
    );
};

export default MyComponent