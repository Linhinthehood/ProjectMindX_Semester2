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
        Color: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/1');
            const carProvider = response.data;

            if (carProvider && carProvider.Car) {
                const updatedCarList = [...carProvider.Car, { ...carData, DateAdd: new Date().toLocaleDateString('en-GB') }];

                await axios.put(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/1`, {
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
        <form onSubmit={handleSubmit} className="mb-4">
            <h3>Add a New Car</h3>
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
            <button type="submit" className="btn btn-primary">Add Car</button>
        </form>
    );
};

export default AddCarForm;