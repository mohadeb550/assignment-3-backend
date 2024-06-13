
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status'
import { carServices } from "./car.service";


const createCar = catchAsync (async (req, res) => {

   const result = await carServices.createCarIntoDB(req.body);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
})

const getAllCars = catchAsync (async (req, res) => {

   const result = await carServices.getAllCarsFromDB();
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cars retrieved successfully',
    data: result,
  });
})

const getSingleCar = catchAsync (async (req, res) => {

   const result = await carServices.getSingleCarFromDB(req.params.id);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A car retrieved successfully',
    data: result,
  });
})

const updateCar = catchAsync (async (req, res) => {
   const result = await carServices.updateCarIntoDB(req.params.id , req.body);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car updated successfully',
    data: result,
  });
})


const deleteCar = catchAsync (async (req, res) => {
   const result = await carServices.deleteCarFromDB(req.params.id);
   
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car deleted successfully',
    data: result,
  });
})




export const carControllers = {
    createCar, getAllCars, getSingleCar, updateCar, deleteCar
}