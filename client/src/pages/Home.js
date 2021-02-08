// Core
import React from 'react';
// GraphQL
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// Styles
import { Grid, Loader } from 'semantic-ui-react';
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
                    posts &&
                    posts.map((post) => (
                        <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                            <PostCard post={post} />
                        </Grid.Column>
                    ))
                )}
            </Grid.Row>
        </Grid>
    );
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`;

export default Home;
