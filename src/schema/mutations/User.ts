import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { User } from "../../entities/User";
import { UserType } from "../typeDefs/User";
import bcrypt from "bcryptjs";
import { TaskType } from "../typeDefs/Task";

export const CREATE_USER = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { username, password } = args;

    const encryptPassword = await bcrypt.hash(password, 10);

    const result = await User.insert({
      username: username,
      password: encryptPassword,
    });

    console.log(result);
    return { ...args, id: result.identifiers[0].id, password: encryptPassword };
  },
};
export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await User.delete(id);
    console.log(result);

    if (result.affected === 1) {
      return true;
    }
    return false;
  },
};
