import React from 'react';

const CarProviderHeader = () => {
    
    const handleLogout = () => {
        localStorage.removeItem("CarProviderID");
        window.location.href = "/"; 
    };

    const handleClick = (e) => {
        e.preventDefault(); 
        alert("This feature is under development.");
    };

    return (
        <header>
            <nav className="navbar navbar-dark container">
                <div className="d-flex justify-content-between w-100">
                    <a className="navbar-brand" href="/">CAR RENTAL SYSTEM</a>
                    <div className='d-flex gap-3'>
                        <a href="/" onClick={handleClick} className="hover-underline">News</a>
                        <a href="/" onClick={handleClick} className="hover-underline">Reviews</a>
                        <a className="d-flex hover-underline" onClick={handleLogout}>Logout</a>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}

export default CarProviderHeader;