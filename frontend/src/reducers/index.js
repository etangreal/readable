import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES,

  FETCH_POSTS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,

  FETCH_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  CREATE_COMMENT
} from '../actions';

const categories = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

const posts = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS:
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

    case CREATE_POST:
      return [...state, payload];

    case UPDATE_POST:
      return [
        ...state.filter(post => post.id !== payload.id),
        payload
      ];

    case DELETE_POST:
      if (payload)
        return [
          ...state.filter(post => post.id !== payload),
          Object.assign({}, state.find(post => post.id === payload), {deleted: true})
        ];
      return state;

    default:
      return state;
  }
}

const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COMMENTS:
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

    case CREATE_COMMENT:
      return [...state, payload];

    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});