import React from 'react';
import CustomerHeader from '../../components/Customer/CustomerHeader';
import Footer from '../../components/Footer';
import CustomerDashboard from '../../components/Customer/CustomerDashboard';

const CustomerMainPage = () => {
  return (
    <div>
      <CustomerHeader />
      <div>
        <CustomerDashboard />
      </div>
      <Footer />
    </div>
  )
}

export default CustomerMainPage