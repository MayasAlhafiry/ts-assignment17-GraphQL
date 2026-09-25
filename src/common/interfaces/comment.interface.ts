import type { Types } from "mongoose";

export interface IComment {
	content: string;
	userId: Types.ObjectId;
	postId: Types.ObjectId;
	createdAt?: Date;
}
