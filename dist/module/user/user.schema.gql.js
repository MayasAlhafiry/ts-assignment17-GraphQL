import { GraphQLString } from "graphql";
import { getDataGQLtype } from "./user.type.gql.js";
import { getDataGQLArgs } from "./user.graphQL/user.args.gql.js";
import { GQLresorver } from "./user.graphQL/user.resorver.gql.js";
class userGQLschema {
    constructor() { }
    registrationSchema() {
        return {
            helloworld: {
                type: GraphQLString,
                resolve: () => 'hello world'
            },
            getData: {
                type: getDataGQLtype,
                args: getDataGQLArgs,
                resolve: GQLresorver.helloWorld
            }
        };
    }
}
export const GQLschema = new userGQLschema();
