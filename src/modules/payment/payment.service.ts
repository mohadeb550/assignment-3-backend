import { TPayment } from "./payment.interface";
import { Payment } from "./payment.model";


const savePaymentInfoInDB = async (payload : TPayment) => {
    const result = await Payment.create(payload)
    return result;
}


export const paymentServices = {
    savePaymentInfoInDB
}