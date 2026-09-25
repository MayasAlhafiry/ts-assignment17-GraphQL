import { TokenService } from "../../../common/token.servic.js";
import { PostService } from "../post.service.js";
import { BadRequestException, mapGraphQLError, NotFoundException } from "../../../common/error.exceptions.js";
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
        try {
            const tokenHeaders = context.req.headers.authorization;
            const [bearer, token] = tokenHeaders.split(" ");
            const decodedToken = this.tokenService.decodeToken(token);
            const userId = args?.userId || decodedToken.id;
            const postData = await this.postService.getPostsByUserId(userId);
            return {
                message: postData
            };
        }
        catch (err) {
            throw mapGraphQLError(new NotFoundException("somthing went wrong"));
        }
    };
    createPost = async (parents, args, context) => {
        const post = await this.postService.createPost(args);
        return {
            message: post
        };
    };
}
export const postResolver = new PostResolver();
