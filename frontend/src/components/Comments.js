import React from 'react';
import Comment from './Comment';

const Comments = ({comments, actions}) => {
  const list = comments ? comments
    .sort((c1, c2) => c1.timestamp >= c2.timestamp)
    .map(comment => (
    <li key={comment.id}>
      {Comment({comment, actions})}
    </li>
  )) : undefined;

  return (
    <ul>
      {list && list.length ? list : ''}
      <li>
        <button onClick={actions.addComment}>
          <i className="far fa-plus"></i>
        </button>
      </li>
    </ul>
  )
}

export default Comments;