import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarItemCustomer from './CarItemCustomer'; // Giả sử rằng bạn dùng lại component này để hiển thị xe

const ShowCarRent = () => {
    const [rentedCars, setRentedCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRentedCars = async () => {
            try {
                const response = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider');
                const rentedCars = response.data.flatMap(provider => provider.Car.filter(car => !car.Availability));
                setRentedCars(rentedCars);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching cars:", err);
                setError("Failed to load cars. Please try again.");
                setLoading(false);
            }
        };

        fetchRentedCars();
    }, []);

    if (loading) return <p>Loading rented cars...</p>;
    if (error) return <p className="text-danger">{error}</p>;
    if (!rentedCars.length) return <p>No cars rented at the moment.</p>;

    return (
        <div>
            <h2>Rented Cars</h2>
            <div className="row">
                {rentedCars.map((car, index) => <CarItemCustomer key={index} car={car} />)}
            </div>
        </div>
    );
};

export default ShowCarRent;