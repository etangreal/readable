import React from 'react';

const CommentEdit = ({
  comment,
  updateComment,
  saveComment,
  cancelComment
}) => {
  const handleUpdateComment = (field) => (e) => updateComment(field, e.target.value);

  return (
    <table><tbody>
      <tr>
        <td>Author:</td>
        <td>{comment.author}</td>
      </tr>
      <tr>
        <td>Body:</td>
        <td><textarea
          value={comment.body}
          rows="4" cols="80"
          onChange={handleUpdateComment('body')}
        /></td>
      </tr>

      <tr>
        <td>Vote Score:</td>
        <td>{comment.voteScore}</td>
      </tr>
      {/* <tr>
        <td>id:</td>
        <td>{comment.id}</td>
      </tr>
      <tr>
        <td>parentId:</td>
        <td>{comment.parentId}</td>
      </tr>
      <tr>
        <td>timestamp:</td>
        <td>{comment.timestamp}</td>
      </tr>
      <tr>
        <td>deleted:</td>
        <td>{comment.deleted.toString()}</td>
      </tr>
      <tr>
        <td>parentDeleted:</td>
        <td>{comment.parentDeleted.toString()}</td>
      </tr> */}
      <tr>
        <td></td>
        <td>
          <button onClick={saveComment}>
            Save <i className="far fa-save"></i>
          </button>&nbsp;
          <button onClick={cancelComment}>
            Cancel <i className="far fa-ban"></i>
          </button>
        </td>
      </tr>
    </tbody></table>
  );
};

export default CommentEdit;
