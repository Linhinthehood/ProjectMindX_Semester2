import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import CustomerMainPage from './pages/CustomerMainPage/CustomerMainPage';
import CarProviderMainPage from './pages/CarProviderMainPage/CarProviderMainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

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

