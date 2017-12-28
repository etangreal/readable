import React from 'react';
import Modal from 'react-modal';

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
          Save <i className="far fa-save"></i>
        </button>&nbsp;
        <button onClick={handleCancel}>
          Cancel <i className="far fa-ban"></i>
        </button>
      </td>
    </tr>
  </tbody></table>
);

export default CommentEdit;
