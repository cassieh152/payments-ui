import { JSX } from "react/jsx-runtime"
import OrderGrid from "./OrderGrid"
import { PaymentType, getAllPayments } from "./DataFunctions"
import { ChangeEvent, useState } from "react"


export type Transaction = {
    id: number,
    date: Date,
    country: string,
    currency: string,
    amount: number
}
    
type OrderProps = {countryList: string[]} 
type PaymentTypeData = {paymentTypeData: PaymentType[]}  
let paymentTypeAllData: PaymentType[] = getAllPayments();

const countries: string[] = [];


const countriesArray = paymentTypeAllData.map ((s) =>  
countries.push(s.country));


const uniqueCountries : string[] = countries.filter((country, index) => countries.indexOf(country) === index);
//console.log(uniqueCountries);
let resultOfFilteringPaymenTypeArray = paymentTypeAllData;

 
const OrderSearch = (props: OrderProps): JSX.Element =>{

    const [selectedCountry , setSelectedCountry] = useState<string>(uniqueCountries[0])

    const changeCountry = (e : ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.options.selectedIndex;
        //setSelectedCountry(uniqueCountries[option]);
        setSelectedCountry((country) => (uniqueCountries[option]));
        console.log("Selected country is " + selectedCountry);
       
        let tempArray: PaymentType[] = [];
        paymentTypeAllData.map(e => {
            if(e.country === selectedCountry) {
                tempArray.push(e);
            } 
        })
        console.log(tempArray);
        if(tempArray.length !== 0){
            resultOfFilteringPaymenTypeArray = tempArray;
            //console.log(resultOfFilteringPaymenTypeArray);
        } else {
            resultOfFilteringPaymenTypeArray = {...paymentTypeAllData}
        }
    }


    return(
        <>
        <p>Order Id:  
        <input/>
        <button onClick={()=>console.log('click')}>Search</button>
        <select onChange={ changeCountry}>
                {/* <option>Please choose one option</option> */}
                {props.countryList.map((countryCode, index) => {
                    return (
                        <option key={index}>
                            {countryCode}
                        </option>
                    );
                })}
            </select>
        <OrderGrid paymentData={resultOfFilteringPaymenTypeArray}/>
        </p>
        </>
    )
}
export default OrderSearch

