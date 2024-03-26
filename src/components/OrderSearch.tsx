import OrderGrid from "./OrderGrid"

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
    

const OrderSearch = (): JSX.Element =>{
    return(
        <>
        <p>Order Id:  
        <input/>
        <button onClick={()=>console.log('click')}>Search</button>
        <OrderGrid />
        </p>
        </>
    )
}
export default OrderSearch
