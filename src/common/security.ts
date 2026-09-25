import bcrypt from "bcrypt"
import { env } from "../config/env.servic.js"

export const generateHash = async ({plainText, salt=env.salt} : {
    plainText: string,
    salt?: string
}):Promise<string> => {
    return await bcrypt.hash(plainText, Number(salt))
}

export const compareHash = async ({plainText, cryptText} :{
    plainText: string,
    cryptText: string 
}): Promise<boolean> => {
    return await bcrypt.compare(plainText, cryptText)
}