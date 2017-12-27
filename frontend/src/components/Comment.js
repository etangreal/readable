import React from 'react';
import uuid from 'uuid/v4';
import VoteScore from './VoteScore';

export const comment = () => ({
  id: uuid(),
  parentId: '',
  author: '',
  body: '',
  timestamp: Date.now(),
  voteScore: 0,
  deleted: false
});

const Comment = ({comment, actions}) => (
  <div>
    <button onClick={actions.editComment(comment)}>
      <i className="far fa-pen"></i>
    </button>
    <button onClick={actions.deleteComment(comment)}>
      <i className="far fa-trash"></i>
    </button>
    <br />
    id: {comment.id}<br />
    parentId: {comment.parentId}<br />
    author: {comment.author}<br />
    body: {comment.body}<br />
    timestamp: {comment.timestamp}<br />
    voteScore: {comment.voteScore}
    <VoteScore
      upVote={actions.upVoteComment(comment)}
      downVote={actions.downVoteComment(comment)}
    /><br />
    deleted: {comment.deleted.toString()}<br />
  </div>
);

export default Comment;
