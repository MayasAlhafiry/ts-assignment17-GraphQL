import { GraphQLEnumType, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
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
export const oneUserType = new GraphQLObjectType({
    name: "userType",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        gender: {
            type: new GraphQLEnumType({
                name: "Gender",
                values: {
                    MALE: { value: "male" },
                    FEMALE: { value: "female" },
                },
            })
        },
        createdAt: { type: GraphQLString },
    },
});
