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
router.post('/', (0, validateRequest_1.default)(car_validation_1.carValidations.carValidationSchema), (0, auth_1.default)('admin'), car_controllers_1.carControllers.createCar);
router.get('/', (0, auth_1.default)(), car_controllers_1.carControllers.getAllCars);
router.get('/:id', (0, auth_1.default)(), car_controllers_1.carControllers.getSingleCar);
exports.CarRoutes = router;