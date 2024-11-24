import React from 'react';
import './HoverUnderline.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const handleClick = (e) => {
        e.preventDefault(); 
        alert("This feature is under development.");
    };

    return (
        <footer className="text-center py-3">
            <div className="container">
                <p>&copy; 2023 Car Rent Morent. All rights reserved.</p>
                <p className='d-flex justify-content-center gap-3'>
                    <a href="/" className="mr-3 hover-underline" onClick={handleClick}>Terms of Service</a>
                    <a href="/" className="hover-underline" onClick={handleClick}>Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;