import { JSX } from "react/jsx-runtime"
import OrderGrid from "./OrderGrid"
import { PaymentType, getAllPayments } from "./DataFunctions"
import { ChangeEvent, useState } from "react"


    
type OrderProps = {countryList: string[]} 
type PaymentTypeData = {paymentTypeData: PaymentType[]}  
let paymentTypeAllData: PaymentType[] = getAllPayments();

const countries: string[] = [];


paymentTypeAllData.map ((s) =>  countries.push(s.country));


const uniqueCountries : string[] = countries.filter((country, index) => countries.indexOf(country) === index);
let resultOfFilteringPaymenTypeArray = paymentTypeAllData;

 
const OrderSearch = (): JSX.Element =>{

    const [selectedCountry , setSelectedCountry] = useState<string>(uniqueCountries[0])

    let tempArray: PaymentType[] = [];
    paymentTypeAllData.map(e => {
        if(e.country === selectedCountry) {
            tempArray.push(e);
        } 
    })
    
    if(tempArray.length !== 0){
        resultOfFilteringPaymenTypeArray = tempArray;
        //console.log(resultOfFilteringPaymenTypeArray);
    } else {
        resultOfFilteringPaymenTypeArray = {...paymentTypeAllData}
    }
    const changeCountry = (e : ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.options.selectedIndex;
        setSelectedCountry((country) => (uniqueCountries[option]));
        //Note: once the above line is executed, the code from beginning of the component function is executed all over.
        // so, anything below is run only if selectedCountry remains the same value i.e state not changed.
        // intentionally commenting the lines below to prove the point that it is wrong to do any logic when such setter functions
        // of useState are triggered.
        // console.log("Selected country is " + selectedCountry);
        // console.log("change dropdown value is " + uniqueCountries[option]);
       
        // let tempArray: PaymentType[] = [];
        // paymentTypeAllData.map(e => {
        //     if(e.country === selectedCountry) {
        //         tempArray.push(e);
        //     } 
        // })
        
        // if(tempArray.length !== 0){
        //     resultOfFilteringPaymenTypeArray = tempArray;
        //     //console.log(resultOfFilteringPaymenTypeArray);
        // } else {
        //     resultOfFilteringPaymenTypeArray = {...paymentTypeAllData}
        // }
    }


    return(
        <>
        <p>Order Id:  
        <input/>
        <button onClick={()=>console.log('click')}>Search</button>
        <select onChange={ changeCountry}>
                {/* <option>Please choose one option</option> */}
                {uniqueCountries.map((countryCode, index) => {
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

