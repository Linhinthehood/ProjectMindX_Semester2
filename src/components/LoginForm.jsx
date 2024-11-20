import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            // Lấy dữ liệu từ MockAPI
            const customerResponse = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/Customer');
            const providerResponse = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider');

            // Tìm trong danh sách Customer
            const customer = customerResponse.data.find(
                (user) => user.Username === username && user.Password === password
            );

            if (customer) {
                setMessage("Login successful!");
                setMessageColor("primary");

                localStorage.setItem("CustomerID", customer.id); // Lưu ID khách hàng
                onLoginSuccess('customer'); // Gọi callback điều hướng đến CustomerMainPage
                return;
            }

            // Tìm trong danh sách CarProvider
            const provider = providerResponse.data.find(
                (user) => user.Username === username && user.Password === password
            );

            if (provider) {
                setMessage("Login successful!");
                setMessageColor("primary");

                localStorage.setItem("CarProviderID", provider.id); // Lưu ID nhà cung cấp xe
                onLoginSuccess('provider'); // Gọi callback điều hướng đến CarProviderMainPage
                return;
            }

            setMessage("Invalid username or password");
            setMessageColor("danger");
        } catch (error) {
            console.error("Error during login:", error);
            setMessage("An error occurred. Please try again.");
            setMessageColor("danger");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="mb-4 mt-4 card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                {message && (
                    <p className={`text-${messageColor} text-center`}>{message}</p>
                )}
                <form onSubmit={handleLogin}>
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
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="var(--secondary-color) btn-block mt-3">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;