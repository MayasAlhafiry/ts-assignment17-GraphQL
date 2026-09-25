import { GraphQLInt, GraphQLString } from "graphql";


export const getDataGQLArgs = {
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    email: {type: GraphQLString},
}

export const getDataGQLMutationArgs = {
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    email: {type: GraphQLString},
}