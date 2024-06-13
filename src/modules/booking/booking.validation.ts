import { z } from "zod";

const createBookingValidationSchema = z.object({
    date : z.string(),
    carId : z.string(),
    startTime : z.string(),
})

export const bookingValidations = {
    createBookingValidationSchema,
}
