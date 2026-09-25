import { GraphQLString } from "graphql";
export const getDataGQLArgs = {
    name: {
        type: GraphQLString
    },
    age: { type: GraphQLString },
    email: { type: GraphQLString }
};
