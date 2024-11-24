import React, { useState } from 'react';
import axios from 'axios';

const RentCar = ({ car, onClose, updateCars }) => {
    const [rentStartDay, setRentStartDay] = useState('');
    const [rentEndDay, setRentEndDay] = useState('');

    const handleRent = async () => {
        if (!rentStartDay || !rentEndDay) {
            alert("Please select both start and end dates.");
            return;
        }

        const confirmation = `Are you sure you want to rent ${car.CarName} from ${rentStartDay} to ${rentEndDay}?`;
        if (window.confirm(confirmation)) {
            try {
                const updatedCar = { ...car, Availability: false };
                const carProviderID = car.ProviderID; 
                const response = await axios.put(
                    `https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`,
                    { ...updatedCar }
                );

                if (response.status === 200) {
                    alert("Car rented successfully!");
                    updateCars(car.CarName); // Update the cars list in the parent component
                    onClose(); // Close modal
                }
            } catch (error) {
                console.error("Error renting the car:", error);
                alert("Failed to rent the car. Please try again.");
            }
        }
    };

    return (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Rent {car.CarName}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <img src={car.Image} alt={car.CarName} className="img-fluid" />
                        <p>Price/Day: ${car.PricePerDay}</p>
                        <div>
                            <label htmlFor="rent-start-day">Rent Start Day:</label>
                            <input
                                type="date"
                                id="rent-start-day"
                                value={rentStartDay}
                                onChange={(e) => setRentStartDay(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div>
                            <label htmlFor="rent-end-day">Rent End Day:</label>
                            <input
                                type="date"
                                id="rent-end-day"
                                value={rentEndDay}
                                onChange={(e) => setRentEndDay(e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleRent}>
                            Rent
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentCar;