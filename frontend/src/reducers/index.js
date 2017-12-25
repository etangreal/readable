import { combineReducers } from 'redux';
import {
  FETCHED_CATEGORIES,
  FETCHED_POSTS,
  FETCHED_COMMENTS,

  UPVOTE_POST,
  DOWNVOTE_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

const categories = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

const posts = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_POSTS:
      return payload;

    case UPVOTE_POST:
      return [
        ...state.filter(post => post.id !== payload.id),
        payload
      ];

    case DOWNVOTE_POST:
      return [
        ...state.filter(post => post.id !== payload.id),
        payload
      ];

    default:
      return state;
  }
}

const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_COMMENTS:
      return payload;

    case UPVOTE_COMMENT:
      return [
        ...state.filter(comment => comment.id !== payload.id),
        payload
      ];

    case DOWNVOTE_COMMENT:
      return [
        ...state.filter(comment => comment.id !== payload.id),
        payload
      ];

    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});