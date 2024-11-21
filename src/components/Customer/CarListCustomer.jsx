import React, { useState } from 'react';
import CarItemCustomer from './CarItemCustomer';

const CarListCustomer = ({ cars }) => {
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const itemsPerPage = 6; // Số item trên mỗi trang

    // Tính toán danh sách xe hiển thị theo trang hiện tại
    const totalPages = Math.ceil(cars.length / itemsPerPage); // Tổng số trang
    const currentCars = cars.slice(
        (currentPage - 1) * itemsPerPage, // Bắt đầu từ index
        currentPage * itemsPerPage // Kết thúc tại index
    );

    const handlePageChange = (page) => {
        setCurrentPage(page); // Cập nhật trang hiện tại
    };

    if (cars.length === 0) {
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
            {/* Pagination */}
            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            <button className=" m-1">{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CarListCustomer;