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

    default:
      return state;
  }
}

const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_COMMENTS:
      return payload;

    default:
      return state;
  }
}

function vote (state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case UPVOTE_POST:
      return {
        ...state
      };

    case DOWNVOTE_POST:
      return {
        ...state
      };

    case UPVOTE_COMMENT:
      return {
        ...state
      };

    case DOWNVOTE_COMMENT:
      return {
        ...state
      };

    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});