// Environment
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// GraphQL Core
import { ApolloServer, PubSub } from 'apollo-server';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

// MongoDB Core
import mongoose from 'mongoose';

// Express
const app = express();

// Parameters
const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.nvckw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Load App Page
if (process.env.PROD) {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
}

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});

mongoose
    .connect(CONNECT_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log(`**************************************`);
        console.log(`MongoDB Connected! Successful!`);
        server.listen({ port: PORT });
    })
    .then(() => {
        console.log(`**************************************`);
        console.log(`Server is running on port: ${PORT}`);
        console.log(`URL address: http://localhost:${PORT}`);
        console.log(`**************************************`);
    })
    .catch((error) => {
        console.log(error);
    });
