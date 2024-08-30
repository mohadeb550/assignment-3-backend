
import express from 'express';
import { carValidations } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';
import { carControllers } from './car.controllers';
import auth from '../../middlewares/auth';
const router = express.Router();

// create 
router.post('/', validateRequest(carValidations.createCarValidationSchema), auth('admin') , carControllers.createCar )

// return the car
router.put('/return', validateRequest(carValidations.returnCarValidationSchema), auth('admin'), carControllers.returnCar )


// update  
router.put('/:id', validateRequest(carValidations.updateCarValidationSchema), auth('admin') , carControllers.updateCar )

// delete  
router.delete('/:id', auth('admin') , carControllers.deleteCar)

// get 
router.get('/',  carControllers.getAllCars)
router.get('/:id', carControllers.getSingleCar)


export const CarRoutes = router;