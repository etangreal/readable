import { combineReducers } from 'redux';
import {
  UPVOTE_POST,
  DOWNVOTE_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

const initialState = {
  categories: [],
  posts: [],
  comments: []
};

function vote (state = initialState, action) {
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

export default combineReducers({
  vote
});