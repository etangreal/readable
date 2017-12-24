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

const fetched = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_CATEGORIES:
      return {
        ...state,
        categories: payload
      };

    case FETCHED_POSTS:
      return {
        ...state,
        posts: payload
      };

    case FETCHED_COMMENTS:
      return {
        ...state,
        comments: payload
      };

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

const initialState = {
  categories: [],
  posts: [],
  comments: []
};

export default combineReducers({
  init: (store = initialState) => store,
  fetched,
  vote
});