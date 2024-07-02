import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export function Homepage_SignUp() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Registration successful!');
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">Join Us In Our Revolution</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Name" required /><br />
                <input type="tel" name="contact" placeholder="Phone number" required /><br />
                <input type="email" name="email" placeholder="Email" required /><br />
                <input type="password" name="createpass" placeholder="Create Password" required /><br />
                <input type="password" name="confirmpass" placeholder="Confirm Password" required /><br />
                <input type="text" name="company" placeholder="Company Name" required /><br />
                <button type="submit">Register</button><br />
                <Link to="/login" className="link">Already Registered? Login now</Link><br />
            </form>
        </div>
    );

}
export function Homepage_Login() {
    return (
        <div className="form-container">
            <h2 className="form-heading">Login and make a positive impact on society</h2>
            <form>
                <input type="email" name="email" placeholder="Email" required /><br />
                <input type="password" name="password" placeholder="Enter Your Password" required /><br />
                <Link to="/dashboard"><button type="submit">Login</button><br /></Link>
                <Link to="/signin" className="link">Not registered? SignUp Here</Link><br />
            </form>
        </div>
    );
}

