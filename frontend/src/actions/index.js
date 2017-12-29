import * as readableAPI from '../api/readableAPI';

// ------------------------------------------------------------------------------------------------
// DECLARATIONS
// ------------------------------------------------------------------------------------------------

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const FETCH_POSTS = 'FETCH_POSTS';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// ------------------------------------------------------------------------------------------------
// CATEGORIES
// ------------------------------------------------------------------------------------------------

export const fetchCategories = () => dispatch => (
  readableAPI
    .fetchCategories()
    .then(categories => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories
    }))
);

// ------------------------------------------------------------------------------------------------
// POSTS
// ------------------------------------------------------------------------------------------------

export const fetchPosts = () => dispatch => (
  readableAPI
    .fetchPosts()
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
);

export const upVotePost = postId => dispatch => (
  readableAPI
    .upVotePost(postId)
    .then(post => dispatch({
      type: UPVOTE_POST,
      payload: post
    }))
);

export const downVotePost = postId => dispatch => (
  readableAPI
    .downVotePost(postId)
    .then(post => dispatch({
      type: DOWNVOTE_POST,
      payload: post
    }))
);

export const createPost = (post) => dispatch => (
  readableAPI
    .createPost(post)
    .then(post => dispatch({
      type: CREATE_POST,
      payload: post
    }))
);

export const updatePost = (post) => dispatch => (
  readableAPI
    .updatePost(post)
    .then(post => dispatch({
      type: UPDATE_POST,
      payload: post
    }))
);

export const deletePost = (postId) => dispatch => (
  readableAPI
    .deletePost(postId)
    .then(id => dispatch({
      type: DELETE_POST,
      payload: id
    }))
);

// ------------------------------------------------------------------------------------------------
// COMMENTS
// ------------------------------------------------------------------------------------------------

export const fetchComments = postId => dispatch => (
  readableAPI
    .fetchComments(postId)
    .then(comments => dispatch({
      type: FETCH_COMMENTS,
      payload: comments
    }))
);

export const upVoteComment = commentId => dispatch => (
  readableAPI
    .upVoteComment(commentId)
    .then(comment => dispatch({
      type: UPVOTE_COMMENT,
      payload: comment
    }))
);

export const downVoteComment = commentId => dispatch => (
  readableAPI
    .downVoteComment(commentId)
    .then(comment => dispatch({
      type: DOWNVOTE_COMMENT,
      payload: comment
    }))
);

export const createComment = (comment) => dispatch => (
  readableAPI
    .createComment(comment)
    .then(comment => dispatch({
      type: CREATE_COMMENT,
      payload: comment
    }))
);

export const updateComment = (comment) => dispatch => (
  readableAPI
    .updateComment(comment)
    .then(comment => dispatch({
      type: UPDATE_COMMENT,
      payload: comment
    }))
);

export const deleteComment = (comment) => dispatch => (
  readableAPI
    .deleteComment(comment.id)
    .then(dispatch({
      type: DELETE_COMMENT,
      payload: comment
    }))
);

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
