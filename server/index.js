// Environment
import dotenv from 'dotenv';
dotenv.config();

// GraphQL Core
import { ApolloServer } from 'apollo-server';
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./resolvers/index.js";

// MongoDB Core
import mongoose from 'mongoose';

// Parameters
const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.nvckw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

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
