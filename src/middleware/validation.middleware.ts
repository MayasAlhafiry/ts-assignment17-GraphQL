import type { NextFunction, Request, Response } from "express"
import type { ZodType } from "zod"
import { BadRequestException, mapGraphQLError } from "../common/error.exceptions.js"



type validationKey = keyof Request
type validationSchema = Partial<Record<validationKey, ZodType>>

export const Validation = (schema: validationSchema) => {

    return (req: Request, res: Response, next: NextFunction) => {
        let validationError = []
        for (const key of Object.keys(schema) as validationKey[]) {
            if (!schema[key]) {
                throw new BadRequestException("validation error")
            }
            const value = schema[key].safeParse(req[key])
            if (!value.success) {
                validationError.push({
                    key, issue: value.error.issues
                })
            }
        }
        if (validationError.length > 0) {
            throw new BadRequestException("validation error", validationError)
        }
        next()
    }
}

export const GQLValidation = (schema: ZodType, args: any) => {
    const validationResult = schema.safeParse(args)
    let errorMessages = []

    if(!validationResult.success) {
        errorMessages.push(validationResult.error.issues)
        console.log(errorMessages)
        throw mapGraphQLError(new BadRequestException("Validation Error" , {error: errorMessages}))
    }
    return true
}