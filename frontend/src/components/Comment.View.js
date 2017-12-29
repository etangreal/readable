import React from 'react';
import VoteScore from './VoteScore';

const Comment = ({comment, actions}) => (
  <div className="Comment-item">
    <span className="Comment-buttons">
      <button onClick={actions.editComment(comment)}>
        Edit <i className="far fa-pen"></i>
      </button>
      <button onClick={actions.deleteComment(comment.id)}>
        Delete <i className="far fa-trash"></i>
      </button>
    </span>

    {/* id: {comment.id}<br />
    parentId: {comment.parentId}<br /> */}
    author: {comment.author}<br />
    body: {comment.body}<br />
    {/* timestamp: {comment.timestamp}<br /> */}
    voteScore: {comment.voteScore}
    <VoteScore
      upVote={actions.upVoteComment(comment)}
      downVote={actions.downVoteComment(comment)}
    /><br />
    {/* deleted: {comment.deleted.toString()}<br />
    parentDeleted: {comment.parentDeleted.toString()}<br /> */}
  </div>
);

export default Comment;
