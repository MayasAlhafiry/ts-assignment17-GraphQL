import { GraphQLObjectType, GraphQLString, } from "graphql";
export const getDataGQLtype = new GraphQLObjectType({
    name: 'DataTypeQuery',
    fields: {
        message: { type: GraphQLString }
    }
});
