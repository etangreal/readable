import React from 'react';
import VoteScore from './VoteScore';

const Comment = ({comment}) => (
  <div>
    id: {comment.id}<br />
    parentId: {comment.parentId}<br />
    author: {comment.author}<br />
    body: {comment.body}<br />
    timestamp: {comment.timestamp}<br />
    voteScore: {comment.voteScore} <VoteScore /><br />
    deleted: {comment.deleted.toString()}<br />
  </div>
);

export default Comment;