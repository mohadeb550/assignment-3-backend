"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carServices = void 0;
const booking_model_1 = require("../booking/booking.model");
const car_model_1 = require("./car.model");
const createCarIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.create(payload);
    return result;
});
const getAllCarsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { isDeleted: false };
    //  {
    // location : 'tangail'
    // carType : 'sedun'
    // costRange : '10-35'
    // sortByCost : -1
    // status : 'unavailable'
    //  }
    // Add search value to filter if provided
    if (query.location) {
        filter.$or = [
            { location: { $regex: query.location, $options: 'i' } },
        ];
    }
    // Add carType to filter if provided
    if (query.carType) {
        filter.carType = query.carType;
    }
    // Add status to filter if provided
    if (query.status) {
        filter.status = query.status;
    }
    // Add pricePerHour to filter if provided
    if (query.costRange) {
        const [startingCost, endingCost] = query.costRange.split('-').map(Number);
        filter.pricePerHour = { $gte: startingCost, $lte: endingCost };
        //   console.log(filter)
    }
    // Set sort option based on sortByPrice if provided
    const sortOption = {};
    if (query.sortByCost) {
        sortOption.pricePerHour = Number(query.sortByCost);
    }
    const cars = yield car_model_1.Car.find(filter).sort(sortOption);
    return cars;
});
const getSingleCarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findById(id);
    return result;
});
const updateCarIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteCarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
const returnCarFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // get the booking by id 
    const booking = yield booking_model_1.Booking.findById(payload.bookingId);
    // calculating totalCost 
    const startTime = booking === null || booking === void 0 ? void 0 : booking.startTime;
    const endTime = booking === null || booking === void 0 ? void 0 : booking.endTime;
    const date1 = new Date(`1970-01-01T${startTime}:00Z`);
    const date2 = new Date(`1970-01-01T${endTime}:00Z`);
    const differenceMilliseconds = date2 - date1;
    const diffHours = differenceMilliseconds / (1000 * 60 * 60);
    let totalCost;
    if (booking === null || booking === void 0 ? void 0 : booking.car.pricePerHour) {
        totalCost = diffHours * booking.car.pricePerHour;
    }
    else {
        totalCost = 0;
    }
    // update the car status 
    const carId = (_a = booking === null || booking === void 0 ? void 0 : booking.car) === null || _a === void 0 ? void 0 : _a._id;
    yield car_model_1.Car.findByIdAndUpdate(carId, { status: 'available' });
    // update the booking 
    const result = yield booking_model_1.Booking.findByIdAndUpdate(payload.bookingId, {
        totalCost: totalCost,
        'car.status': 'available',
        status: 'completed',
        isReturnProcess: false
    }, { new: true });
    return result;
});
exports.carServices = {
    createCarIntoDB,
    getAllCarsFromDB,
    getSingleCarFromDB,
    updateCarIntoDB,
    deleteCarFromDB,
    returnCarFromDB
};
