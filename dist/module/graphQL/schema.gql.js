import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { userGQLschema } from '../user/gql/user.schema.gql.js';
import { postGQLSchema } from '../post/gql/post.schema.gql.js';
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...userGQLschema.registerQuery(),
        ...postGQLSchema.registerQuery()
    }
});
const mutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        ...userGQLschema.registerMutation(),
        ...postGQLSchema.registerMutation()
    }
});
export const schema = new GraphQLSchema({ query, mutation });
