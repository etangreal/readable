import React from 'react';
import VoteScore from './VoteScore';

const Comment = ({comment, actions}) => (
  <div className="Comment-item">
    <span className="Comment-buttons">
      <button onClick={actions.editComment(comment)}>
        Edit <i className="far fa-pen"></i>
      </button>
      <button onClick={actions.deleteComment(comment)}>
        Delete <i className="far fa-trash"></i>
      </button>
    </span>

    <em>Author:</em> &nbsp; {comment.author}<br />
    <em>Body:</em> &nbsp; {comment.body}<br />
    <em>Vote Score:</em> &nbsp; {comment.voteScore}
    <VoteScore
      upVote={actions.upVoteComment(comment)}
      downVote={actions.downVoteComment(comment)}
    /><br />

    {/* <br />
    <b>id:</b> {comment.id}<br />
    <b>parentId:</b> {comment.parentId}<br />
    <b>timestamp:</b> {comment.timestamp}<br />
    <b>deleted:</b> {comment.deleted.toString()}<br />
    <b>parentDeleted:</b> {comment.parentDeleted.toString()}<br /> */}
  </div>
);

export default Comment;
