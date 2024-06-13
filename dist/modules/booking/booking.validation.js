"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidations = void 0;
const zod_1 = require("zod");
const createBookingValidationSchema = zod_1.z.object({
    date: zod_1.z.string(),
    carId: zod_1.z.string(),
    startTime: zod_1.z.string(),
});
exports.bookingValidations = {
    createBookingValidationSchema,
};
