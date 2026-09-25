import { GraphQLString } from "graphql"
import { getDataGQLMutationtype, getDataGQLtype } from "./user.type.gql.js"
import { getDataGQLArgs, getDataGQLMutationArgs} from "./user.args.gql.js"
import { GQLresorver } from "./user.resorver.gql.js"


class UserGQLschema {
    constructor() { }

    registerQuery() {
        return {
            helloworld: {
                type: GraphQLString,
                resolve: GQLresorver.helloWorld
            },

            getData: {
                type: getDataGQLtype,
                args: getDataGQLArgs,
                resolve: GQLresorver.getData
            }
        }
    }

    registerMutation() {
        return {
            helloworld: {
                type: GraphQLString,
                resolve: GQLresorver.helloWorldamutation
            },
            getData: {
                type: getDataGQLMutationtype,
                args: getDataGQLMutationArgs,
                resolve: GQLresorver.getDataMutation
            }
        }
    }

}

export const userGQLschema = new UserGQLschema()