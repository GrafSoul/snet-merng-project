// GraphQL Core
import { gql } from 'apollo-server';

export default gql`
    type Post {
        id: ID!
        body: String!
        username: String!
        createdAt: String!
    }
    type Query {
        getPosts: [Post]
    }
`;
