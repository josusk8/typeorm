import {GraphQLList, GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'
import { TaskType } from './Task'

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString}, 
       
    }
})