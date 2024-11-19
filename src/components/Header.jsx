import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem("CarProviderID");
        window.location.href = "/"; // Chuyển về trang đăng nhập
    };

    return (
        <header className="bg-primary text-white">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <a className="navbar-brand" href="/">Car Rent Morent</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;