import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import OrderSearch from './components/OrderSearch';
import { PaymentType, getAllPayments } from './components/DataFunctions';

type Transaction = {
  id: number,
  date: Date,
  country: string,
  currency: string,
  amount: number
}

const countries: string[] = [];


const countriesArray = getAllPayments().map ((s) =>  
countries.push(s.country));
console.log(countries);

const uniqueCountries : string[] = countries.filter((country, index) => countries.indexOf(country) === index);
console.log(uniqueCountries);
export type OrderProps = {uniqueCountriesArr: string[]};



function App() {
  return (
    <>
    <Menu/>
    <OrderSearch countryList={uniqueCountries} />
    </>
  );
}

export default App;
