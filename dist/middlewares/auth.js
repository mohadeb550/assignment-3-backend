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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../modules/user/user.model");
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        // check if the token is sent or not ?
        if (!token) {
            res.status(401).json({
                "success": false,
                "statusCode": http_status_1.default.FORBIDDEN,
                "message": "you are not authorized"
            });
            return;
        }
        // check if the token is valid
        const decoded = jsonwebtoken_1.default.verify(token.split(' ')[1], config_1.default.jwt_access_secret);
        const { email, role } = decoded;
        //    check if the user is exist?
        const user = yield user_model_1.User.findOne({ email, role });
        if (!user) {
            res.status(401).json({
                "success": false,
                "statusCode": http_status_1.default.FORBIDDEN,
                "message": "you are not authorized"
            });
            return;
        }
        // check role 
        if (!requiredRoles.includes(role)) {
            res.status(401).json({
                "success": false,
                "statusCode": 401,
                "message": "You have no access to this route"
            });
            return;
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
