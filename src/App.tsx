import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import OrderSearch from './components/OrderSearch';

type Transaction = {
  id: number,
  date: Date,
  country: string,
  currency: string,
  amount: number
}

function App() {
  return (
    <>
    <Menu/>
    <OrderSearch/>
    </>
  );
}

export default App;
