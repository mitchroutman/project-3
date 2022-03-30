const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type AUth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        projects: [Project]
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!) : Auth
        loginUser(email: String!, password: String!) : Auth
        addProject(projectData: projectId!) : User
    }
`

module.exports = typeDefs;
