import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GET_ALL_USERS, GET_USER } from "./queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/User";
import { GET_ALL_TASKS, GET_TASK } from "./queries/Task";
import { CREATE_TASK, DELETE_TASK } from "./mutations/Task";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser:GET_USER,
    getAllTasks: GET_ALL_TASKS,
    getTask:GET_TASK,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    createTask: CREATE_TASK,
    deleteTask: DELETE_TASK,

  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
