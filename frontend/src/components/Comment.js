import React from 'react';
import uuid from 'uuid/v4';
import CommentView from './Comment.View';

export const comment = () => ({
  id: uuid(),
  parentId: '',
  author: '',
  body: '',
  timestamp: Date.now(),
  voteScore: 0,
  deleted: false,
  parentDeleted: false
});

export default {
  View: CommentView
};
