import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCarForm = ({ selectedCar, onCarUpdated, onCarDeleted }) => {
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

    // Load dữ liệu của xe được chọn
    useEffect(() => {
        console.log("Selected Car in EditCarForm:", selectedCar);
        if (selectedCar) {
            setCarData(selectedCar);
        }
    }, [selectedCar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const carProviderID = localStorage.getItem("CarProviderID");
            const response = await axios.get(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`);
            const carProvider = response.data;

            const updatedCarList = carProvider.Car.map((car) =>
                car.CarName === selectedCar.CarName ? carData : car
            );

            await axios.put(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`, {
                ...carProvider,
                Car: updatedCarList
            });

            onCarUpdated(updatedCarList);
            alert('Car information updated successfully!');
        } catch (error) {
            console.error("Error saving car data:", error);
            alert('Failed to save car data. Please try again.');
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Bạn có chắc chắn xoá thông tin xe này hay không?");
        if (!confirmDelete) return;

        try {
            const carProviderID = localStorage.getItem("CarProviderID");
            const response = await axios.get(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`);
            const carProvider = response.data;

            const updatedCarList = carProvider.Car.filter(
                (car) => car.CarName !== selectedCar.CarName
            );

            await axios.put(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`, {
                ...carProvider,
                Car: updatedCarList
            });

            onCarDeleted(updatedCarList);
            alert('Car deleted successfully!');
        } catch (error) {
            console.error("Error deleting car:", error);
            alert('Failed to delete car. Please try again.');
        }
    };

    if (!selectedCar) return null; // Không hiển thị gì nếu chưa có xe được chọn

    return (
        <>
            {/* Modal */}
            <div
                className="modal fade show"
                style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Car: {carData.CarName}</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Car Name</label>
                                    <input
                                        type="text"
                                        name="CarName"
                                        value={carData.CarName}
                                        onChange={handleChange}
                                        className="form-control"
                                        disabled // Không cho phép đổi tên xe
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
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Availability</label>
                                    <select
                                        name="Availability"
                                        value={carData.Availability}
                                        onChange={(e) =>
                                            setCarData({ ...carData, Availability: e.target.value === 'true' })
                                        }
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
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="Description"
                                        value={carData.Description}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success" onClick={handleSave}>
                                Save
                            </button>
                            <button className="btn btn-danger" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditCarForm;