import React, {useState} from 'react';
import RentCar from './RentCar'; 

const CarItemCustomer = ({ car }) => {
    const { CarName, CarType, PricePerDay, Availability, Description, Image, DateAdd, Color, Year, Brand, Location, FuelType, PassengerCapacity } = car;

    const [showRentModal, setShowRentModal] = useState(false);

    return (
        <div className="col-md-4 mb-4">
            <div className="card" onClick={() => setShowRentModal(true)}>
                <img src={Image} className="card-img-top fixed-image-customer" alt={CarName} />
                <div className="card-body">
                    <h5 className="card-title">{CarName}</h5>
                    <p className="card-text">Type: {CarType}</p>
                    <p className="card-text">Price/Day: ${PricePerDay}</p>
                    <p className="card-text">Available: {Availability ? "Yes" : "No"}</p>
                    <p className="card-text">Color: {Color}</p>
                    <p className="card-text">Year: {Year}</p>
                    <p className="card-text">Brand: {Brand}</p>
                    <p className="card-text">Location: {Location}</p>
                    <p className="card-text">Fuel Type: {FuelType}</p>
                    <p className="card-text">Passenger Capacity: {PassengerCapacity}</p>
                    <p className="card-text">Added on: {DateAdd}</p>
                    <p className="card-text">{Description}</p>
                </div>
            </div>
        {showRentModal && <RentCar car={car} onClose={() => setShowRentModal(false)} />}
        </div>
    );
};

export default CarItemCustomer;