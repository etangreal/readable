import React from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';
import VoteScore from './VoteScore';
import Comments from './Comments';

export const post = () => ({
  id: uuid(),
  author: '',
  title: '',
  category: '',
  body: '',
  timestamp: Date.now(),
  voteScore: 0,
  deleted: false
});

const Post = ({post, comments, actions}) => (
  <div>
    <button onClick={actions.editPost(post)}>
      <i className="far fa-pen"></i>
    </button>
    <button onClick={actions.deletePost(post.id)}>
      <i className="far fa-trash"></i>
    </button>
    <br />
    id: {post.id} | <Link to={`/${post.category}/${post.id}`}>Details</Link><br />
    author: {post.author}<br />
    title: {post.title}<br />
    category: {post.category}<br />
    body: {post.body}<br />
    timestamp: {post.timestamp}<br />
    voteScore: {post.voteScore}
    <VoteScore
      upVote={actions.upVotePost(post)}
      downVote={actions.downVotePost(post)}
    /><br />
    deleted: {post.deleted.toString()}
    {comments && Comments({comments, postId: post.id, actions})}
  </div>
);

export default Post;