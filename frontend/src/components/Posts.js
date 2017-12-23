import React from 'react';
import VoteScore from './VoteScore';

const Posts = ({posts}) => {
  const list = posts.map(post =>
    <li key={post.id}>
      id: {post.id}<br />
      author: {post.author}<br />
      title: {post.title}<br />
      category: {post.category}<br />
      body: {post.body}<br />
      timestamp: {post.timestamp}<br />
      voteScore: {post.voteScore} <VoteScore /><br />
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default Posts;