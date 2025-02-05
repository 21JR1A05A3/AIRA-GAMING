// src/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                toast.success('Login successful');
                navigate('/home');
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
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn">Login</button>
                    <div className="signup-link">
                        <Link to="/register">Signup</Link>
                    </div>
                </form>
            </div>
            {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
            ))}
        </div>
    );
};

export default Login;