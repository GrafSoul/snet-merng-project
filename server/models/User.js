// Core
import pkg from 'mongoose';
const { Schema, model } = pkg;

// Mongoose Schema
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
});

export default model('User', userSchema);
