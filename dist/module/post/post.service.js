import { PostRepository } from "./post.repository.js";
export class PostService {
    postRepository;
    constructor() {
        this.postRepository = new PostRepository;
    }
    async getAllposts() {
        let postData = await this.postRepository.findAll();
        return postData;
    }
    async getPostsByUserId(userId) {
        return this.postRepository.findByUserId(userId);
    }
    async getPostById(id) {
        return this.postRepository.findById(id);
    }
    async createPost(data) {
        let post = await this.postRepository.create(data);
        return post;
    }
}
