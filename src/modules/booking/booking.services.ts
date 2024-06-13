
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Car } from "../car/car.model";
import { User } from "../user/user.model";
import { TCreateBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import mongoose from "mongoose";


const createBookingIntoDB = async (userEmail: string, payload : TCreateBooking ) => {
    // get userData by email 
    const userData = await User.findOne({ email: userEmail}, { createdAt : 0, updatedAt : 0, password: 0, __v : 0})
   
       // update the car status available to unavailable 
    const carData =  await Car.findByIdAndUpdate(payload.carId, { status: 'unavailable'}, { new: true })

    if(!userData){
        throw new AppError(httpStatus.NOT_FOUND, 'user is not exist')
    }

    if(!carData){
        throw new AppError(httpStatus.NOT_FOUND, 'car is not exist')
    }

    if(carData.isDeleted === true ){
        throw new AppError(httpStatus.NOT_FOUND, 'car is not found')
    }


    const bookingData: Record<string, unknown> = {...payload}
    bookingData.user = userData;
    bookingData.car = carData;

    const result = await Booking.create(bookingData);
    return result;
}


const getAllBookingsFromDB = async (query : Record<string, unknown>) => {
   const queryObj : Record<string, unknown> = {}

    if(query?.carId && query?.date){
        queryObj['car._id']  = new mongoose.Types.ObjectId(query.carId as string)
        queryObj.date = query.date;
    }
  
  const result = await Booking.find(queryObj);
  return result;
}

const getUserBookingsFromDB = async (userEmail: string) => {
  const result = await Booking.find({ 'user.email' : userEmail});
  return result;
}


export const bookingServices = {
    createBookingIntoDB, getAllBookingsFromDB,  getUserBookingsFromDB
}