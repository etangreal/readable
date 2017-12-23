import React from 'react';

const VoteScore = ({upVote, downVote}) => {
  return (
    <div className="VoteScore">
      <button onClick={upVote}>+</button>
      <button onClick={downVote}>-</button>
    </div>
  );
}

export default VoteScore;