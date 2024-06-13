"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_validation_1 = require("./car.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const car_controllers_1 = require("./car.controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// create 
router.post('/', (0, validateRequest_1.default)(car_validation_1.carValidations.createCarValidationSchema), (0, auth_1.default)('admin'), car_controllers_1.carControllers.createCar);
// update  
router.put('/:id', (0, validateRequest_1.default)(car_validation_1.carValidations.updateCarValidationSchema), (0, auth_1.default)('admin'), car_controllers_1.carControllers.updateCar);
// delete  
router.delete('/:id', (0, auth_1.default)('admin'), car_controllers_1.carControllers.deleteCar);
// get 
router.get('/', (0, auth_1.default)('admin', 'user'), car_controllers_1.carControllers.getAllCars);
router.get('/:id', (0, auth_1.default)('admin', 'user'), car_controllers_1.carControllers.getSingleCar);
exports.CarRoutes = router;
