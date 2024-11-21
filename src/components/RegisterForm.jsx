import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('customer'); // Default role is 'customer'
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        if (username && email && password && role) {
            const userData = {
                Username: username,
                Email: email,
                Password: password,
                SetRole: role
            };

            try {
                let response;

                if (role === "customer") {
                    response = await axios.post('https://67397cbaa3a36b5a62eec16d.mockapi.io/Customer', userData);
                } else if (role === "provider") {
                    response = await axios.post('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider', userData);
                }

                console.log("API Response:", response.data);
                setMessage("Registration successful!");
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setRole('customer');
            } catch (error) {
                console.error("Error saving user data:", error);
                setMessage("Registration failed. Please try again.");
            }
        } else {
            setMessage("Please fill in all fields");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-4 mt-4 mb-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Register</h2>
                {message && <p className={`text-${message.includes('successful') ? 'primary' : 'danger'} text-center`}>{message}</p>}
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <select 
                            className="form-control" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="customer">Customer</option>
                            <option value="provider">Car Provider</option>
                        </select>
                    </div>
                    <button type="submit" className="var(--secondary-color) btn-block mt-3">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
