import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="text-center py-3">
            <div className="container">
                <p>&copy; 2023 Car Rent Morent. All rights reserved.</p>
                <p className='d-flex justify-content-center gap-3'>
                    <a href="/" className="mr-3">Terms of Service</a>
                    <a href="/" className="">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;