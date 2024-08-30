
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status'
import { bookingServices } from "./booking.services";

const createBooking = catchAsync (async (req, res) => {
    // get user email from token decoded data 
    const userEmail = req?.user?.email;

   const result = await bookingServices.createBookingIntoDB(userEmail , req.body);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car booked successfully',
    data: result,
  });
})


const getAllBookings = catchAsync (async (req, res) => {
   const result = await bookingServices.getAllBookingsFromDB(req.query);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
})


const getStatistics = catchAsync (async (req, res) => {
   const result = await bookingServices.getStatisticsFromDB();
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'STatistics retrieved successfully',
    data: result,
  });
})

const getSingleBooking = catchAsync (async (req, res) => {
   const result = await bookingServices.getSingleBookingFromDB(req.params.bookingId);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  });
})

const updateBooking = catchAsync (async (req, res) => {
  const result = await bookingServices.updateBookingIntoDB(req.params.bookingId , req.body);
  
  sendResponse(res, {
   statusCode: httpStatus.OK,
   success: true,
   message: 'Booking updated successfully',
   data: result,
 });
})

const cancelBooking = catchAsync (async (req, res) => {
  const result = await bookingServices.cancelBookingIntoDB(req.body);
  
  sendResponse(res, {
   statusCode: httpStatus.OK,
   success: true,
   message: 'Booking cancelled successfully',
   data: result,
 });
})


const getUserBookings = catchAsync (async (req, res) => {
  // get user email from token decoded data 
  const userEmail = req?.user?.email;

   const result = await bookingServices.getUserBookingsFromDB(userEmail);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Bookings retrieved successfully',
    data: result,
  });
})



export const bookingControllers = {
  cancelBooking,   createBooking, getAllBookings, getUserBookings, getSingleBooking, updateBooking, getStatistics
}