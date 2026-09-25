import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { oneUserType } from "../../user/gql/user.type.gql.js";

export const postListType = new GraphQLObjectType({
    name: "postListType",
    fields: {
        message: {type: GraphQLString}
    }
})

export const onePostType = new GraphQLObjectType({
    name: "onePostType",
    fields: {
            title: {type: new GraphQLNonNull(GraphQLString)},
            content: {type: new GraphQLNonNull(GraphQLString)},
            userId: {type: new GraphQLNonNull(GraphQLID)},
            createdAt: {type: GraphQLString},
            comments: {type: new GraphQLNonNull(new GraphQLList(oneUserType))}, 
            likes: {type: new GraphQLNonNull(new GraphQLList(oneUserType))}, 
    }
})

export const getAllPostType = new GraphQLObjectType({
    name: "AllPostType",
    fields: {
        message: {type: new GraphQLList(onePostType)}
    }
})

export const createPostType = new GraphQLObjectType({
    name: "createPostType",
    fields: {
        message: {type: onePostType}
    }
})