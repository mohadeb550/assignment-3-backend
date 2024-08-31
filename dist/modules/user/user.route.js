"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// get 
router.get('/', (0, auth_1.default)('admin'), user_controller_1.userControllers.getAllUsers);
router.get('/:email', (0, auth_1.default)('admin', 'user'), user_controller_1.userControllers.getSingleUser);
router.put('/:id', (0, auth_1.default)('admin', 'user'), user_controller_1.userControllers.updateUser);
router.delete('/:id', (0, auth_1.default)('admin'), user_controller_1.userControllers.deleteUser);
exports.UserRoutes = router;
