import { Booking } from "../booking/booking.model";
import { TCar, TReturnCarPayload } from "./car.interface";
import { Car } from "./car.model";

const createCarIntoDB = async (payload : TCar) => {
    const result = await Car.create(payload);
    return result;
}

const getAllCarsFromDB = async () => {
    const result = await Car.find();
    return result;
}

const getSingleCarFromDB = async (id: string) => {
    const result = await Car.findById(id);
    return result;
}

const updateCarIntoDB = async (id: string , payload: Partial<TCar>) => {
    const result = await Car.findByIdAndUpdate(id, payload ,{new: true });
    return result;
}

const deleteCarFromDB = async ( id: string) => {
    const result = await Car.findByIdAndUpdate(id, { isDeleted: true } ,{new: true });
    return result;
}

const returnCarFromDB = async (payload : TReturnCarPayload) => {
    // get the booking by id 
    const booking = await Booking.findById(payload.bookingId)
    
    // calculating totalCost 
    const startTime = booking?.startTime;
    const endTime = payload?.endTime;
  
    let date1: any = new Date(`1970-01-01T${startTime}:00Z`);
    let date2 : any = new Date(`1970-01-01T${endTime}:00Z`);

    let differenceMilliseconds = date2 - date1;
    let diffHours = differenceMilliseconds / (1000 * 60 * 60);
    const totalCost = diffHours * booking?.car?.pricePerHour;

        // update the car status 
        const carId = booking?.car?._id;
        await Car.findByIdAndUpdate(carId, { status: 'available'})

    // update the booking 
   const result =  await Booking.findByIdAndUpdate(payload.bookingId, { 
        endTime, totalCost , 'car.status': 'available'
    }, { new : true })

  return result;
}


export const carServices = {
    createCarIntoDB,
    getAllCarsFromDB,
    getSingleCarFromDB, 
    updateCarIntoDB, 
    deleteCarFromDB,
    returnCarFromDB
}