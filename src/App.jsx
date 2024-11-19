import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CustomerMainPage from './pages/CustomerMainPage';
import CarProviderMainPage from './pages/CarProviderMainPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/CustomerMainPage" element={<CustomerMainPage />} />
                <Route path="/CarProviderMainPage" element={<CarProviderMainPage />} />
            </Routes>
        </Router>
    );
};

export default App;