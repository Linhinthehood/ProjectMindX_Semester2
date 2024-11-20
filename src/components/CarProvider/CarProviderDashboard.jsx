import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarList from './CarList';
import AddCarForm from './AddCarForm';
import EditCarForm from './EditCarForm';

const CarProviderDashboard = () => {
    const [cars, setCars] = useState([]); // Danh sách xe
    const [userName, setUsername] = useState(''); // Tên người dùng
    const [selectedCar, setSelectedCar] = useState(null); // Xe được chọn để chỉnh sửa

    useEffect(() => {
        const fetchCarProviderData = async () => {
            try {
                const carProviderID = localStorage.getItem("CarProviderID");

                if (!carProviderID) {
                    console.error("No CarProvider ID found in localStorage");
                    return;
                }

                const response = await axios.get(
                    `https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider/${carProviderID}`
                );
                const carProvider = response.data;

                if (carProvider) {
                    setUsername(carProvider.Username); // Lưu tên người dùng
                    if (carProvider.Car) {
                        const flatCarList = Array.isArray(carProvider.Car[0])
                            ? carProvider.Car.flat()
                            : carProvider.Car;
                        setCars(flatCarList); // Cập nhật danh sách xe
                    }
                } else {
                    console.error("Car Provider data not found.");
                }
            } catch (error) {
                console.error("Error fetching Car Provider data:", error);
            }
        };

        fetchCarProviderData();
    }, []);

    // Hàm xử lý cập nhật danh sách xe sau khi chỉnh sửa hoặc thêm xe
    const handleCarUpdated = (updatedCarList) => {
        setCars(updatedCarList);
        setSelectedCar(null); // Đóng modal sau khi chỉnh sửa
    };

    // Hàm xử lý khi chọn chỉnh sửa xe
    const handleEditCar = (car) => {
        setSelectedCar(car); // Đặt xe đang được chỉnh sửa
    };

    // Hàm đóng modal (nếu modal bị đóng thủ công)
    const handleCloseEditCarForm = () => {
        setSelectedCar(null); // Đặt lại selectedCar về null
    };

    return (
        <div className="container">
            <h1 className="my-4">Welcome back, {userName}</h1>
            {/* Form thêm xe */}
            <AddCarForm onCarAdded={(updatedCarList) => setCars(updatedCarList)} />
            {/* Form chỉnh sửa xe */}
            {selectedCar && (
                <EditCarForm
                    selectedCar={selectedCar}
                    onCarUpdated={handleCarUpdated}
                    onCarDeleted={handleCarUpdated} // Cập nhật danh sách khi xoá
                    onClose={handleCloseEditCarForm} // Đóng modal
                />
            )}
            {/* Hiển thị danh sách xe */}
            <CarList
                cars={cars}
                onEditCar={handleEditCar} // Truyền hàm chỉnh sửa xuống CarItem
            />
        </div>
    );
};

export default CarProviderDashboard;