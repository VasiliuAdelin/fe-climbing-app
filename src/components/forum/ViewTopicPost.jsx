/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Icon } from '@material-tailwind/react';
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep, isEmpty } from 'lodash';
import ComplexLayout from '../layouts/ComplexLayout';
import Breadcrumb from '../shared/Breadcrumb';
import useRouter from '../../hooks/useRouter';
import { getTopicById, updateTopic } from '../../features/topics/topics.actions';
import CommentSection from '../Comment/CommentSection';
import { createCommentAsync } from '../../features/ui/ui.actions';

function AboutPost({ author, createdAt }) {
  return (
    <div>
      <div className="flex my-4 items-center justify-between">
        <div className="flex">
          <img
            className="w-12 h-12 rounded-full"
            src={author?.imageLink}
            alt="as"
          />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              {author?.name}
            </span>
            <div className="flex mt-2 items-center">
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                {moment(createdAt).format('lll')}
              </span>
              <span className="w-2 h-2 rounded bg-gray-500 mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewTopicPost() {
  const { query } = useRouter();
  const [currentTopic, setCurrentTopic] = useState({});
  const { currentTopic: reduxCurrentTopic } = useSelector((state) => state.topics);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { id, topic } = query;
  useEffect(() => {
    if (id) {
      dispatch(getTopicById(id));
    }
  }, [id]);

  useEffect(() => {
    setCurrentTopic(reduxCurrentTopic);
    if (reduxCurrentTopic?.views) {
      dispatch(updateTopic({ id, payload: { views: reduxCurrentTopic.views + 1 } }));
    }
  }, [reduxCurrentTopic]);

  const handleOnSubmitComment = (message) => {
    const payloadComment = {
      description: message,
      entityId: id,
      author: user.id,
    };

    const newComment = {
      description: message,
      author: {
        name: user.name,
        imageLink: user.imageLink,
        id: user.id,
      },
      createdAt: new Date(),
      entityId: id,
    };

    dispatch(createCommentAsync(payloadComment));
    let topicClone = cloneDeep(currentTopic);
    let selectedPostCommentsCopy = cloneDeep(topicClone.comments || []);
    selectedPostCommentsCopy = [...selectedPostCommentsCopy, newComment];

    topicClone = {
      ...topicClone,
      comments: selectedPostCommentsCopy,
    };

    setCurrentTopic(topicClone);
  };

  const {
    title = '', body = '', author = {}, comments = [], views = 0,
  } = currentTopic;

  const routesBreadcrumb = [
    {
      name: 'ClimbAround',
      icon: 'home',
      urlTo: '/',
    },
    {
      name: 'Topics',
      icon: 'article',
      urlTo: '/forum',
    },
    {
      name: topic.split('-').join(' '),
      icon: 'feed',
      urlTo: `/forum/${topic}`,
    },
    {
      name: title,
      icon: 'description',
      urlTo: `/forum/${topic}/${id}`,
    },
  ];

  const formatBody = (data) => {
    if (!data) return '';

    if (data.includes('entityMap') && data.includes('blocks')) {
      const parsedData = JSON.parse(data);
      const content = draftToHtml(parsedData);
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return data;
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={title}
      subtitle={topic}
      customBackground="https://wallup.net/wp-content/uploads/2015/12/113425-sports-climbing-landscape.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      {
        !isEmpty(currentTopic) && (
        <div className="w-full lg:w-4/5 m-auto flex flex-wrap">
          <div className="w-full lg:w-4/5 lg:pr-2">
            <section className="w-full p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
              <AboutPost author={author} />
            </section>
            <section className="w-full p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
              { formatBody(body) }
            </section>

            <section className="w-full p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
              <div className="font-bold text-xl my-2">Comments</div>
              <CommentSection
                comments={comments}
                onSubmit={handleOnSubmitComment}
              />
            </section>
          </div>
          <div className="w-full lg:w-1/5 py-2 px-2 bg-gray-100 lg:h-screen">
            <section className="w-full p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
              <p>Stats</p>
              <div className="flex items-center">
                <Icon name="menu" size="base" color="dark" />
                <span className="inline-block m-2 text-xs">
                  {' '}
                  {views}
                  {' '}
                  Views
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="article" size="base" color="dark" />
                <span className="inline-block m-2 text-xs">
                  {' '}
                  {comments.length}
                  {' '}
                  comments
                </span>
              </div>
            </section>
          </div>
        </div>
        )
      }

    </ComplexLayout>
  );
}

export default ViewTopicPost;
