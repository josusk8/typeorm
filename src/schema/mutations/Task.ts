import { GraphQLList, GraphQLString } from "graphql";
import { UserType } from "../typeDefs/User";
import { TaskType } from "../typeDefs/Task";
import { Task } from "../../entities/Task";

export const CREATE_TASK = {
  type: TaskType,
  args: {
    tittle: { type: GraphQLString },
    priority: { type: GraphQLString },
    description: { type: GraphQLString },
  
  },
  async resolve(_: any, args: any) {
    const { title, priority, description} = args;

    const result = await Task.insert({
      tittle: title,
      priority: priority,
      description: description,
    });

    console.log(result);
    return { ...args, id: result.identifiers[0].id };
  },
};
