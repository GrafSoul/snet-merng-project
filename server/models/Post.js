// Core
import pkg from 'mongoose';
const { Schema, model } = pkg;

// Mongoose Schema
const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        },
    ],
    likes: [
        {
            username: String,
            createdAt: String,
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
});

export default model('Post', postSchema);
