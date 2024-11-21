import React, { useState } from 'react';
import axios from 'axios';

const AddCarForm = ({ onCarAdded }) => {
    const [carData, setCarData] = useState({
        CarName: '',
        CarType: '',
        PricePerDay: '',
        Availability: true,
        Description: '',
        Image: '',
        DateAdd: '',
        Color: '',
        Year: '',               
        Brand: '',               
        Location: '',            
        FuelType: 'Petrol',      
        PassengerCapacity: ''    
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const carProviderID = localStorage.getItem("CarProviderID");
            const response = await axios.get(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`);
            const carProvider = response.data;

            if (carProvider && carProvider.Car) {
                const updatedCarList = [...carProvider.Car, { ...carData, DateAdd: new Date().toLocaleDateString('en-GB') }];

                await axios.put(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`, {
                    ...carProvider,
                    Car: updatedCarList
                });

                setCarData({
                    CarName: '',
                    CarType: '',
                    PricePerDay: '',
                    Availability: true,
                    Description: '',
                    Image: '',
                    DateAdd: '',
                    Color: ''
                });

                if (onCarAdded) {
                    onCarAdded(updatedCarList); // Cập nhật danh sách xe ở cấp cha
                }

                alert('Car added successfully!');
            } else {
                alert('Car Provider data not found!');
            }
        } catch (error) {
            console.error('Error adding car:', error);
            alert('Failed to add car. Please try again.');
        }
    };

    return (
        <>
            {/* Nút mở modal */}
            <button
                type="button"
                className="var(--secondary-color) mb-3"
                data-bs-toggle="modal"
                data-bs-target="#addCarModal"
            >
                Add New Car
            </button>

            {/* Modal */}
            <div
                className="modal fade "
                id="addCarModal"
                tabIndex="-1"
                aria-labelledby="addCarModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog ">
                    <div
                        className="modal-content var(--background-color) "
                        style={{ backgroundColor: 'var(--background-color)' }}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCarModalLabel">Add a New Car</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Car Name</label>
                                    <input
                                        type="text"
                                        name="CarName"
                                        value={carData.CarName}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Car Type</label>
                                    <input
                                        type="text"
                                        name="CarType"
                                        value={carData.CarType}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Price Per Day</label>
                                    <input
                                        type="number"
                                        name="PricePerDay"
                                        value={carData.PricePerDay}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Availability</label>
                                    <select
                                        name="Availability"
                                        value={carData.Availability}
                                        onChange={(e) => setCarData({ ...carData, Availability: e.target.value === 'true' })}
                                        className="form-control"
                                    >
                                        <option value="true">Available</option>
                                        <option value="false">Not Available</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Color</label>
                                    <input
                                        type="text"
                                        name="Color"
                                        value={carData.Color}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image URL</label>
                                    <input
                                        type="text"
                                        name="Image"
                                        value={carData.Image}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="Description"
                                        value={carData.Description}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Year</label>
                                    <input
                                        type="number"
                                        name="Year"
                                        value={carData.Year}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Brand</label>
                                    <input
                                        type="text"
                                        name="Brand"
                                        value={carData.Brand}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        name="Location"
                                        value={carData.Location}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Fuel Type</label>
                                    <select
                                        name="FuelType"
                                        value={carData.FuelType}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Passenger Capacity</label>
                                    <input
                                        type="number"
                                        name="PassengerCapacity"
                                        value={carData.PassengerCapacity}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <button type="submit" className="var(--secondary-color) mt-3">Add Car</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCarForm;