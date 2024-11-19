import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarList from './CarList';
import AddCarForm from './AddCarForm';

const CarProviderDashboard = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCarProviderData = async () => {
            try {
                // Lấy ID từ localStorage
                const carProviderID = localStorage.getItem("CarProviderID");

                if (!carProviderID) {
                    console.error("No CarProvider ID found in localStorage");
                    return;
                }

                // Sử dụng template string đúng cách để thay thế ID trong URL
                const response = await axios.get(`https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`);
                const carProvider = response.data;

                console.log("Car Provider Data:", carProvider); // Kiểm tra dữ liệu CarProvider

                if (carProvider && carProvider.Car) {
                    console.log("Car List:", carProvider.Car); // Kiểm tra danh sách xe
                    const flatCarList = Array.isArray(carProvider.Car[0]) ? carProvider.Car.flat() : carProvider.Car;
                    console.log("Flattened Car List:", flatCarList); // Kiểm tra mảng đã làm phẳng
                    setCars(flatCarList); // Gắn CarList vào state
                } else {
                    console.error("Car data not found for this provider.");
                }
            } catch (error) {
                console.error("Error fetching Car Provider data:", error);
            }
        };

        fetchCarProviderData();
    }, []);

    const handleCarAdded = (updatedCarList) => {
        setCars(updatedCarList); // Cập nhật danh sách xe khi thêm xe mới
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Car Provider Dashboard</h1>
            {/* Hiển thị form thêm xe */}
            <AddCarForm onCarAdded={handleCarAdded} />
            {/* Hiển thị danh sách xe */}
            <CarList cars={cars} />
        </div>
    );
};

export default CarProviderDashboard;