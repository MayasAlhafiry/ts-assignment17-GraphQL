import { PostRepository, type CreatePostRepositoryInput } from "./post.repository.js"


export class PostService {

    private postRepository: PostRepository

    constructor() {
        this.postRepository = new PostRepository
    }

    async getAllposts() {
        let postData = await this.postRepository.findAll()
        return postData
    }

    async getPostsByUserId(userId: string) {
        return this.postRepository.findByUserId(userId)
    }

    async getPostById(id: string) {
        return this.postRepository.findById(id)
    }

    async createPost(data: CreatePostRepositoryInput) {
        let post = await this.postRepository.create(data)
        return post
    }
}