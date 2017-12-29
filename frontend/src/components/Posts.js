import React from 'react';
import Post from './Post';

const Posts = ({posts, actions}) => {
  const list = posts
    .map(post =>
    <li key={post.id}>
      {Post.View({post, actions})}
    </li>
  );

  return (
    <ul className="Post-list">
      {list}
    </ul>
  );
}

export default Posts;