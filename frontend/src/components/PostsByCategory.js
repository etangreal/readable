import Posts from './Posts';

const PostsByCategory = ({posts, category, actions}) => {
  const list = posts
    .filter((post) => {
      return post.category === category
    });

  return Posts({posts: list, actions});
}

export default PostsByCategory;