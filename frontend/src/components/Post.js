import React from 'react';
import VoteScore from './VoteScore';
import Comments from './Comments';

const Post = ({post, comments, actions}) => {
  return (
    <div>
      <button onClick={() => console.log('Edit Post')}>
        <i className="far fa-pen"></i>&nbsp;
      </button>
      <button onClick={() => console.log('Delete Post')}>
        <i className="far fa-trash"></i>&nbsp;
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
};

export default Post;