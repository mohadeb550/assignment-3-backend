"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("./auth.controllers");
const user_validation_1 = require("../user/user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validations_1 = require("./auth.validations");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(user_validation_1.userValidations.userValidationSchema), auth_controllers_1.authControllers.createUser);
router.post('/signin', (0, validateRequest_1.default)(auth_validations_1.authValidations.loginValidationSchema), auth_controllers_1.authControllers.loginUser);
exports.AuthRoutes = router;
