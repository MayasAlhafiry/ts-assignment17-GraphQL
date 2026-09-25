import { GraphQLError } from "graphql";
import { error } from "node:console";
export class ApplicationException extends Error {
    status;
    constructor(message, status, cause) {
        super(message, { cause });
        this.status = status;
    }
}
export const mapGraphQLError = (error) => {
    throw new GraphQLError(error.message, { extensions: { statusCode: error.status, errorCause: error.cause || {} } });
};
export class BadRequestException extends ApplicationException {
    constructor(message = "Bad Request", cause) {
        super(message, 400, cause);
    }
}
export class ConflictException extends ApplicationException {
    constructor(message = "Conflict", cause) {
        super(message, 409, cause);
    }
}
export class NotFoundException extends ApplicationException {
    constructor(message = "Not Found", cause) {
        super(message, 404, cause);
    }
}
