
import express from 'express';
import { carValidations } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';
import { carControllers } from './car.controllers';
import auth from '../../middlewares/auth';
const router = express.Router();


router.post('/', validateRequest(carValidations.carValidationSchema), auth('admin') , carControllers.createCar )

router.get('/', auth(),  carControllers.getAllCars)
router.get('/:id', auth(), carControllers.getSingleCar)


export const CarRoutes = router;