import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchCategories,
  fetchPosts,
  fetchComments,

  upVotePost,
  downVotePost,
  upVoteComment,
  downVoteComment
} from './actions';
import Post from './components/Post';
import Posts from './components/Posts';
import './App.css';

// ------------------------------------------------------------------------------------------------
// APP
// ------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined,
      comment: undefined
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
    if (this.postId) {
      this.props.fetchComments(this.postId);
    }
  }

  addPost = () => {
    console.log('Add Post');
  }

  editPost = (post) => () => {
    console.log('Edit Post');
  }

  cancelPost = () => {
    console.log('Cancel Post');
  }

  addComment = () => {
    console.log('Add Comment');
  }

  editComment = (comment) => () => {
    console.log('Edit Comment');
  }

  cancelComment = () => {
    console.log('Cancel Comment');
  }

  actions = () => ({
      upVotePost: this.props.upVotePost,
      downVotePost: this.props.downVotePost,
      addPost: this.addPost,
      editPost: this.editPost,
      cancelPost: this.cancelPost,
      createPost: this.props.addPost,
      updatePost: this.props.editPost,
      deletePost: this.props.deletePost,

      upVoteComment: this.props.upVoteComment,
      downVoteComment: this.props.downVoteComment,
      addComment: this.addComment,
      editComment: this.editComment,
      cancelComment: this.cancelComment,
      createComment: this.props.addComment,
      updateComment: this.props.editComment,
      deleteComment: this.props.deleteComment,
  })

  renderPosts = () => {
    return Posts({
      posts: this.props.posts,
      actions: this.actions()
    });
  }

  renderPostsByCategory = (props) =>
    Posts({
      posts: this.props.posts.filter((post) => {
          return post.category === props.match.params.category
        }),
      actions: this.actions()
    });

  renderPostDetails = (props) => {
    const { category, postId } = props.match.params;
    this.postId = postId;
    const post = this.props.posts.find(
      post => post.id === postId &&
      post.category === category
    );

    return post ?
      Post({
        post,
        comments: this.props.comments,
        actions: this.actions()
      })
      : <div>none</div>;
  }

  render() {
    return (
      <div>
        <br />
        <Route exact path='/' render={this.renderPosts} />
        <Route exact path='/:category' render={this.renderPostsByCategory} />
        <Route exact path='/:category/:postId' render={this.renderPostDetails} />
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
    createPost: (post) => () => console.log('Create Post'),
    updatePost: (post) => () => console.log('Update Post'),
    deletePost: (post) => () => console.log('Delete Post'),

    fetchComments: (comments) => dispatch(fetchComments(comments)),
    upVoteComment: (comment) => () => dispatch(upVoteComment(comment)),
    downVoteComment: (comment) => () => dispatch(downVoteComment(comment)),
    createComment: (comment) => () => console.log('Create Comment'),
    updateComment: (comment) => () => console.log('Update Comment'),
    deleteComment: (comment) => () => console.log('Delete Comment'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------