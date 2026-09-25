import bcrypt from "bcrypt";
import { env } from "../config/env.servic.js";
export const generateHash = async ({ plainText, salt = env.salt }) => {
    return await bcrypt.hash(plainText, Number(salt));
};
export const compareHash = async ({ plainText, cryptText }) => {
    return await bcrypt.compare(plainText, cryptText);
};
