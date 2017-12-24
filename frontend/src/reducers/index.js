import { combineReducers } from 'redux';
import {
  UPVOTE_POST,
  DOWNVOTE_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

function vote (state = {}, action) {
  const { recipe, type } = action;

  switch (type) {
    case UPVOTE_POST:
      return {
        ...state
      }

    case DOWNVOTE_POST:
      return {
        ...state
      }

    case UPVOTE_COMMENT:
      return {
        ...state
      }

    case DOWNVOTE_COMMENT:
      return {
        ...state
      }

    default:
      return state
  }
}

const initialState = {
  categories: [],
  posts: [],
  comments: []
};

export default combineReducers({
  init: (store = initialState) => store,
  vote
});