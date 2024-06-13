import { Types } from "mongoose";

export type TBooking = {
    date : Date;
    user : Object ;
    car : Object;
    startTime : string;
    endTime : string;
    totalCost : number;
}

export type TCreateBooking = {
    carId : string,
    date : string,
    startTime : string,
}
