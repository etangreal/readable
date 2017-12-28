import React from 'react';

const VoteScore = ({upVote, downVote}) => {
  return (
    <div className="VoteScore">
      <button onClick={upVote}>
        +{/* <i className="far fa-plus" /> */}
      </button>&nbsp;
      <button onClick={downVote}>
        -{/* <i className="far fa-minus" /> */}
      </button>
    </div>
  );
}

export default VoteScore;