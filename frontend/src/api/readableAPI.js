
// ------------------------------------------------------------------------------------------------
// CATEGORIES
// ------------------------------------------------------------------------------------------------

export const fetchCategories = () => {
  const url = `${process.env.REACT_APP_BACKEND}/categories`;
  const header = {
    headers: {
      'Authorization': 'whatever-you-want'
    },
    // credentials: 'include'
  };

  return fetch(url, header)
    .then(res => {
      return res.json()
    }).then(data => {
      return data.categories;
    });
}

// ------------------------------------------------------------------------------------------------
// POSTS
// ------------------------------------------------------------------------------------------------

export const fetchPosts = () => {
  const url = `${process.env.REACT_APP_BACKEND}/posts`;
  const header = {
    headers: {
      'Authorization': 'whatever-you-want'
    },
    // credentials: 'include'
  };

  return fetch(url, header)
    .then(res => {
      return res.json()
    }).then(posts => {
      return posts.filter(post => post.deleted === false);
    })
}

export const upVotePost = (post) => {
  const url = `${process.env.REACT_APP_BACKEND}/posts/${post.id}`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      option: 'upVote'
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const downVotePost = (post) => {
  const url = `${process.env.REACT_APP_BACKEND}/posts/${post.id}`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      option: 'downVote'
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    });
}

export const createPost = (post) => {
  const url = `${process.env.REACT_APP_BACKEND}/posts`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      id: post.id,
      author: post.author,
      title: post.title,
      category: post.category,
      body: post.body,
      timestamp: post.timestamp
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const updatePost = (post) => {
  const url = `${process.env.REACT_APP_BACKEND}/posts/${post.id}`;
  const config = {
    method: 'PUT',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      title: post.title,
      body: post.body
    })
  };

  return fetch(url, config)
    .then(res => {
      return(res.json())
    })
}

export const deletePost = (postId) => {
  const url = `${process.env.REACT_APP_BACKEND}/posts/${postId}`;
  const config = {
    method: 'DELETE',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
  };

  return fetch(url, config)
    .then(res => {
      return res.ok ? postId : undefined;
    })
}

// ------------------------------------------------------------------------------------------------
// COMMENTS
// ------------------------------------------------------------------------------------------------

export const fetchComments = postId => {
  const url = `${process.env.REACT_APP_BACKEND}/posts/${postId}/comments`;
  const header = {
    headers: {
      'Authorization': 'whatever-you-want'
    },
    // credentials: 'include'
  };

  return fetch(url, header)
    .then(res => {
      return res.json()
    })
}

export const upVoteComment = (comment) => {
  const url = `${process.env.REACT_APP_BACKEND}/comments/${comment.id}`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      option: 'upVote'
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const downVoteComment = (comment) => {
  const url = `${process.env.REACT_APP_BACKEND}/comments/${comment.id}`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      option: 'downVote'
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const createComment = (comment) => {
  const url = `${process.env.REACT_APP_BACKEND}/comments`;
  const config = {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      id: comment.id,
      parentId: comment.parentId,
      author: comment.author,
      body: comment.body,
      timestamp: comment.timestamp
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const updateComment = (comment) => {
  const url = `${process.env.REACT_APP_BACKEND}/comments/${comment.id}`;
  const config = {
    method: 'PUT',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
    body: JSON.stringify({
      body: comment.body
    })
  };

  return fetch(url, config)
    .then(res => {
      return res.json()
    })
}

export const deleteComment = (commentId) => {
  const url = `${process.env.REACT_APP_BACKEND}/comments/${commentId}`;
  const config = {
    method: 'DELETE',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    // credentials: 'include'
  };

  return fetch(url, config)
    .then(res => {
      return res.ok ? commentId : undefined;
    })
}

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
