import { gql } from '@apollo/client'

export const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
        token
        user {
            username
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: username, $passsword: password) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject($projectId: Int!, $name: String!) {
        addProject(projectId: $projectId, name: $name)
    }
    
`