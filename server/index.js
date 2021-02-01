// Environment
import dotenv from 'dotenv';
dotenv.config();

// Core
import path from 'path';

// GraphQL Core
import gql from 'graphql-tag';
import { ApolloServer } from 'apollo-server';

// MongoDB Core
import mongoose from 'mongoose';

// Models
import Post from './models/Post.js';
// import User from './models/User';

// Parameters
const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.nvckw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const typeDefs = gql`
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

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts
            } catch (error) {
                throw new Error(error);
            }
        }
    },
};

const server = new ApolloServer({
    typeDefs, resolvers
})

mongoose.connect(CONNECT_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log(`**************************************`);
        console.log(`MongoDB Connected! Successful!`);
        server.listen({port: PORT});
    }).then(() => {
        console.log(`**************************************`);
        console.log(`Server is running on port: ${PORT}`);
        console.log(`URL address: http://localhost:${PORT}`);
        console.log(`**************************************`);
    }).catch(error => {
        console.log(error)
    });
