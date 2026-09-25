import type { Types } from "mongoose";
import type { Gender } from "../enums/gender.enum.js";

export interface IUser {
	name: string;
	email: string;
	password: string;
	age?: number;
	gender?: Gender;
	createdAt?: Date;
}

// pick => take from IUser only the following 
export type CreateUserInput = Pick<IUser, "name" | "email" | "password"> & {
	age?: number;
	gender?: Gender;
};

// partial => make the fields optional 
export type UpdateUserInput = Partial<CreateUserInput>;
