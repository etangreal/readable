import React from 'react';

const PostEdit = ({
  post,
  categories,
  updatePost,
  savePost,
  cancelPost
}) => {
  const handleUpdatePost = (field) => (e) => updatePost(field, e.target.value);

  return (
    <table><tbody>
      {/* <tr>
        <td>id:</td>
        <td>{post.id}</td>
      </tr> */}
      <tr>
        <td>author:</td>
        <td>{post.author}</td>
      </tr>
      <tr>
        <td>category:</td>
        <td>{post.category}</td>
      </tr>
      <tr>
        <td>title:</td>
        <td><input
          type="text"
          className="PostEdit-title"
          value={post.title}
          onChange={handleUpdatePost('title')}
        /></td>
      </tr>
      <tr>
        <td>body:</td>
        <td><textarea
          value={post.body}
          rows="4" cols="80"
          onChange={handleUpdatePost('body')}
        /></td>
      </tr>
      {/* <tr>
        <td>timestamp:</td>
        <td>{post.timestamp}</td>
      </tr> */}
      <tr>
        <td>voteScore:</td>
        <td>{post.voteScore}</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button onClick={savePost}>
            Save <i className="far fa-save"></i>
          </button>&nbsp;
          <button onClick={cancelPost}>
            Cancel <i className="far fa-ban"></i>
          </button>
        </td>
      </tr>
    </tbody></table>
  );
};

export default PostEdit;
