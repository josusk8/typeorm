import { GraphQLID, GraphQLString ,GraphQLBoolean} from "graphql";
import { TaskType } from "../typeDefs/Task";
import { Task } from "../../entities/Task";
import { User } from "../../entities/User";

export const CREATE_TASK = {
  type: TaskType,
  args: {
    tittle: { type: GraphQLString },
    priority: { type: GraphQLString },
    description: { type: GraphQLString },
    userId:{type: GraphQLID}
  
  },
  async resolve(_: any, args: any) {
    const {userId, tittle, priority, description} = args;

    const result = await Task.insert({
      tittle: tittle,
      priority: priority,
      description: description,
      user: new User().id = userId
    });

    console.log(result);
    return { ...args, id: result.identifiers[0].id };
  },
};


export const DELETE_TASK = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await Task.delete(id);
    console.log(result);

    if (result.affected === 1) {
      return true;
    }
    return false;
  },
};