import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true); // State để chuyển đổi giữa Login và Register
    const navigate = useNavigate(); // Hook điều hướng

    // Hàm xử lý khi đăng nhập thành công
    const handleLoginSuccess = (role) => {
        if (role === 'customer') {
            navigate('/CustomerMainPage'); // Điều hướng đến CustomerMainPage
        } else if (role === 'provider') {
            navigate('/CarProviderMainPage'); // Điều hướng đến CarProviderMainPage
        }
    };

    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="text-center mb-4 mt-4 d-flex justify-content-center gap-3">
                    <button
                        className={`btn ${showLogin ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setShowLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`btn ${!showLogin ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setShowLogin(false)}
                    >
                        Register
                    </button>
                </div>
                {showLogin ? (
                    <>
                        {/* Truyền hàm handleLoginSuccess xuống LoginForm */}
                        <LoginForm onLoginSuccess={handleLoginSuccess} />
                    </>
                ) : (
                    <>
                        <RegisterForm />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;