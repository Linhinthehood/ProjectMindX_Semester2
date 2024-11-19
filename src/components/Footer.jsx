import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; 2023 Car Rent Morent. All rights reserved.</p>
                <p className='d-flex justify-content-center gap-3'>
                    <a href="/terms" className="text-white mr-3">Terms of Service</a>
                    <a href="/privacy" className="text-white">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;