import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({categories, actions}) => {
  const categoryLinks = categories.map(category => {
    return (
      <li key={category.path} className="Navigation-item">
        <Link to={'/' + category.path}>{category.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <br />
      <ul className="Navigation">
        <li className="Navigation-header">
          <b>Navigation:</b>
        </li>
        <li className="Navigation-item">
          <Link to="/">Posts</Link>
        </li>
        <li className="Navigation-item">
          <b>Categories:</b>
        </li>
        {categoryLinks}
      </ul>
      <ul className="Navigation">
        <li className="Navigation-header">
          <b>Post Options:</b>
        </li>
        <li className="Navigation-item">
          <button onClick={actions.addPost}>
            Add Post <i className="far fa-plus" />
          </button>
        </li>
        <li className="Navigation-item">
          <b>Sort By:</b>
        </li>
        <li className="Navigation-item">
          <button onClick={actions.sortPostByDate}>
            Date <i className="far fa-sort-amount-down" />
          </button>
        </li>
        <li className="Navigation-item">
          <button onClick={actions.sortPostByVotes}>
            Votes <i className="far fa-sort-amount-down" />
          </button>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default Navigation;