import React from 'react';
import Modal from 'react-modal';
import Select from './Select';

export const PostEditModal = ({
  isOpen,
  post,
  categories,
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
      categories,
      update,
      onSave,
      onCancel: handleCancel
    }} />
  </Modal>
}

const PostEdit = ({
  post,
  categories,
  update,
  onSave: handleSave,
  onCancel: handleCancel
}) => {
  const categoryOptions = categories.map(c => ({id: c.name, name: c.name, value: c.name}));

  return (
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
        <td><Select
          items={categoryOptions}
          defaultValue={post.category}
          onChange={value => update('category', value)}
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
}

export default PostEdit;