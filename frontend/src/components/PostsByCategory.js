import React from 'react';
import Posts from './Posts';
import VoteScore from './VoteScore';

const PostsByCategory = ({posts, category}) => {
  const list = posts
    .filter((post) => {
      return post.category === category
    });

  return Posts({posts: list});
}

export default PostsByCategory;