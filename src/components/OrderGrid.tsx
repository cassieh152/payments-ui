import { JSX } from "react/jsx-runtime"

import { PaymentTableRow } from "./PaymentTableRow"
import { PaymentType } from "./DataFunctions"

type PaymentDataProps = {paymentData: PaymentType[]} 

const OrderGrid = (props: PaymentDataProps):JSX.Element => {

    const displayTrans: JSX.Element[] = props.paymentData.map((s) => 
    <PaymentTableRow key={s.id} payment={s} 
    />);

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
            {displayTrans}
            {/* <PaymentTableRow /> */}
        </table>
       </> 
    )
}
export default OrderGrid