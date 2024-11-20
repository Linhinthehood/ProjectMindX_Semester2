import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarProviderDashboard from '../../components/CarProvider/CarProviderDashboard';

const CarProviderMainPage = () => {
  return (
    <div>
        <Header/>
        <CarProviderDashboard/>
        <Footer/>
    </div>
  )
}

export default CarProviderMainPage