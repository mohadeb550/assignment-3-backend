"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidations = void 0;
const zod_1 = require("zod");
const createBookingValidationSchema = zod_1.z.object({
    date: zod_1.z.string(),
    startTime: zod_1.z.string(),
    phone: zod_1.z.string(),
    location: zod_1.z.string(),
    paymentMethod: zod_1.z.string(),
    status: zod_1.z.string().optional(),
    isReturnProcess: zod_1.z.boolean().optional(),
    isPaid: zod_1.z.boolean().optional(),
});
exports.bookingValidations = {
    createBookingValidationSchema,
};
