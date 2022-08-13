import { GraphQLList,GraphQLID } from "graphql";
import { Task } from "../../entities/Task";
import { TaskType } from "../typeDefs/Task";

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  async resolve() {
    return await Task.find();
  },
};

export const GET_TASK = {
  type: TaskType,
  args:{
    id:{type: GraphQLID}
  },
  async resolve(_:any, args :any ) {
    return await Task.findOne({ where: { id: args.id } });
  },
};