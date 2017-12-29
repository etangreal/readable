import uuid from 'uuid/v4';
import PostAdd from './Post.Add';
import PostEdit from './Post.Edit';
import PostView from './Post.View';

export const post = (category) => ({
  id: uuid(),
  author: '',
  title: '',
  category: category || 'unknown',
  body: '',
  timestamp: Date.now(),
  voteScore: 0,
  deleted: false
});

export default {
  Add: PostAdd,
  Edit: PostEdit,
  View: PostView
}