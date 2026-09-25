import { postModel } from "../../database/models/post.model.js";
export class PostRepository {
    async create(input) {
        return postModel.create({
            ...input,
            comments: [],
            likes: [],
        });
    }
    async findAll() {
        return postModel.find().sort({ createdAt: -1 }).lean();
    }
    async findByUserId(userId) {
        return postModel.find({ userId }).sort({ createdAt: -1 }).lean();
    }
    async findById(id) {
        return postModel.findById(id).lean();
    }
    async deleteById(id) {
        return postModel.findByIdAndDelete(id).lean();
    }
}
