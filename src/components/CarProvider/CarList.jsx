import React from 'react';
import CarItem from './CarItems';
const CarList = ({ cars }) => {
    if (!cars || cars.length === 0) {
        // Hiển thị thông báo nếu không có xe
        return <p className="text-center">No cars available</p>;
    }

    return (
        <div>
            <h2 className="text-center my-4">Car List</h2>
            <div className="row">
                {cars.map((car, index) => (
                    <CarItem key={index} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;