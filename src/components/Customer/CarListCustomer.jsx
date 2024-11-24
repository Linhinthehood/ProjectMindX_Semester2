import React, { useState} from 'react';
import CarItemCustomer from './CarItemCustomer';

const CarListCustomer = ({ cars }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

   
    // Lọc chỉ những xe có availability là true
    const availableCars = cars.filter(car => car.Availability === true);


    // Set số trang cho Car List
    const totalPages = Math.ceil(availableCars.length / itemsPerPage);
    const currentCars = availableCars.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (!availableCars.length) {
        return <p className="text-center">No cars available at the moment.</p>;
    }

    return (
        <div>
            <h2 className="text-center my-4">Available Cars</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {currentCars.map((car, index) => (
                    <CarItemCustomer key={index} car={car} />
                ))}
            </div>
            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            <button className="m-1">{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CarListCustomer;