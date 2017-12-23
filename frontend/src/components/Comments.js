import React from 'react';
import VoteScore from './VoteScore';

const Comments = ({comments}) => {
  console.log(comments);

  const list = comments.map(comment => (
    <li key={comment.id}>
      id: {comment.id}<br />
      parentId: {comment.parentId}<br />
      author: {comment.author}<br />
      body: {comment.body}<br />
      timestamp: {comment.timestamp}<br />
      voteScore: {comment.voteScore} <VoteScore /><br />
      deleted: {comment.deleted.toString()}<br />
    </li>
  ));

  return list.length ? <ul>{list}</ul> : <div>no comments</div>
}

export default Comments;