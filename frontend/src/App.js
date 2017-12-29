import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import {
  fetchCategories,

  fetchPosts,
  upVotePost,
  downVotePost,
  createPost,
  updatePost,
  deletePost,

  fetchComments,
  upVoteComment,
  downVoteComment,
  createComment,
  updateComment,
  deleteComment
} from './actions';
import Navigation from './components/Navigation';
import Post, { post } from './components/Post';
import Posts from './components/Posts';
import Comment, { comment } from './components/Comment';
import './App.css';

const updatePostState = (field, value) => (state) => ({
  post: {
    ...state.post,
    [field]: value
  }
});
const updateCommentState = (field, value) => (state) => ({
  comment: {
    ...state.comment,
    [field]: value
  }
});
const isPostNotDeleted = (post) => post.deleted !== true;

// ------------------------------------------------------------------------------------------------
// APP
// ------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostAdd: false,
      isPostEdit: false,
      post: undefined,

      isCommentAdd: false,
      isCommentEdit: false,
      comment: undefined
    }
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    if (this.postId !== this.savedPostId) {
      this.savedPostId = this.postId;
      this.props.fetchComments(this.postId);
    }
  }

  // ----------------------------------------------------------------------------------------------

  addPost = () => {
    const category = this.props.categories[0];
    const path = category ? category.path : 'unknown';

    this.setState({
      isPostAdd: true,
      isPostEdit: false,
      post: post(path)
    });
  }

  editPost = (post) => () => {
    this.setState({
      isPostAdd: false,
      isPostEdit: true,
      post: Object.assign({}, post)
    });
  }

  updatePost = (field, value) => this.setState(updatePostState(field, value))

  savePost = () => {
    this.state.isPostAdd && this.props.createPost(this.state.post);
    this.state.isPostEdit && this.props.updatePost(this.state.post);

    this.setState({
      isPostAdd: false,
      isPostEdit: false,
      post: undefined
    });
  }

  cancelPost = () => {
    this.setState({
      isPostAdd: false,
      isPostEdit: false,
      post: undefined
    });
  }

  // ----------------------------------------------------------------------------------------------

  addComment = (postId) => () => {
    this.setState({
      isCommentAdd: true,
      isCommentEdit: false,
      comment: Object.assign(comment(), {parentId: postId})
    });
  }

  editComment = (comment) => () => {
    this.setState({
      isCommentAdd: false,
      isCommentEdit: true,
      comment: Object.assign({}, comment)
    });
  }

  updateComment = (field, value) => this.setState(updateCommentState(field, value))

  saveComment = () => {
    this.state.isCommentAdd && this.props.createComment(this.state.comment);
    this.state.isCommentEdit && this.props.updateComment(this.state.comment);

    this.setState({
      isCommentAdd: false,
      isCommentEdit: false,
      comment: undefined
    });
  }

  cancelComment = () => {
    this.setState({
      isCommentAdd: false,
      isCommentEdit: false,
      comment: undefined
    });
  }

  // ----------------------------------------------------------------------------------------------

  actions = () => ({
      upVotePost: this.props.upVotePost,
      downVotePost: this.props.downVotePost,
      addPost: this.addPost,
      editPost: this.editPost,
      deletePost: this.props.deletePost,

      upVoteComment: this.props.upVoteComment,
      downVoteComment: this.props.downVoteComment,
      addComment: this.addComment,
      editComment: this.editComment,
      deleteComment: this.props.deleteComment,
  })

  // ----------------------------------------------------------------------------------------------

  renderPosts = () => {
    return Posts({
      posts: this.props.posts.filter(post => isPostNotDeleted(post)),
      actions: this.actions()
    });
  }

  renderPostsByCategory = (props) => (
    Posts({
      posts: this.props.posts.filter((post) => {
          return (
            post.category === props.match.params.category
            && isPostNotDeleted(post)
          )
        }),
      actions: this.actions()
    })
  )

  renderPostDetails = (props) => {
    const { category, postId } = props.match.params;
    const post = this.props.posts.find(
      post => post.id === postId
      && post.category === category
      && isPostNotDeleted(post)
    );

    if (!post)
      return <div>no post ...</div>

    this.postId = postId;

    return Post.View({
        post,
        comments: this.props.comments,
        actions: this.actions()
      });
  }

  renderPostAddOrEditModal = () => {
    if (this.state.isPostAdd || this.state.isPostEdit) {
      const PostAddOrEdit = this.state.isPostAdd ? Post.Add : Post.Edit;

      return <Modal
        className='modal'
        overlayClassName='overlay'
        contentLabel='Modal'
        isOpen={true}
        onRequestClose={this.cancelPost}>

        <PostAddOrEdit
          post={this.state.post}
          categories={this.props.categories}
          updatePost={this.updatePost}
          savePost={this.savePost}
          cancelPost={this.cancelPost} />
      </Modal>
    }
  }

  renderCommentAddOrEditModal = () => {
    if (this.state.isCommentAdd || this.state.isCommentEdit) {
      const CommentAddOrEdit = this.state.isCommentAdd ? Comment.Add : Comment.Edit;

      return <Modal
        className='modal'
        overlayClassName='overlay'
        contentLabel='Modal'
        isOpen={true}
        onRequestClose={this.cancelComment}>

        <CommentAddOrEdit
          comment={this.state.comment}
          updateComment={this.updateComment}
          saveComment={this.saveComment}
          cancelComment={this.cancelComment} />
      </Modal>
    }
  }

  render() {
    return (
      <div>
        <Navigation
          categories={this.props.categories}
          addPost={this.addPost} />

        <Switch>
          <Route exact path='/' render={this.renderPosts} />
          <Route exact path='/:category' render={this.renderPostsByCategory} />
          <Route exact path='/:category/:postId' render={this.renderPostDetails} />
        </Switch>

        {this.renderPostAddOrEditModal()}
        {this.renderCommentAddOrEditModal()}
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------
// REDUX
// ------------------------------------------------------------------------------------------------

function mapStateToProps({ categories, posts, comments }) {
  return {
    categories,
    posts,
    comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: (categories) => dispatch(fetchCategories(categories)),

    fetchPosts: (posts) => dispatch(fetchPosts(posts)),
    upVotePost: (post) => () => dispatch(upVotePost(post)),
    downVotePost: (post) => () => dispatch(downVotePost(post)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => () => dispatch(deletePost(postId)),

    fetchComments: (comments) => dispatch(fetchComments(comments)),
    upVoteComment: (comment) => () => dispatch(upVoteComment(comment)),
    downVoteComment: (comment) => () => dispatch(downVoteComment(comment)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => () => dispatch(deleteComment(commentId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------