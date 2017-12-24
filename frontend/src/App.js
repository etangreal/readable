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
// FUNCTIONS
// ------------------------------------------------------------------------------------------------

const updateCategories = (categories) => (state) => ({
  backend: Object.assign({}, state.backend, {
    categories
  })
});
const updatePosts = (posts) => (state) => ({
  backend: Object.assign({}, state.backend, {
    posts
  })
});
const updateComments = (comments) => (state) => ({
  backend: Object.assign({}, state.backend, {
    comments
  })
});

// ------------------------------------------------------------------------------------------------
// APP
// ------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: undefined,

      backend: {
        categories: [],
        posts: [],
        comments: []
      }
    }
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchPosts();
    this.props.fetchCategories();
    this.props.fetchPosts();
    if (this.postId) {
      this.fetchComments(this.postId);
    }
  }

  fetchCategories = () => {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    const header = {
      headers: {
        'Authorization': 'whatever-you-want'
      },
      // credentials: 'include'
    };

    fetch(url, header)
      .then((res) => {
        return(res.json())
      })
      .then((data) => {
        this.setState(updateCategories(data))
      });
  }

  fetchPosts = () => {
    const url = `${process.env.REACT_APP_BACKEND}/posts`;
    const header = {
      headers: {
        'Authorization': 'whatever-you-want'
      },
      // credentials: 'include'
    };

    fetch(url, header)
      .then((res) => {
        return(res.json())
      })
      .then((data) => {
        this.setState(updatePosts(data))
      });
  }

  fetchComments = (postId) => {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${postId}/comments`;
    const header = {
      headers: {
        'Authorization': 'whatever-you-want'
      },
      // credentials: 'include'
    };

    fetch(url, header)
      .then((res) => {
        return(res.json())
      })
      .then((data) => {
        this.setState(updateComments(data))
      });
  }

  renderPosts = () => {
    return Posts({
      posts: this.state.backend.posts
    });
  }

  renderPostsByCategory = (props) => {
    return PostsByCategory({
      posts: this.state.backend.posts,
      category: props.match.params.category
    });
  }

  renderPostDetails = (props) => {
    const { category, postId } = props.match.params;
    this.postId = postId;

    return PostDetails({
      posts: this.state.backend.posts,
      comments: this.state.backend.comments,
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
    upVotePost: (post) => dispatch(upVotePost(post)),
    downVotePost: (post) => dispatch(downVotePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------