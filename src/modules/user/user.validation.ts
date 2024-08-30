
import { z } from "zod";

const userValidationSchema = z.object({
    name : z.string(),
    email : z.string(),
    role : z.enum(['user','admin']),
    password : z.string(),
    address : z.string().optional(),
    image : z.string(),
})

export const userValidations = {
    userValidationSchema,
}
