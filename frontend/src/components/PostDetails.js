import React from 'react';
import Comments from './Comments';
import VoteScore from './VoteScore';

const PostDetails = ({posts, comments, category, postId}) => {
  const post = posts
    .find(post => post.id === postId && post.category === category);

  return post ? (
    <div>
      id: {post.id}<br />
      author: {post.author}<br />
      title: {post.title}<br />
      category: {post.category}<br />
      body: {post.body}<br />
      timestamp: {post.timestamp}<br />
      voteScore: {post.voteScore} <VoteScore /><br />
      <br />
      {Comments({comments})}
    </div>
  ) : <div>none</div>;
}

export default PostDetails;