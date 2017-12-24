import React from 'react';
import Post from './Post';
import Comments from './Comments';
import VoteScore from './VoteScore';

const PostDetails = ({posts, comments, category, postId}) => {
  const post = posts.find(
    post => post.id === postId &&
    post.category === category
  );

  return post ? Post({post, comments}) : <div>none</div>
}

export default PostDetails;