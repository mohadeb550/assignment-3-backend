
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bookingValidations } from './booking.validation';
import { bookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';
const router = express.Router();


router.get('/', auth('admin') , bookingControllers.getAllBookings )

router.patch('/cancel', auth('admin'), bookingControllers.cancelBooking)

router.put('/:bookingId', auth('admin', 'user'), bookingControllers.updateBooking)

// get user's bookings
router.get('/my-bookings', auth('user') , bookingControllers.getUserBookings )

// get site statistics 
router.get('/statistics', auth('admin') , bookingControllers.getStatistics )

router.get('/:bookingId', auth('admin', 'user') , bookingControllers.getSingleBooking )


router.post('/', validateRequest(bookingValidations.createBookingValidationSchema), auth('user') , bookingControllers.createBooking )


export const BookingRoutes = router;