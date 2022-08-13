import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./queries/Greeting";
import { CREATE_USER } from "./mutations/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
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
