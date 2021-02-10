// Core
import React from 'react';
// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/graphql';
// Styles
import { Grid, Loader, Transition } from 'semantic-ui-react';
// Components
import PostCard from '../components/PostCard';

function Home() {
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
