import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarItemCustomer from './CarItemCustomer';

const CarListCustomer = () => {
    const [cars, setCars] = useState([]); // Danh sách tất cả các xe
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Lỗi nếu có

    useEffect(() => {
        const fetchCars = async () => {
            try {
                // Gửi yêu cầu lấy danh sách tất cả CarProvider
                const response = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider');
                const providers = response.data;

                // Gộp tất cả danh sách xe từ các CarProvider
                const allCars = providers.flatMap(provider => provider.Car || []);
                setCars(allCars); // Lưu danh sách xe
                setLoading(false);
            } catch (err) {
                console.error("Error fetching cars:", err);
                setError("Failed to load cars. Please try again.");
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <p className="text-center">Loading cars...</p>;
    }

    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }

    if (cars.length === 0) {
        return <p className="text-center">No cars available at the moment.</p>;
    }

    return (
        <div>
            <h2 className="text-center my-4">Available Cars</h2>
            <div className="row">
                {cars.map((car, index) => (
                    <CarItemCustomer key={index} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarListCustomer;