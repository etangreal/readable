import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

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
    return Posts(this.state.backend);
  }

  renderPostsByCategory = (props) => {
    return PostsByCategory({
      posts: this.state.backend.posts,
      category: props.match.params.category
    });
  }

  renderPostDetails = (props) => {
    const postId = props.match.params.postId;
    this.postId = postId;

    return PostDetails({
      posts: this.state.backend.posts,
      comments: this.state.backend.comments,
      category: props.match.params.category,
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

const VoteScore = ({upVote, downVote}) => {
  return (
    <div className="VoteScore">
      <button onClick={upVote}>+</button>
      <button onClick={downVote}>-</button>
    </div>
  );
}

const Comments = ({comments}) => {
  const list = comments.map(comment => (
    <li key={comment.id}>
      id: {comment.id}<br />
      parentId: {comment.parentId}<br />
      author: {comment.author}<br />
      body: {comment.body}<br />
      timestamp: {comment.timestamp}<br />
      voteScore: {comment.voteScore} <VoteScore /><br />
      deleted: {comment.deleted.toString()}<br />
    </li>
  ));

  return list.length ? <ul>{list}</ul> : <div>no comments</div>
}

const PostDetails = ({posts, comments, category, postId}) => {
  const post = posts.find(post => post.id === postId);

  return post ? (
      <div>
        id: {post.id}<br />
        author: {post.author}<br />
        title: {post.title}<br />
        category: {post.category}<br />
        body: {post.body}<br />
        timestamp: {post.timestamp}<br />
        voteScore: {post.voteScore} <VoteScore /><br />
        <br />
        {Comments({comments})}
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
        voteScore: {post.voteScore} <VoteScore /><br />
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
      voteScore: {post.voteScore} <VoteScore /><br />
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default App;
