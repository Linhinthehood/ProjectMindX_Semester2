import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarListCustomer from './CarListCustomer';
import SearchCar from './SearchCar';

const CustomerDashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                // Get the CustomerID from localStorage
                const customerID = localStorage.getItem('CustomerID');
                if (!customerID) {
                    console.error('No Customer ID found in localStorage');
                    return;
                }

                // Fetch customer data from MockAPI
                const response = await axios.get(
                    `https://67397cbaa3a36b5a62eec16d.mockapi.io/Customer/${customerID}`
                );
                const customerData = response.data;

                // Set the username
                if (customerData) {
                    setUsername(customerData.Username);
                } else {
                    console.error('Customer data not found');
                }
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        fetchCustomerData();
    }, []);

    return (
        <div className='container'>
            <h1 className='my-4'>Welcome back, {username}</h1>
            <div className='d-flex flex-direction-row'>
                <SearchCar/>
                <CarListCustomer />
            </div>
        </div>
    );
};

export default CustomerDashboard;