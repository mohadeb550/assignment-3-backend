
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Car } from "../car/car.model";
import { User } from "../user/user.model";
import { TBooking, TCreateBooking } from "./booking.interface";
import { Booking } from "./booking.model";


const createBookingIntoDB = async (userEmail: string, payload : TCreateBooking ) => {
    // get userData by email 
    const userData = await User.findOne({ email: userEmail}, { createdAt : 0, updatedAt : 0, password: 0, __v : 0})
   
    // get car data by id 
    const carData = await Car.findById(payload.carId)

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

export const bookingServices = {
    createBookingIntoDB,
}