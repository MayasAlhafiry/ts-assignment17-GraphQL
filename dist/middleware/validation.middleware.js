import { BadRequestException, mapGraphQLError } from "../common/error.exceptions.js";
export const Validation = (schema) => {
    return (req, res, next) => {
        let validationError = [];
        for (const key of Object.keys(schema)) {
            if (!schema[key]) {
                throw new BadRequestException("validation error");
            }
            const value = schema[key].safeParse(req[key]);
            if (!value.success) {
                validationError.push({
                    key, issue: value.error.issues
                });
            }
        }
        if (validationError.length > 0) {
            throw new BadRequestException("validation error", validationError);
        }
        next();
    };
};
export const GQLValidation = (schema, args) => {
    const validationResult = schema.safeParse(args);
    let errorMessages = [];
    if (!validationResult.success) {
        errorMessages.push(validationResult.error.issues);
        console.log(errorMessages);
        throw mapGraphQLError(new BadRequestException("Validation Error", { error: errorMessages }));
    }
    return true;
};
