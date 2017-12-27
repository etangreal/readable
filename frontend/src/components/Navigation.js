import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({categories}) => {
  const categoryLinks = categories.map(category => {
    return (
      <li key={category.path}>
        <Link to={'/' + category.path}>{category.name}</Link>
      </li>
    );
  });

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Add Post</Link></li>
      {categoryLinks}
    </ul>
  );
};

export default Navigation;