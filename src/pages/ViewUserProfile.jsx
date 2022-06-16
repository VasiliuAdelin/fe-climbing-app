import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';
import ComplexLayout from '../components/layouts/ComplexLayout';
import ViewUserDetails from '../components/profile/ViewUserDetails';
import { getUserProfile } from '../features/people/people.actions';
import useRouter from '../hooks/useRouter';
import CommentSection from '../components/Comment/CommentSection';
import Accordion from '../components/shared/Accordion/Accordion';
import { createCommentAsync } from '../features/ui/ui.actions';
import { setFieldPeople } from '../features/people/peopleSlice';
import {
  getPosts,
} from '../features/posts/posts.actions';
import PostsSection from '../components/NewsFeed/PostsSection';
import RouteListView from '../components/crags/RouteListView';

function ViewUserProfile() {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const { user } = useSelector((state) => state.auth);
  const { currentUserProfile } = useSelector((state) => state.people);
  const { posts: reduxPosts } = useSelector((state) => state.posts);

  const { query, push } = useRouter();
  const dispatch = useDispatch();

  const { id } = query;

  useEffect(() => {
    if (!id) {
      push('/');
    } else {
      dispatch(getUserProfile(id));
      dispatch(getPosts(`/?author=${id}`));
    }
  }, [id]);

  useEffect(() => {
    setProfile(currentUserProfile);
  }, [currentUserProfile]);

  useEffect(() => {
    setPosts(reduxPosts);
  }, [reduxPosts]);

  const handleOnSubmitComment = (message) => {
    const payloadComment = {
      description: message,
      entityId: id,
      author: user.id,
    };

    const newComment = {
      description: 'Comment sent for validation...',
      author: {
        name: user.name,
        imageLink: user.imageLink,
        id: user.id,
      },
      createdAt: new Date(),
      entityId: id,
    };

    dispatch(createCommentAsync(payloadComment));

    const selectProfile = cloneDeep(profile);
    let selectedPostCommentsCopy = cloneDeep(selectProfile.comments || []);

    selectedPostCommentsCopy = [...selectedPostCommentsCopy, newComment];

    selectProfile.comments = [...selectedPostCommentsCopy];

    dispatch(
      setFieldPeople({
        name: 'currentUserProfile',
        value: selectProfile,
      }),
    );
  };

  const { comments = [], ...otherProps } = profile;
  const { ascents, interested } = otherProps;

  return (
    <ComplexLayout>
      <ViewUserDetails {...otherProps} />
      <Accordion
        title="Feedback Section"
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <CommentSection comments={comments} onSubmit={handleOnSubmitComment} />
      </Accordion>
      <Accordion
        title="User Posts"
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <PostsSection posts={posts} />

      </Accordion>
      <Accordion
        title="Ascents"
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <RouteListView data={ascents} />
      </Accordion>
      <Accordion
        title="On ToDo list"
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <RouteListView data={interested} />
      </Accordion>
    </ComplexLayout>
  );
}

export default ViewUserProfile;
