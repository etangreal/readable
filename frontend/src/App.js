import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
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
        this.setState({backend:data});
      });
  }

  render() {
    return (
      <div>

        <Route exact path='/' render={() => starterPage({
          logo,
          backend: this.state.backend
        })} />

        <Route exact path='/categories' render={() => <div>Categories</div>} />

        <Route exact path='/posts' render={() => <div>Posts</div>} />

        <Route exact path='/comments' render={() => <div>Comments</div>} />

      </div>
    );
  }
}

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
      {backend}
    </p>
  </div>
);

export default App;
