import React from 'react';
import VoteScore from './VoteScore';

const PostsByCategory = ({posts, category}) => {
  const list = posts
    .filter((post) => {
      return post.category === category
    })
    .map(post =>
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
      {list.length ? list : <li>none</li>}
    </ul>
  );
}

export default PostsByCategory;