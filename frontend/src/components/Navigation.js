import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({categories, addPost}) => {
  const categoryLinks = categories.map(category => {
    return (
      <li key={category.path}>
        <Link to={'/' + category.path}>{category.name}</Link>
      </li>
    );
  });

  return (
    <ul>
      <li><Link to="/">Posts</Link></li>
      <li><Link to="/" onClick={addPost}>Add Post</Link></li>
      {categoryLinks}
    </ul>
  );
};

export default Navigation;