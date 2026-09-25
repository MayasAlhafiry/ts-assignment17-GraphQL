import type { Types } from "mongoose";

export interface IPost {
	title: string;
	content: string;
	userId: Types.ObjectId;
	createdAt?: Date;
	comments: Types.ObjectId[], 
	likes: Types.ObjectId[], 
}
