import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

const updatePosts = (posts) => (state) => ({
  backend: Object.assign({}, state.backend, {
    posts
  })
});
const updateCategories = (categories) => (state) => ({
  backend: Object.assign({}, state.backend, {
    categories
  })
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: {
        posts: [],
        categories: []
      }
    }
  }

  componentDidMount() {
    this.fetchPosts();
    this.fetchCategories();
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

  renderPosts = () => {
    return Posts(this.state.backend);
  }

  renderPostsByCategory = (props) => {
    return PostsByCategory({
      posts: this.state.backend.posts,
      category: props.match.params.category
    });
  }

  renderPostDetails = (props) => {
    return PostDetails({
      posts: this.state.backend.posts,
      category: props.match.params.category,
      postId: props.match.params.postId
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

const PostDetails = ({posts, category, postId}) => {
  const post = posts.find(post => post.id === postId);

  return post ? (
      <div>
        id: {post.id}<br />
        author: {post.author}<br />
        title: {post.title}<br />
        category: {post.category}<br />
        body: {post.body}<br />
        timestamp: {post.timestamp}<br />
        voteScore: {post.voteScore}
      </div>
    ) : <div>none</div>;
}

const PostsByCategory = ({posts, category}) => {
  const list = posts
    .filter((post) => {
      return post.category === category
    })
    .map(post =>
      <li key={post.id}>
        id: {post.id}<br />
        author: {post.author}<br />
        title: {post.title}<br />
        category: {post.category}<br />
        body: {post.body}<br />
        timestamp: {post.timestamp}<br />
        voteScore: {post.voteScore}
      </li>
    );

  return (
    <ul>
      {list.length ? list : <li>none</li>}
    </ul>
  );
}

const Posts = ({posts}) => {
  const list = posts.map(post =>
    <li key={post.id}>
      id: {post.id}<br />
      author: {post.author}<br />
      title: {post.title}<br />
      category: {post.category}<br />
      body: {post.body}<br />
      timestamp: {post.timestamp}<br />
      voteScore: {post.voteScore}
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default App;
