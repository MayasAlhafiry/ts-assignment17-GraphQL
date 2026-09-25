import { TokenService } from "../../../common/token.servic.js"
import type { CreatePostRepositoryInput } from "../post.repository.js"
import { PostService } from "../post.service.js"
import { BadRequestException, mapGraphQLError, NotFoundException } from "../../../common/error.exceptions.js"


class PostResolver {
    private tokenService: TokenService
    private postService: PostService
    constructor(){
        this.postService = new PostService()
        this.tokenService = new TokenService()
    }

    postList = async (parents: any, args: any, context: any) => {

        const postData = await this.postService.getAllposts()
        return {
            message: postData
        }
    }

    postListById = async (parents: any, args: any, context: any) => {
        try {
            const tokenHeaders = context.req.headers.authorization
            const [bearer, token] = tokenHeaders.split(" ")

            const decodedToken = this.tokenService.decodeToken(token)
            const userId = args?.userId || decodedToken.id

            const postData = await this.postService.getPostsByUserId(userId as string)
            return {
                message: postData
            }
        }
        catch(err) {
            throw mapGraphQLError(new NotFoundException("somthing went wrong"))
        }
    }


    createPost = async (parents: any, args: CreatePostRepositoryInput, context: any) => {
        const post = await this.postService.createPost(args)
        return {
            message: post
        }
    }
}

export const postResolver = new PostResolver()
