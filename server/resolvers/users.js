// Model
import User from '../models/User.js';

export default {
    Query: {
        async getPosts() {
            try {
                const posts = await User.find();
                return posts;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};
