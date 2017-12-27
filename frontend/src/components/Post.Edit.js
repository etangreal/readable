import React from 'react';
import Modal from 'react-modal';

export const PostEditModal = ({
  isOpen,
  post,
  update,
  onSave,
  onCancel: handleCancel
}) => {
  return <Modal
    className='modal'
    overlayClassName='overlay'
    contentLabel='Modal'
    isOpen={isOpen}
    onRequestClose={handleCancel}>

    <PostEdit {...{
      post,
      update,
      onSave,
      onCancel: handleCancel
    }} />
  </Modal>
}

const PostEdit = ({
  post,
  update,
  onSave: handleSave,
  onCancel: handleCancel
}) => (
  <table><tbody>
    <tr>
      <td>id:</td>
      <td>{post.id}</td>
    </tr>
    <tr>
      <td>author:</td>
      <td><input
          type="text"
          value={post.author}
          onChange={e => update('author', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>title:</td>
      <td><input
        type="text"
        className="PostEdit-title"
        value={post.title}
        onChange={e => update('title', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>category:</td>
      <td><input
        type="text"
        value={post.category}
        onChange={e => update('category', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>body:</td>
      <td><textarea
        value={post.body}
        rows="4" cols="80"
        onChange={e => update('body', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>timestamp:</td>
      <td>{post.timestamp}</td>
    </tr>
    <tr>
      <td>voteScore:</td>
      <td>{post.voteScore}</td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button onClick={handleSave}>
          <i className="far fa-save"></i>
        </button>
        <button onClick={handleCancel}>
          <i className="far fa-ban"></i>
        </button>
      </td>
    </tr>
  </tbody></table>
);

export default PostEdit;