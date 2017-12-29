import React from 'react';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';
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

const Post = ({
  post,
  comments,
  actions
}) => {
  const DetailsButton = withRouter(({ history }) => (
    <button onClick={() => { history.push(`/${post.category}/${post.id}`) }}>
      Details <i className="far fa-dot-circle" />
    </button>
  ));

  return (
    <div className="Post-item">
      <span className="Post-buttons">
        {!comments && <span><DetailsButton />&nbsp;</span>}
        <button onClick={actions.editPost(post)}>
          Edit <i className="far fa-pen"></i>
        </button>&nbsp;
        <button onClick={actions.deletePost(post.id)}>
          Delete <i className="far fa-trash"></i>
        </button>
      </span>

      {/* id: {post.id}<br /> */}
      author: {post.author}<br />
      title: {post.title}<br />
      category: {post.category}<br />
      body: {post.body}<br />
      {/* timestamp: {post.timestamp}<br /> */}
      voteScore: {post.voteScore}
      <VoteScore
        upVote={actions.upVotePost(post)}
        downVote={actions.downVotePost(post)}
      /><br />
      {/* deleted: {post.deleted.toString()} */}
      {comments && Comments({comments, postId: post.id, actions})}
    </div>
  );
}

export default Post;
