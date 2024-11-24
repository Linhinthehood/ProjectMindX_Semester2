import React from 'react';
import './HoverUnderline.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const handleClick = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        alert("This feature is under development.");
    };

    return (
        <header>
            <nav className="navbar navbar-dark container">
                <div className="d-flex justify-content-between w-100">
                    <a className="navbar-brand" href="/">CAR RENTAL SYSTEM</a>
                    <div className="d-flex gap-3">
                        <a href="/" onClick={handleClick} className="hover-underline">News</a>
                        <a href="/" onClick={handleClick} className="hover-underline">Reviews</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;