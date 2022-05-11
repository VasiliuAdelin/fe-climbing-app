import React from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import AddComment from './AddComment';
import CommentItem from './CommentItem';
import { selectState } from '../../features/auth/authSlice';

function CommentSection({ comments, onSubmit }) {
  const { isLoggedIn } = useSelector(selectState);
  return (
    <div>
      <div className="overflow-y-auto max-h-500">
        {isEmpty(comments) && (
          <div className="p-4">
            <span className="text-gray-700 text-xs">Not a comment yet!</span>
          </div>
        )}
        {comments.map(({ description, author, createdAt }, index) => (
          <CommentItem
            key={index}
            id={author.id}
            userImage={author.imageLink}
            userName={author.name}
            message={description}
            createdAt={createdAt}
          />
        ))}
      </div>
      {!isLoggedIn && (
        <div className="p-4">
          <span className="text-gray-700 text-xs">
            Please login to comment!
          </span>
        </div>
      )}
      {isLoggedIn && <AddComment onSubmit={onSubmit} />}
    </div>
  );
}

CommentSection.defaultProps = {
  comments: [],
  onSubmit: () => undefined,
};

export default CommentSection;
