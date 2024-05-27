import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './SignIn.module.css'; // Import CSS for styling

function SignIn() {

    return (
        <div className={styles.signInContainer}>
            <h2>Sign In</h2>
            <form>
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
