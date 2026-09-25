import { resolve } from "node:dns";
import { createPostArgs, postListArgs, postListByIdArgs } from "./post.args.gql.js";
import { postResolver } from "./post.reserver.gql.js";
import { createPostType, getAllPostType, onePostType } from "./post.types.gql.js";
class PostSchemaGQL {
    constructor() { }
    registerQuery() {
        return {
            postList: {
                type: getAllPostType,
                args: postListArgs,
                resolve: postResolver.postList
            },
            getPostById: {
                type: getAllPostType,
                args: postListByIdArgs,
                resolve: postResolver.postListById
            }
        };
    }
    registerMutation() {
        return {
            createPost: {
                type: createPostType,
                args: createPostArgs,
                resolve: postResolver.createPost,
            }
        };
    }
}
export const postGQLSchema = new PostSchemaGQL();
