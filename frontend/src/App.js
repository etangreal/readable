import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const updatePosts = (posts) => (state) => ({
  backend: {
    ... state.backend,
    posts
  }
});
const updateCategories = (categories) => (state) => ({
  backend: {
    ... state.backend,
    categories
  }
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

  posts = () => {
    return Posts(this.state.backend);
  }

  categories = () => {
    return Categories(this.state.backend);
  }

  render() {
    return (
      <div>

        <Route exact path='/' render={this.posts} />

        <Route exact path='/categories' render={this.categories} />

        <Route exact path='/posts' render={() => <div>Posts</div>} />

        <Route exact path='/comments' render={() => <div>Comments</div>} />

      </div>
    );
  }
}

const Categories = ({categories}) => {
  const list = categories.map(category =>
    <li key={category.name}>
      {category.name}
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
};

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
