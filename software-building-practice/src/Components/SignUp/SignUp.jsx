// Import React and useState hook to manage state within the component
import React, { useState } from 'react';
// Import Link component from react-router-dom to handle navigation
import { Link } from 'react-router-dom';
// Import the Supabase client configuration we set up earlier
import supabase from './SupabaseClient';
// Import CSS module for styling the component
import styles from './SignUp.module.css';

// Define the SignUp functional component
function SignUp() {
    // Initialize formData state to manage the values of the form inputs
    const [formData, setFormData] = useState({
        username: '', // Initial value for username input
        email: '',    // Initial value for email input
        password: '', // Initial value for password input
        confirmPassword: '' // Initial value for confirm password input
    });

    // Initialize formErrors state to manage validation error messages
    const [formErrors, setFormErrors] = useState({});

    // Initialize isSubmitting state to manage the form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Event handler function for handling changes to input fields
    const handleChange = (e) => {
        // Destructure name and value from the event target (input element)
        const { name, value } = e.target;
        // Update the formData state with the new value for the specific input field
        setFormData({
            ...formData, // Spread the current formData state to retain other values
            [name]: value // Update the specific field (name) with the new value
        });
    };

    // Function to validate the form inputs
    const validate = () => {
        // Initialize an empty object to store any validation errors
        let errors = {};

        // Check if the username field is empty
        if (!formData.username) {
            errors.username = 'Username is required'; // Set an error message if empty
        }
        // Check if the email field is empty
        if (!formData.email) {
            errors.email = 'Email is required'; // Set an error message if empty
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            // Use a regular expression to check if the email format is valid
            errors.email = 'Email is invalid'; // Set an error message if invalid
        }
        // Check if the password field is empty
        if (!formData.password) {
            errors.password = 'Password is required'; // Set an error message if empty
        } else if (formData.password.length < 6) {
            // Check if the password length is less than 6 characters
            errors.password = 'Password must be at least 6 characters'; // Set an error message if too short
        }
        // Check if the confirmPassword field is empty
        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password'; // Set an error message if empty
        } else if (formData.confirmPassword !== formData.password) {
            // Check if the confirmPassword matches the password
            errors.confirmPassword = 'Passwords do not match'; // Set an error message if they don't match
        }

        // Update the formErrors state with any validation errors
        setFormErrors(errors);
        // Return true if no errors (valid), false otherwise (invalid)
        return Object.keys(errors).length === 0;
    };

    // Event handler function for handling form submission
    const handleSubmit = async (e) => {
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();
        // Validate the form inputs before proceeding
        if (validate()) {
            // Set the isSubmitting state to true to indicate form submission in progress
            setIsSubmitting(true);
            // Attempt to sign up the user with Supabase using the email and password from formData
            const { user, error } = await supabase.auth.signUp({
                email: formData.email, // User's email
                password: formData.password, // User's password
            });

            // Check if there was an error during sign-up
            if (error) {
                // Log the error message to the console for debugging
                console.error('Error during sign up:', error.message);
                // Update the formErrors state with the server error message
                setFormErrors({ server: error.message });
            } else {
                // Log the user information to the console on successful sign-up
                console.log('Sign up successful:', user);
                // Optional: Redirect the user to a different page (e.g., login or dashboard)
                // window.location.href = '/login';
            }
            // Reset the isSubmitting state to false after the sign-up process completes
            setIsSubmitting(false);
        }
    };

    // Return the JSX structure for the sign-up form
    return (
        // Container div for the sign-up form, styled using CSS module
        <div className={styles.signUpContainer}>
            {/* Heading for the sign-up form */}
            <h2>Sign Up</h2>
            {/* Form element with onSubmit handler */}
            <form onSubmit={handleSubmit}>
                {/* Username input field */}
                <input
                    type="text" // Input type is text
                    name="username" // Name attribute for identifying the field
                    placeholder="Username" // Placeholder text
                    value={formData.username} // Bind input value to formData state
                    onChange={handleChange} // Event handler for input changes
                    required // HTML5 validation for required field
                />
                {/* Display validation error for username if present */}
                {formErrors.username && <span className={styles.error}>{formErrors.username}</span>}

                {/* Email input field */}
                <input
                    type="email" // Input type is email
                    name="email" // Name attribute for identifying the field
                    placeholder="Email" // Placeholder text
                    value={formData.email} // Bind input value to formData state
                    onChange={handleChange} // Event handler for input changes
                    required // HTML5 validation for required field
                />
                {/* Display validation error for email if present */}
                {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}

                {/* Password input field */}
                <input
                    type="password" // Input type is password
                    name="password" // Name attribute for identifying the field
                    placeholder="Password" // Placeholder text
                    value={formData.password} // Bind input value to formData state
                    onChange={handleChange} // Event handler for input changes
                    minLength={6} // HTML5 validation for minimum length
                    required // HTML5 validation for required field
                />
                {/* Display validation error for password if present */}
                {formErrors.password && <span className={styles.error}>{formErrors.password}</span>}

                {/* Confirm Password input field */}
                <input
                    type="password" // Input type is password
                    name="confirmPassword" // Name attribute for identifying the field
                    placeholder="Confirm Password" // Placeholder text
                    value={formData.confirmPassword} // Bind input value to formData state
                    onChange={handleChange} // Event handler for input changes
                    minLength={6} // HTML5 validation for minimum length
                    required // HTML5 validation for required field
                />
                {/* Display validation error for confirm password if present */}
                {formErrors.confirmPassword && <span className={styles.error}>{formErrors.confirmPassword}</span>}

                {/* Submit button */}
                <button type="submit" disabled={isSubmitting}>
                    {/* Conditional text based on isSubmitting state */}
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
                {/* Display server error if present */}
                {formErrors.server && <span className={styles.error}>{formErrors.server}</span>}
            </form>
            {/* Link to the sign-in page for users who already have an account */}
            <div className={styles.signInLink}>
                <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </div>
    );
}

// Export the SignUp component as the default export
export default SignUp;
