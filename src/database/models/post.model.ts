import { model, Schema } from "mongoose";
import type { IPost } from "../../common/interfaces/post.interface.js";

const postSchema = new Schema<IPost>(
	{
		title: { type: String, required: true, trim: true },
		content: { type: String, required: true, trim: true },
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
		comments: { type: [Schema.Types.ObjectId], ref: "Comment", required: true, trim: true },
		likes:  { type: [Schema.Types.ObjectId], ref: "User", required: true, trim: true }
	},
	{ timestamps: true }
);

export const postModel = model<IPost>("Post", postSchema);