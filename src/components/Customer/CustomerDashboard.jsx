import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarListCustomer from './CarListCustomer';
import SearchCar from './SearchCar';
import ShowCarRent from './ShowCarRent';

const CustomerDashboard = () => {
    const [username, setUsername] = useState('');
    const [cars, setCars] = useState([]); // Tất cả xe
    const [filteredCars, setFilteredCars] = useState([]); // Xe sau khi lọc

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const customerID = localStorage.getItem('CustomerID');
                if (!customerID) {
                    console.error('No Customer ID found in localStorage');
                    return;
                }

                const response = await axios.get(
                    `https://67397cbaa3a36b5a62eec16d.mockapi.io/Customer/${customerID}`
                );
                const customerData = response.data;

                if (customerData) {
                    setUsername(customerData.Username);
                } else {
                    console.error('Customer data not found');
                }
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        const fetchCars = async () => {
            try {
                const response = await axios.get('https://67397cbaa3a36b5a62eec16d.mockapi.io/CarProvider');
                const allCars = response.data.flatMap((provider) => provider.Car || []);
                setCars(allCars);
                setFilteredCars(allCars); // Khởi tạo danh sách xe
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCustomerData();
        fetchCars();
    }, []);

    const handleFilterChange = (filters) => {
        let updatedCars = cars;

        if (filters.search) {
            updatedCars = updatedCars.filter((car) =>
                car.CarName.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.year.length > 0) {
            updatedCars = updatedCars.filter((car) => filters.year.includes(`${car.Year}`));
        }

        if (filters.brand) {
            updatedCars = updatedCars.filter((car) =>
                car.Brand.toLowerCase().includes(filters.brand.toLowerCase())
            );
        }

        if (filters.fuelType) {
            updatedCars = updatedCars.filter((car) => car.FuelType === filters.fuelType);
        }

        if (filters.passengerCapacity) {
            updatedCars = updatedCars.filter(
                (car) => car.PassengerCapacity >= parseInt(filters.passengerCapacity)
            );
        }

        if (filters.color) {
            updatedCars = updatedCars.filter((car) =>
                car.Color.toLowerCase().includes(filters.color.toLowerCase())
            );
        }

        updatedCars = updatedCars.filter(
            (car) => car.PricePerDay >= filters.priceRange[0] && car.PricePerDay <= filters.priceRange[1]
        );

        setFilteredCars(updatedCars);
    };

    return (
        <div className="container">
            <h1 className="my-4">Welcome back, {username}</h1>
            <div className="d-flex gap-3 align-items-start">
            <div style={{ flexShrink: 0, width: '300px' }}>
                <SearchCar onFilterChange={handleFilterChange} />
            </div>
            <div>
                <CarListCustomer cars={filteredCars} />
                <ShowCarRent/>
            </div>          
            </div>
        </div>
    );
};

export default CustomerDashboard;