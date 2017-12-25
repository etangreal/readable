
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
    .then((res) => {
      return(res.json())
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
    .then((res) => {
      return(res.json())
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
    .then((res) => {
      return(res.json())
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
    .then((res) => {
      return(res.json())
    });
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
    .then((res) => {
      return(res.json())
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
    .then((res) => {
      return(res.json())
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
    .then((res) => {
      return(res.json())
    })
}

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
