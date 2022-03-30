const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        project: [Project]
    }

    type Query {
        me: User
        user: User
        project: Project
    }

    type Project {
        _id: ID
        projectName: String
        projecetText: String
        createdAt: String
        username: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!) : Auth
        login(email: String!, password: String!) : Auth
        addProject(_id: Int!) : Project
        addComment(_id: Int!) : Project
    }
`

module.exports = typeDefs;
