import { JSX } from "react/jsx-runtime"
import { Transaction } from "./OrderSearch"
import { PaymentTableRow } from "./PaymentTableRow"
import { PaymentType } from "./DataFunctions"


const OrderGrid = (props: PaymentType[]):JSX.Element => {

    return(
       <>
        <table>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Amount</th>
            </tr>
            {/* <PaymentTableRow /> */}
        </table>
       </> 
    )
}
export default OrderGrid