import React from 'react';
import CarProviderHeader from '../../components/CarProvider/CarProviderHeader';
import Footer from '../../components/Footer';
import CarProviderDashboard from '../../components/CarProvider/CarProviderDashboard';

const CarProviderMainPage = () => {
  return (
    <div>
        <CarProviderHeader/>
        <CarProviderDashboard/>
        <Footer/>
    </div>
  )
}

export default CarProviderMainPage