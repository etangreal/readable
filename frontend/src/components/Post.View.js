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

      <em>Author:</em> &nbsp; {post.author}<br />
      <em>Title:</em> &nbsp; {post.title}<br />
      <em>Category:</em> &nbsp; {post.category}<br />
      <em>Body:</em> &nbsp; {post.body}<br />
      <em>Vote Score:</em> &nbsp; {post.voteScore}
      <VoteScore
        upVote={actions.upVotePost(post)}
        downVote={actions.downVotePost(post)}
      /><br />
      <em>Comments:</em> &nbsp; {post.commentCount}<br />

      {/* <br />
      <b>id:</b> {post.id}<br />
      <b>timestamp:</b> {post.timestamp}<br />
      <b>deleted:</b> {post.deleted.toString()}<br /> */}

      {comments && Comments({comments, postId: post.id, actions})}
    </div>
  );
}

export default Post;
