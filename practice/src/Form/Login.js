import React from 'react';
import './Login.css';

const login = () => {

    return (
        <div className="loginContainer">
            <h1 className="loginHeader">Login</h1>
            <hr />
            <form className="loginForm">
                <label>Email:</label>
                <input type="email" placeholder="Please enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Please enter your password" />

                <button>Submit</button>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default login; 