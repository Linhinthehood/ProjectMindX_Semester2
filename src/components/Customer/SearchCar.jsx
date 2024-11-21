import React, { useState } from 'react';

const SearchCar = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        search: '',
        year: [],
        brand: '',
        fuelType: '',
        priceRange: [0, 300],
        passengerCapacity: '',
        color: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        if (name === 'year') {
            // Toggle year in the filter array
            const updatedYear = filters.year.includes(value)
                ? filters.year.filter((year) => year !== value)
                : [...filters.year, value];
            setFilters({ ...filters, year: updatedYear });
        } else {
            setFilters({ ...filters, [name]: value });
        }
    };

    const handlePriceChange = (e) => {
        const price = parseInt(e.target.value, 10);
        setFilters({ ...filters, priceRange: [0, price] });
    };

    const handleReset = () => {
        const resetFilters = {
            search: '',
            year: [],
            brand: '',
            fuelType: '',
            priceRange: [0, 300],
            passengerCapacity: '',
            color: '',
        };
        setFilters(resetFilters);
        onFilterChange(resetFilters); // Gửi filters mặc định
    };

    const handleFilterSubmit = () => {
        onFilterChange(filters); // Gửi filters hiện tại tới component cha
    };

    return (
        <div className="card mt-5 p-4 bg-dark text-white" style={{ width: '700px', height: 'max-content' }}>
            <h4 className="mb-3">Filter</h4>
            {/* Search Bar */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    name="search"
                    value={filters.search}
                    onChange={handleFilterChange}
                />
            </div>
            {/* Year */}
            <div className="mb-3">
                <h5>Year</h5>
                {[2016, 2017, 2018, 2019].map((year) => (
                    <div key={year}>
                        <input
                            type="checkbox"
                            id={`year-${year}`}
                            name="year"
                            value={year}
                            checked={filters.year.includes(`${year}`)}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor={`year-${year}`}> {year}</label>
                    </div>
                ))}
            </div>
            {/* Brand */}
            <div className="mb-3">
                <h5>Brand</h5>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                    name="brand"
                    value={filters.brand}
                    onChange={handleFilterChange}
                />
            </div>
            {/* Fuel Type */}
            <div className="mb-3">
                <h5>Fuel Type</h5>
                {['Petrol', 'Diesel', 'Electric'].map((type) => (
                    <div key={type}>
                        <input
                            type="radio"
                            id={`fuel-${type}`}
                            name="fuelType"
                            value={type}
                            checked={filters.fuelType === type}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor={`fuel-${type}`}> {type}</label>
                    </div>
                ))}
            </div>
            {/* Passenger Capacity */}
            <div className="mb-3">
                <h5>Passenger Capacity</h5>
                <input
                    type="number"
                    className="form-control"
                    name="passengerCapacity"
                    value={filters.passengerCapacity}
                    onChange={handleFilterChange}
                    placeholder="Capacity"
                />
            </div>
            {/* Color */}
            <div className="mb-3">
                <h5>Color</h5>
                <input
                    type="text"
                    className="form-control"
                    name="color"
                    value={filters.color}
                    onChange={handleFilterChange}
                    placeholder="Enter Color"
                />
            </div>
            {/* Price Range */}
            <div className="mb-3">
                <h5>Price Range</h5>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="300"
                    value={filters.priceRange[1]}
                    onChange={handlePriceChange}
                />
                <p>
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </p>
            </div>
            {/* Buttons */}
            <div className="d-flex gap-3 flex-direction-column">
                <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleReset}
                >
                    Reset Filter
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleFilterSubmit}
                >
                    Apply Filter
                </button>
            </div>
        </div>
    );
};

export default SearchCar;