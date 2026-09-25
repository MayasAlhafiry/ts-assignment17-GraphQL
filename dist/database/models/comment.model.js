import { model, Schema } from "mongoose";
const commentSchema = new Schema({
    content: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true, index: true },
}, { timestamps: true });
