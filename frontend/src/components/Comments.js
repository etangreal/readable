import React from 'react';
import Comment from './Comment';

const Comments = ({comments, postId, actions}) => {
  const list = comments ? comments
    .sort((c1, c2) => c1.timestamp >= c2.timestamp)
    .map(comment => (
    <li key={comment.id}>
      {Comment.View({comment, actions})}
    </li>
  )) : undefined;

  return (
    <ul className="Comment-list">
      <ul className="Comment-nav">
        <li className="Comment-navItem">
            <b>Comment Options:</b>
        </li>
        <li className="Comment-navItem">
          <button onClick={actions.addComment(postId)}>
            Add Comment <i className="far fa-plus"></i>
          </button>
        </li>
        <li className="Comment-navItem">
            <b>Sort By:</b>
        </li>
        <li className="Comment-navItem">
          <button onClick={()=> console.log('sort by date')}>
            Date <i className="far fa-sort-amount-down" />
          </button>
        </li>
        <li className="Comment-navItem">
          <button onClick={()=> console.log('sort by votes')}>
            Votes <i className="far fa-sort-amount-down" />
          </button>
        </li>
      </ul>

      {list && list.length ? list : ''}
    </ul>
  )
}

export default Comments;