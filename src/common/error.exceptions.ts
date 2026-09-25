import { GraphQLError } from "graphql"
import { error } from "node:console"

interface IAppError {
    status: number,
    message: string, 
    cause?: unknown
}

export class ApplicationException extends Error implements IAppError{
    
    constructor(message: string, public status: number, cause?: unknown){
        super(message, {cause})
    }
}

export const mapGraphQLError = (error: ApplicationException) => {
    throw new GraphQLError(error.message, {extensions: {statusCode: error.status, errorCause: error.cause || {}}})
}


export class BadRequestException extends ApplicationException {
    constructor(message= "Bad Request", cause?: unknown){
        super(message, 400, cause)
    }
}

export class ConflictException extends ApplicationException {
    constructor(message= "Conflict", cause?: unknown){
        super(message, 409, cause)
    }
}

export class NotFoundException extends ApplicationException {
    constructor(message= "Not Found", cause?: unknown){
        super(message, 404, cause)
    }
}