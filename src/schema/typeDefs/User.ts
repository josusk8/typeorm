import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString}, 
    }
})