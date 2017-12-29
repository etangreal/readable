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
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
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

    case FETCH_COMMENTS:
      if (!payload.length)
        return state;

      const p1 = state.find(post => post.id === payload[0].parentId);
      return [
        ...state.filter(post => post.id !== p1.id),
        Object.assign({}, p1, {commentCount: payload.length})
      ];

    case CREATE_COMMENT:
      const p2 = state.find(post => post.id === payload.parentId);
      return [
        ...state.filter(post => post.id !== p2.id),
        Object.assign({}, p2, {commentCount: p2.commentCount += 1})
      ];

    case DELETE_COMMENT:
      const p3 = state.find(post => post.id === payload.parentId);
      return [
        ...state.filter(post => post.id !== p3.id),
        Object.assign({}, p3, {commentCount: p3.commentCount -= 1})
      ];

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

    case UPDATE_COMMENT:
      return [
        ...state.filter(comment => comment.id !== payload.id),
        payload
      ];

    case DELETE_COMMENT:
      if (payload)
        return [
          ...state.filter(comment => comment.id !== payload.id)
        ];
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});