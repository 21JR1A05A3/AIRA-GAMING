// src/Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './style.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, confirmPassword }),
            });

            if (response.ok) {
                toast.success('User registered successfully');
                navigate('/'); // Replace with your actual login route
            } else {
                const data = await response.json();
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container">
            <Toaster />
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-box">
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>Confirm Password</label>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="signup-link">
                        <Link to="/">SignIn</Link>
                    </div>
                </form>
            </div>
            {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
            ))}
        </div>
    );
};

export default Register;