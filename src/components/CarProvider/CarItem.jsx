import React from 'react';

const CarItem = ({ car, onEditCar }) => {
    const { CarName, CarType, PricePerDay, Availability, Description, Image, DateAdd, Color, Year, Brand, Location, FuelType, PassengerCapacity } = car;

    const handleEdit = () => {
        onEditCar(car); // Truyền dữ liệu xe lên cha
    };

    return (
        <>
            {/* Car Card */}
            <div className="col-md-4 mb-4">
                <div className="card" onClick={handleEdit} style={{ cursor: 'pointer' }}>
                    <img src={Image} className="card-img-top" alt={CarName} />
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
                        <p className="card-text">Color: {Color}</p>
                        <p className="card-text">Added on: {DateAdd}</p>
                        <p className="card-text">{Description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarItem;