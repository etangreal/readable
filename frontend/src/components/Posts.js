import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
  const list = posts.map(post =>
    <li key={post.id}>
      {Post({post})}
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default Posts;