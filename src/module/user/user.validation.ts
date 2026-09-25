import { optional, strictObject, z } from "zod"



export const signupSchema = {
    body: strictObject({
        userName: z.string(),
        email: z.email(),
        firstName: z.string(),
        lastName: z.string(),
        phone: z.string(),
        password: z.string(),
        gender: z.number().int().min(0).max(1)
    }),
    params: z.strictObject({
        // id: z.string()
    })
}