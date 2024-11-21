import React from 'react';

const CarItemCustomer = ({ car }) => {
    const { CarName, CarType, PricePerDay, Availability, Description, Image, DateAdd, Color } = car;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={Image} className="card-img-top" alt={CarName} />
                <div className="card-body">
                    <h5 className="card-title">{CarName}</h5>
                    <p className="card-text">Type: {CarType}</p>
                    <p className="card-text">Price/Day: ${PricePerDay}</p>
                    <p className="card-text">Available: {Availability ? "Yes" : "No"}</p>
                    <p className="card-text">Color: {Color}</p>
                    <p className="card-text">Added on: {DateAdd}</p>
                    <p className="card-text">{Description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CarItemCustomer;