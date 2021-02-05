// Core
import React from 'react';
import moment from 'moment';
// Router
import { Link } from 'react-router-dom';
// Styles
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';

function PostCard({
    post: { id, body, username, createdAt, likes, likeCount, commentCount },
}) {
    const handleLikePost = () => {
        console.log('Like Post!');
    };

    const handleCommentOnPost = () => {
        console.log('Comment Post!');
    };

    return (
        <Card fluid>
            <Card.Content as={Link} to={`/post/${id}`}>
                <Image
                    floated="right"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as="div" labelPosition="right" onClick={handleLikePost}>
                    <Button color="teal" basic>
                        <Icon name="heart" />
                    </Button>
                    <Label basic color="teal" pointing="left">
                        {likeCount}
                    </Label>
                </Button>
                <Button
                    as="div"
                    labelPosition="right"
                    onClick={handleCommentOnPost}
                >
                    <Button color="blue" basic>
                        <Icon name="comments" />
                    </Button>
                    <Label basic color="blue" pointing="left">
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    );
}

export default PostCard;
