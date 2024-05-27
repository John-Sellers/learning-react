import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './SignUp.module.css';

function SignUp() {
    return (
        <div className={styles.signUpContainer}>
            <h2>Sign Up</h2>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    minLength={6} // Example: Minimum 6 characters
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <div className={styles.signInLink}>
                <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </div>
    );
}

export default SignUp;
