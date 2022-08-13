import { GraphQLString } from "graphql";
import { User } from "../../entities/User";

export const CREATE_USER = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, password } = args;

    const result = await User.insert({
      username: username,
      password: password,
    });

    console.log(result);
    return "user created";
  },
};
