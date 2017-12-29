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
    <div>
      <ul className="Navigation">
        <li className="Navigation-header">
          Navigation:
        </li>
        <li className="Navigation-item">
          <Link to="/">Posts</Link>
        </li>
        <li className="Navigation-item">
          Categories:
        </li>
        {categoryLinks}
      </ul>
      <ul className="Navigation">
        <li className="Navigation-header">
          Post Options:
        </li>
        <li className="Navigation-item">
          <button onClick={addPost}>
            Add Post <i className="far fa-plus" />
          </button>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default Navigation;