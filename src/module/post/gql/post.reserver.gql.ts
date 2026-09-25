import { TokenService } from "../../../common/token.servic.js"
import type { CreatePostRepositoryInput } from "../post.repository.js"
import { PostService } from "../post.service.js"


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

        const tokenHeaders = context.req.headers.authorization
        const [bearer, token] = tokenHeaders.split(" ")

        const decodedToken = this.tokenService.decodeToken(token)
        const userId = args?.userId || decodedToken.id

        console.log("USER ID:", userId)
        console.log("ARGS:", args)

        const postData = await this.postService.getPostsByUserId(userId as string)

        console.log("POST DATA:", postData)

        return {
            message: postData
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
