import { GraphQLList } from "graphql";
import { User } from "../../entities/User";
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await User.find();
  },
};
