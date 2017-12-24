
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
    })
}

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
