import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./queries/Greeting";
import { GET_ALL_USERS } from "./queries/User";
import { CREATE_USER } from "./mutations/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createrUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
