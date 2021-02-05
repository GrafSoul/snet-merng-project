// Core
import React from 'react';
// GraphQL
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// Styles
import { Grid } from 'semantic-ui-react';
// Components
import PostCard from '../components/PostCard';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const {
        loading,
        data: { getPosts: posts },
    } = useQuery(FETCH_POSTS_QUERY);

    if (posts) {
        console.log(posts);
    }

    return (
        <div>
            <Grid columns={3}>
                <Grid.Row className="page-title">
                    <h1>Recent Posts</h1>
                </Grid.Row>

                <Grid.Row>
                    {loading ? (
                        <h1>Loading posts...</h1>
                    ) : (
                        posts &&
                        posts.map((post) => (
                            <Grid.Row
                                key={post.id}
                                style={{ margin: '0 20px 20px 0' }}
                            >
                                <Grid.Column>
                                    <PostCard post={post} />
                                </Grid.Column>
                            </Grid.Row>
                        ))
                    )}
                </Grid.Row>
            </Grid>
        </div>
    );
};

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
