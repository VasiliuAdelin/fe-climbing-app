import React from "react";
import { isEmpty } from "lodash";
import AddComment from "./AddComment";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";
import { selectState } from "../../features/auth/authSlice";

const CommentSection = ({ comments, onSubmit }) => {
  const { isLoggedIn } = useSelector(selectState);
  return (
    <div>
      <div className="lg:overflow-y-auto min-h-500 h-500">
        {isEmpty(comments) && (
          <div className="p-4">
            <span className="text-gray-100 text-xs">Not a comment yet!</span>
          </div>
        )}
        {comments.map(({ description, author, createdAt }, index) => (
          <CommentItem
            key={index}
            userImage={author.imageLink}
            userName={author.name}
            message={description}
            createdAt={createdAt}
          />
        ))}
      </div>
      {!isLoggedIn && (
        <div className="p-4">
          <span className="text-gray-100 text-xs">
            Please login to comment!
          </span>
        </div>
      )}
      {isLoggedIn && <AddComment onSubmit={onSubmit} />}
    </div>
  );
};

CommentSection.defaultProps = {
  comments: [],
  onSubmit: () => undefined,
};

export default CommentSection;
