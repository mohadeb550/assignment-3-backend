
import express from 'express';
import { carValidations } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';
import { carControllers } from './car.controllers';
import auth from '../../middlewares/auth';
const router = express.Router();

// create 
router.post('/', validateRequest(carValidations.createCarValidationSchema), auth('admin') , carControllers.createCar )

// update  
router.put('/:id', validateRequest(carValidations.updateCarValidationSchema), auth('admin') , carControllers.updateCar )

// delete  
router.delete('/:id', auth('admin') , carControllers.deleteCar)

// get 
router.get('/', auth('admin','user'),  carControllers.getAllCars)
router.get('/:id', auth('admin','user'), carControllers.getSingleCar)


export const CarRoutes = router;