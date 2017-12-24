import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchCategories,
  fetchPosts,
  fetchComments,

  upVotePost,
  downVotePost
} from './actions';
import Posts from './components/Posts';
import PostsByCategory from './components/PostsByCategory';
import PostDetails from './components/PostDetails';
import './App.css';

// ------------------------------------------------------------------------------------------------
// APP
// ------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: undefined
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
    if (this.postId) {
      this.props.fetchComments(this.postId);
    }
  }

  renderPosts = () => {
    return Posts({
      posts: this.props.posts,
      actions: {
        upVotePost: this.props.upVotePost,
        downVotePost: this.props.downVotePost
      }
    });
  }

  renderPostsByCategory = (props) => {
    return PostsByCategory({
      posts: this.props.posts,
      category: props.match.params.category
    });
  }

  renderPostDetails = (props) => {
    const { category, postId } = props.match.params;
    this.postId = postId;

    return PostDetails({
      posts: this.props.posts,
      comments: this.props.comments,
      category,
      postId
    });
  }

  render() {
    return (
      <div>
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
    fetchComments: (comments) => dispatch(fetchComments(comments)),

    upVotePost: (post) => () => dispatch(upVotePost(post)),
    downVotePost: (post) => () => dispatch(downVotePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------