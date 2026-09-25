
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { userGQLschema } from '../user/gql/user.schema.gql.js'
import { postGQLSchema } from '../post/gql/post.schema.gql.js'

const query = new GraphQLObjectType({ 
        name: 'RootQueryType',
        // here write the methods for get api
        fields: {
            ...userGQLschema.registerQuery(),
            ...postGQLSchema.registerQuery()
        }
})

// post, put, patch, delete => write its methods in mutation
const mutation =  new GraphQLObjectType({ 
    name: 'RootMutationType',
    // here write the methods for get api
    fields: {
        ...userGQLschema.registerMutation(),
        ...postGQLSchema.registerMutation()
    }
})

export const schema = new GraphQLSchema({query, mutation})