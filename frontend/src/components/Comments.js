import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {
  const list = comments ? comments.map(comment => (
    <li key={comment.id}>
      {Comment({comment})}
    </li>
  )) : undefined;

  return (
    <ul>
      {list && list.length ? list : <li>no comments</li>}
    </ul>
  )
}

export default Comments;