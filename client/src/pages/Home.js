// Core
import React, { useContext } from 'react';
// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/graphql';
// Auth
import { AuthContext } from '../context/auth';
// Components
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
// Styles
import { Grid, Loader, Transition } from 'semantic-ui-react';

function Home() {
    const { user } = useContext(AuthContext);
    const {
        loading,
        data: { getPosts: posts },
    } = useQuery(FETCH_POSTS_QUERY);

    return (
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {user && (
                    <Grid.Column>
                        <PostForm />
                    </Grid.Column>
                )}
                {loading ? (
                    <Grid.Row className="page-loader">
                        <Loader active />
                    </Grid.Row>
                ) : (
                    <Transition.Group>
                        {posts &&
                            posts.map((post) => (
                                <Grid.Column
                                    key={post.id}
                                    style={{ marginBottom: 20 }}
                                >
                                    <PostCard post={post} />
                                </Grid.Column>
                            ))}
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    );
}

export default Home;
