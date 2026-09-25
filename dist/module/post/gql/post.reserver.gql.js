import { TokenService } from "../../../common/token.servic.js";
import { PostService } from "../post.service.js";
class PostResolver {
    tokenService;
    postService;
    constructor() {
        this.postService = new PostService();
        this.tokenService = new TokenService();
    }
    postList = async (parents, args, context) => {
        const postData = await this.postService.getAllposts();
        return {
            message: postData
        };
    };
    postListById = async (parents, args, context) => {
        const tokenHeaders = context.req.headers.authorization;
        const [bearer, token] = tokenHeaders.split(" ");
        const decodedToken = this.tokenService.decodeToken(token);
        const userId = args?.userId || decodedToken.id;
        console.log("USER ID:", userId);
        console.log("ARGS:", args);
        const postData = await this.postService.getPostsByUserId(userId);
        console.log("POST DATA:", postData);
        return {
            message: postData
        };
    };
    createPost = async (parents, args, context) => {
        const post = await this.postService.createPost(args);
        return {
            message: post
        };
    };
}
export const postResolver = new PostResolver();
