export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function upVotePost ({ post }) {
  return {
    type: UPVOTE_POST,
    post
  }
}

export function downVotePost ({ post }) {
  return {
    type: DOWNVOTE_POST,
    post
  }
}

export function upVoteComment ({ comment }) {
    return {
      type: UPVOTE_COMMENT,
      comment
    }
}

export function downVoteComment ({ comment }) {
    return {
      type: UPVOTE_COMMENT,
      comment
    }
}
