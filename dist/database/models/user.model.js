import { model, Schema } from "mongoose";
import { Gender } from "../../common/enums/gender.enum.js";
const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    age: { type: Number, min: 0 },
    gender: { type: String, enum: Object.values(Gender) },
}, { timestamps: true });
export const UserModel = model("User", userSchema);
export const userModel = UserModel;
