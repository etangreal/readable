import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: {
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
        this.setState({backend: JSON.parse(data)});
      });
  }

  categories = () => {
    return Categories(this.state.backend);
  }

  render() {
    return (
      <div>

        <Route exact path='/' render={() => starterPage({
          logo,
          backend: this.state.backend
        })} />

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

const starterPage = ({logo, backend}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      Talking to the backend yields these categories: <br/>
      {JSON.stringify(backend)}
    </p>
  </div>
);

export default App;
