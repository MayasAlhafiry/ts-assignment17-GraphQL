import { model, Schema } from "mongoose";
const postSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    comments: { type: [Schema.Types.ObjectId], ref: "Comment", required: true, trim: true },
    likes: { type: [Schema.Types.ObjectId], ref: "User", required: true, trim: true }
}, { timestamps: true });
export const postModel = model("Post", postSchema);
