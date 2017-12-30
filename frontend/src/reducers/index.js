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
  let _post;

  switch (type) {
    case FETCH_POSTS:
      return payload;

    case UPVOTE_POST:
      _post = state.find(post => post.id === payload.id);
      return [
        ...state.filter(post => post.id !== payload.id),
        Object.assign({}, _post, payload)
      ];

    case DOWNVOTE_POST:
      _post = state.find(post => post.id === payload.id);
      return [
        ...state.filter(post => post.id !== payload.id),
        Object.assign({}, _post, payload)
      ];

    case CREATE_POST:
      return [
        ...state,
        Object.assign({}, payload, {commentCount: 0})
      ];

    case UPDATE_POST:
      _post = state.find(post => post.id === payload.id);
      return [
        ...state.filter(post => post.id !== payload.id),
        Object.assign({}, _post, payload)
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

      _post = state.find(post => post.id === payload[0].parentId);
      return [
        ...state.filter(post => post.id !== _post.id),
        Object.assign({}, _post, {commentCount: payload.length})
      ];

    case CREATE_COMMENT:
      _post = state.find(post => post.id === payload.parentId);
      return [
        ...state.filter(post => post.id !== _post.id),
        Object.assign({}, _post, {commentCount: _post.commentCount += 1})
      ];

    case DELETE_COMMENT:
      _post = state.find(post => post.id === payload.parentId);
      return [
        ...state.filter(post => post.id !== _post.id),
        Object.assign({}, _post, {commentCount: _post.commentCount -= 1})
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