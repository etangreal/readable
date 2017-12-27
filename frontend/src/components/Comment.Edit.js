import React from 'react';
import Modal from 'react-modal';

export const CommentEditModal = ({
  isOpen,
  comment,
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

    <CommentEdit {...{
      comment,
      update,
      onSave,
      onCancel: handleCancel
    }} />
  </Modal>
}

const CommentEdit = ({
  comment,
  update,
  onSave: handleSave,
  onCancel: handleCancel
}) => (
  <table><tbody>
    <tr>
      <td>id:</td>
      <td>{comment.id}</td>
    </tr>
    <tr>
      <td>parentId:</td>
      <td>{comment.parentId}</td>
    </tr>
    <tr>
      <td>author:</td>
      <td><input
          type="text"
          value={comment.author}
          onChange={e => update('author', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>body:</td>
      <td><textarea
        value={comment.body}
        rows="4" cols="80"
        onChange={e => update('body', e.target.value)}
      /></td>
    </tr>
    <tr>
      <td>timestamp:</td>
      <td>{comment.timestamp}</td>
    </tr>
    <tr>
      <td>voteScore:</td>
      <td>{comment.voteScore}</td>
    </tr>
    <tr>
      <td>deleted:</td>
      <td>{comment.deleted.toString()}</td>
    </tr>
    <tr>
      <td>parentDeleted:</td>
      <td>{comment.parentDeleted.toString()}</td>
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

export default CommentEdit;
