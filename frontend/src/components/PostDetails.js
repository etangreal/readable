import React from 'react';
import Post from './Post';

const PostDetails = ({posts, comments, category, postId, actions}) => {
  const post = posts.find(
    post => post.id === postId &&
    post.category === category
  );

  return post ? Post({post, comments, actions}) : <div>none</div>
}

export default PostDetails;