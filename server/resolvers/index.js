// Resolvers
import postsResolvers from './posts.js';
// import userResolvers from './user';

export default {
    Query: {
        ...postsResolvers.Query,
    },
};
