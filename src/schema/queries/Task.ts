import { GraphQLList } from "graphql";
import { Task } from "../../entities/Task";
import { TaskType } from "../typeDefs/Task";

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  async resolve() {
    return await Task.find();
  },
};
