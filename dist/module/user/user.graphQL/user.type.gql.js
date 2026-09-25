import { GraphQLObjectType, GraphQLString } from "graphql";
export const getDataGQLtype = new GraphQLObjectType({
    name: 'DataTypeQuery',
    fields: {
        message: { type: GraphQLString }
    }
});
export const getDataGQLMutationtype = new GraphQLObjectType({
    name: 'DataType',
    fields: {
        message: { type: GraphQLString }
    }
});
