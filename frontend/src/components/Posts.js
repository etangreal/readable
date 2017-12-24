import React from 'react';
import Post from './Post';

const Posts = ({posts, actions}) => {
  const list = posts
    .sort((p1, p2) => p1.timestamp >= p2.timestamp)
    .map(post =>
    <li key={post.id}>
      {Post({post, actions})}
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default Posts;