import { postModel } from "../../database/models/post.model.js"
import type { IPost } from "../../common/interfaces/post.interface.js"

export type CreatePostRepositoryInput = Pick<IPost, "title" | "content" | "userId">

export class PostRepository {
	async create(input: CreatePostRepositoryInput) {
		return postModel.create({
			...input,
			comments: [],
			likes: [],
		});
	}

	async findAll() {
		return postModel.find().sort({ createdAt: -1 }).lean()
	}

	async findByUserId(userId: string) {
		return postModel.find({ userId }).sort({ createdAt: -1 }).lean()
	}

	async findById(id: string) {
		return postModel.findById(id).lean()
	}

	async deleteById(id: string) {
		return postModel.findByIdAndDelete(id).lean()
	}
}
