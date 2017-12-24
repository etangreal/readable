import * as readableAPI from '../api/readableAPI';

// ------------------------------------------------------------------------------------------------
// DECLARATIONS
// ------------------------------------------------------------------------------------------------

export const FETCHED_CATEGORIES = 'FETCHED_CATEGORIES';
export const FETCHED_POSTS = 'FETCHED_POSTS';
export const FETCHED_COMMENTS = 'FETCHED_COMMENTS';

export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

// ------------------------------------------------------------------------------------------------
// FETCHED
// ------------------------------------------------------------------------------------------------

export const fetchedCategories = categories => ({
  type: FETCHED_CATEGORIES,
  payload: categories
});

export const fetchCategories = () => dispatch => (
  readableAPI
      .fetchCategories()
      .then(categories => dispatch(fetchedCategories(categories)))
);

// ------------------------------------------------------------------------------------------------

export const fetchedPosts = posts => ({
  type: FETCHED_POSTS,
  payload: posts
});

export const fetchPosts = () => dispatch => (
  readableAPI
      .fetchPosts()
      .then(posts => dispatch(fetchedPosts(posts)))
);

// ------------------------------------------------------------------------------------------------

export const fetchedComments = comments => ({
  type: FETCHED_COMMENTS,
  payload: comments
});

export const fetchComments = postId => dispatch => (
  readableAPI
      .fetchComments(postId)
      .then(comments => dispatch(fetchedComments(comments)))
);

// ------------------------------------------------------------------------------------------------
// VOTE
// ------------------------------------------------------------------------------------------------

export function upVotePost ({ post }) {
  return {
    type: UPVOTE_POST,
    payload: post
  }
}

export function downVotePost ({ post }) {
  return {
    type: DOWNVOTE_POST,
    payload: post
  }
}

export function upVoteComment ({ comment }) {
    return {
      type: UPVOTE_COMMENT,
      payload: comment
    }
}

export function downVoteComment ({ comment }) {
    return {
      type: UPVOTE_COMMENT,
      payload: comment
    }
}

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
