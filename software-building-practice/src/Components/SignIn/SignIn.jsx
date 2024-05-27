import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './SignIn.module.css'; // Import CSS for styling

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign in logic here
        console.log(formData); // For demonstration, log the form data
    };

    return (
        <div className={styles.signInContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    minLength={6} // Example: Minimum 6 characters
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            <div className={styles.signUpLink}>
                <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignIn;
