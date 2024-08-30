

import express from 'express';
import auth from '../../middlewares/auth';
import { paymentControllers } from './payment.controller';
const router = express.Router();


// create payment intent for user 
router.post('/create-payment-intent', paymentControllers.createPaymentIntent )


// save payment history 
router.post('/', auth('user'), paymentControllers.savePaymentInfo )

// // get paymenet history 
// router.get('/get-payment-history/:email', auth( 'user'),  paymentController.getPaymentHistory)

export const PaymentRoutes = router;