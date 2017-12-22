import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const updateCategories = (categories) => (state) => ({
  backend: {
    ... state.backend,
    categories
  }
})

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
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    const header = {
      headers: {
        'Authorization': 'whatever-you-want'
      },
      // credentials: 'include'
    };

    console.log('fetching from url', url);

    fetch(url, header)
      .then((res) => {
        return(res.text())
      })
      .then((data) => {
        this.setState(updateCategories(JSON.parse(data)))
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
  return <div> Posts </div>
}

export default App;
