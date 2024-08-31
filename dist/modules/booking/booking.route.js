"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_validation_1 = require("./booking.validation");
const booking_controller_1 = require("./booking.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('admin'), booking_controller_1.bookingControllers.getAllBookings);
router.patch('/cancel', (0, auth_1.default)('admin'), booking_controller_1.bookingControllers.cancelBooking);
router.put('/:bookingId', (0, auth_1.default)('admin', 'user'), booking_controller_1.bookingControllers.updateBooking);
// get user's bookings
router.get('/my-bookings', (0, auth_1.default)('user'), booking_controller_1.bookingControllers.getUserBookings);
// get site statistics 
router.get('/statistics', (0, auth_1.default)('admin'), booking_controller_1.bookingControllers.getStatistics);
router.get('/:bookingId', (0, auth_1.default)('admin', 'user'), booking_controller_1.bookingControllers.getSingleBooking);
router.post('/', (0, validateRequest_1.default)(booking_validation_1.bookingValidations.createBookingValidationSchema), (0, auth_1.default)('user'), booking_controller_1.bookingControllers.createBooking);
exports.BookingRoutes = router;
