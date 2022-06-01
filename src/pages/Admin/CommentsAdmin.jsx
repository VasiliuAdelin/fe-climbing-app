import React from 'react';
import CommentsSettings from '../../components/Admin/Comments/CommentsSettings';

function CommentsAdmin() {
  return (
    <div className="bg-gray-100 min-h-500">
      <div className="px-3 md:px-8 h-auto pt-10">
        <div className="container mx-auto max-w-full mt-5">
          <CommentsSettings />
        </div>
      </div>
    </div>
  );
}

export default CommentsAdmin;
