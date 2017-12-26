import React from 'react';
import VoteScore from './VoteScore';
import Comments from './Comments';

export const post = () => ({
  id: '',
  author: '',
  title: '',
  category: '',
  body: '',
  timestamp: Date.now(),
  voteScore: 0
})

const Post = ({post, comments, actions}) => (
  <div>
    <button onClick={actions.editPost(post)}>
      <i className="far fa-pen"></i>
    </button>
    <button onClick={actions.deletePost(post)}>
      <i className="far fa-trash"></i>
    </button>
    <br />
    id: {post.id}<br />
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
    {comments && Comments({comments, actions})}
  </div>
);

export default Post;