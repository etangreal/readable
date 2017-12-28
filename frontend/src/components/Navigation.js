import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({categories, addPost}) => {
  const categoryLinks = categories.map(category => {
    return (
      <li key={category.path} className="Navigation-item">
        <Link to={'/' + category.path}>{category.name}</Link>
      </li>
    );
  });

  return (
    <ul className="Navigation">
      <li className="Navigation-item">
        &nbsp;&nbsp;&nbsp;<Link to="/">Posts</Link>
      </li>
      <li className="Navigation-item">
        <button onClick={addPost}>
          Add Post <i className="far fa-plus" />
        </button>
      </li>
      <li className="Navigation-item">
        Categories:
      </li>
      {categoryLinks}
    </ul>
  );
};

export default Navigation;