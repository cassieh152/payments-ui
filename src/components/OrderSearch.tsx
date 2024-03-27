import { JSX } from "react/jsx-runtime"
import OrderGrid from "./OrderGrid"
import { PaymentType, getAllPayments } from "./DataFunctions"


export type Transaction = {
    id: number,
    date: Date,
    country: string,
    currency: string,
    amount: number
}
    
const t1 = {
            id: 123,
            date: new Date(),
            country: 'USA',
            currency: 'USD',
            amount: 100
        }


// const transactionData: Transaction[]=[
//     {
//         id: 123,
//         date: new Date(),
//         country: 'USA',
//         currency: 'USD',
//         amount: 100
//     },
//     {
//         id: 456,
//         date: new Date(),
//         country: 'UK',
//         currency: 'Pound',
//         amount: 200
//     },
//     {
//         id: 789,
//         date: new Date(),
//         country: 'MEX',
//         currency: 'Peso',
//         amount: 200
//     },
// ]
type OrderProps = {countryList: string[]} 
type PaymentTypeData = {paymentTypeData: PaymentType[]}  
 const paymentTypeAllData: PaymentType[] = getAllPayments();

const OrderSearch = (props: OrderProps): JSX.Element =>{
  
    // console.log(paymentTypeArray);

    return(
        <>
        <p>Order Id:  
        <input/>
        <button onClick={()=>console.log('click')}>Search</button>
        <select >
                {/* <option>Please choose one option</option> */}
                {props.countryList.map((countryCode, index) => {
                    return (
                        <option key={index}>
                            {countryCode}
                        </option>
                    );
                })}
            </select>
        <OrderGrid paymentData={paymentTypeAllData}/>
        </p>
        </>
    )
}
export default OrderSearch

