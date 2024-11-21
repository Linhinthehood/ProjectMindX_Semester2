import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-dark container">
                <div className="d-flex justify-content-between w-100">
                    <a className="navbar-brand" href="/">Car Rent Morent</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;