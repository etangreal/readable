import React from 'react';
import uuid from 'uuid/v4';
import VoteScore from './VoteScore';

const Comment = ({comment, actions}) => (
  <div>
    <button onClick={actions.editComment(comment)}>
      Edit <i className="far fa-pen"></i>
    </button>
    <button onClick={actions.deleteComment(comment.id)}>
      Delete <i className="far fa-trash"></i>
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
    parentDeleted: {comment.parentDeleted.toString()}<br />
  </div>
);

export default Comment;
