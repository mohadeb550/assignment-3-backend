
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bookingValidations } from './booking.validation';
import { bookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';
const router = express.Router();


router.get('/', auth('admin') , bookingControllers.getAllBookings )

// get user's bookings
router.get('/my-bookings', auth('user') , bookingControllers.getUserBookings )


router.post('/', validateRequest(bookingValidations.createBookingValidationSchema), auth('user') , bookingControllers.createBooking )


export const BookingRoutes = router;