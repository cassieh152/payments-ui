import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import OrderSearch from './components/OrderSearch';
import { PaymentType, getAllPayments } from './components/DataFunctions';



function App() {
  return (
    <>
    <Menu/>
    <OrderSearch  />
    </>
  );
}

export default App;
