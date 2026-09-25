import { env } from "../config/env.servic.js";
import { BadRequestException } from "../common/error.exceptions.js";
import jwt, {} from 'jsonwebtoken';
export class TokenService {
    constructor() {
    }
    generateToken(user) {
        let signature = undefined;
        let audience = undefined;
        let refreshSignature = undefined;
        switch (user?.role ?? 0) {
            case 0:
                signature = env.user_signature;
                refreshSignature = env.user_refresh;
                audience = "User";
                break;
            case 1:
                signature = env.admin_signature;
                refreshSignature = env.admin_refresh;
                audience = "Admin";
                break;
            default:
                signature = env.user_signature;
                refreshSignature = env.user_refresh;
                audience = "User";
                break;
        }
        if (!signature || !refreshSignature) {
            throw new BadRequestException("JWT secret is not configured");
        }
        const accessToken = jwt.sign({ id: user._id }, signature, { expiresIn: '20m', audience });
        const refreshToken = jwt.sign({ id: user._id }, refreshSignature, { expiresIn: '1y', audience });
        return { accessToken, refreshToken };
    }
    decodeToken(token) {
        try {
            let decodedToken = jwt.decode(token);
            if (!decodedToken) {
                throw new BadRequestException("invalid Token");
            }
            let signature = undefined;
            switch (decodedToken.aud) {
                case "Admin":
                    signature = env.admin_signature;
                    break;
                case "User":
                    signature = env.user_signature;
                    break;
                default:
                    break;
            }
            let decodedData = jwt.verify(token, signature);
            return decodedData;
        }
        catch (error) {
            throw new BadRequestException("Invalid token", error);
        }
    }
    decodeRefreshToken(refreshToken) {
        const decodedToken = jwt.decode(refreshToken);
        if (typeof decodedToken !== "object" || decodedToken === null) {
            throw new BadRequestException("invalid Token");
        }
        let signature = undefined;
        switch (decodedToken.aud) {
            case "Admin":
                signature = env.admin_refresh;
                break;
            case "User":
                signature = env.user_refresh;
                break;
            default:
                break;
        }
        const decodedData = jwt.verify(refreshToken, signature);
        return decodedData;
    }
}
