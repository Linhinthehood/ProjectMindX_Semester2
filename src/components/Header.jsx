import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem("CarProviderID");
        window.location.href = "/"; // Chuyển về trang đăng nhập
    };

    return (
        <header>
            <nav className="navbar navbar-dark container">
                <div className="d-flex justify-content-between w-100">
                    <a className="navbar-brand" href="/">Car Rent Morent</a>
                    <button className="d-flex" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;