import React from 'react';
import Comment from './Comment';

const Comments = ({comments, postId, actions}) => {
  const list = comments ? comments
    .sort((c1, c2) => c1.timestamp >= c2.timestamp)
    .map(comment => (
    <li key={comment.id}>
      {Comment({comment, actions})}
    </li>
  )) : undefined;

  return (
    <ul>
      <li>
        <button onClick={actions.addComment(postId)}>
          Add Comment <i className="far fa-plus"></i>
        </button>
      </li>
      {list && list.length ? list : ''}
    </ul>
  )
}

export default Comments;