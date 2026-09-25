import { model, Schema } from "mongoose";
import type { IUser } from "../../common/interfaces/user.interface.js";
import { Gender } from "../../common/enums/gender.enum.js";

const userSchema = new Schema<IUser>(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true, trim: true },
		password: { type: String, required: true, select: false },
		age: { type: Number, min: 0 },
		gender: { type: String, enum: Object.values(Gender) },
	},
	{ timestamps: true }
)

export const UserModel = model<IUser>("User", userSchema)
export const userModel = UserModel

