import React from 'react';
import VoteScore from './VoteScore';
import Comments from './Comments';

const Post = ({post, comments}) => {
  return (
    <div>
      id: {post.id}<br />
      author: {post.author}<br />
      title: {post.title}<br />
      category: {post.category}<br />
      body: {post.body}<br />
      timestamp: {post.timestamp}<br />
      voteScore: {post.voteScore} <VoteScore /><br />
      {comments && Comments({comments})}
    </div>
  );
};

export default Post;