import uuid from 'uuid/v4';
import CommentAdd from './Comment.Add';
import CommentEdit from './Comment.Edit';
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
  Add: CommentAdd,
  Edit: CommentEdit,
  View: CommentView
};
