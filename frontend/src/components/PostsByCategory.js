import Posts from './Posts';

const PostsByCategory = ({posts, category}) => {
  const list = posts
    .filter((post) => {
      return post.category === category
    });

  return Posts({posts: list});
}

export default PostsByCategory;