import { model, Schema } from "mongoose";
import type { IComment } from "../../common/interfaces/comment.interface.js";

const commentSchema = new Schema<IComment>(
	{
		content: { type: String, required: true, trim: true },
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
		postId: { type: Schema.Types.ObjectId, ref: "Post", required: true, index: true },
	},
	{ timestamps: true }
)
