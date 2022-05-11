import React, { useEffect, useState } from 'react';
import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getCragById } from '../../../features/crags/crags.actions';
import AddComment from '../../Comment/AddComment';
import TYPES from '../../../types';
import Rating from '../../shared/Rating/Rating';
import { calculatedRating } from '../crags.utils';
import { RenderFeatures } from '../RouteListView';
import CommentSection from '../../Comment/CommentSection';

const mockSkill = {
  id: 12345,
  title: 'How to get to climbing?',
  description: 'Lorem imspun lorem impasjd k asdk sakdn kasd sakdn askd',
  mainImage:
    'https://explore-share.imgix.net/wp-content/uploads/2017/11/Arrampicata-trad-avanzato-2.jpg',
};

const { CRAGS } = TYPES;
const {
  GENRE_TYPE, STEEPNESS_TYPES, STYLE_TYPES, HOLD_TYPES, GRADES_TYPES,
} = CRAGS;

function RenderUserInfo({
  name, imageLink, id, createdAt,
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to={`/profile/${id}`}>
          <div className="flex hover:cursor-pointer">
            <img
              className="w-12 h-12 rounded-full"
              src={imageLink}
              alt={name}
            />
            <div className="ml-2 mt-0.5">
              <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {name}
              </span>
              <div className="flex mt-2 items-center">
                <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                  Added by user on
                  {' '}
                  {moment(createdAt).format('ll')}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function CragItem({
  crag = {}, handleOnSubmitComment = () => undefined, onAscending = () => undefined, onInterested = () => undefined,
}) {
  const { mainImage } = mockSkill;

  const {
    author = {},
    createdAt,
    name = 'Crag Name',
    description = 'Crag Description',
    grade,
    type,
    rating,
    country,
    address,
    geoLocation,
    features,
    ascents,
    interested,
    comments,
  } = crag;

  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const totalAscents = ascents.length;
  const totalInterested = interested.length;

  const gradeFormated = GRADES_TYPES[grade];
  const genreTypeFormated = GENRE_TYPE[type];

  const userIsAscending = isLoggedIn && ascents.length > 0 && ascents.includes(user.id);
  const userIsInterested = isLoggedIn && interested.length > 0 && interested.includes(user.id);

  return (
    <>
      <section className="flex pb-4">
        {isLoggedIn && (
          <>
            <Button
              color={userIsAscending ? 'green' : 'gray'}
              ripple="dark"
              className="mr-2 py-2 px-4"
              onClick={onAscending}
            >
              <Icon name="hiking" />
              Marked as done (
              {totalAscents}
              )
            </Button>
            <Button
              color={userIsInterested ? 'blue' : 'gray'}
              ripple="dark"
              className="py-0 px-4"
              onClick={onInterested}
            >
              <Icon family="font-awesome" name="fa-solid fa-plus" />
              Added in ToDo List (
              {totalInterested}
              )
            </Button>
          </>
        )}
        {!isLoggedIn && (
          <div className="m-2">
            {' '}
            Please login to mark as done or to add to todo
            {' '}
          </div>
        )}
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="w-full">
          <section className="p-4 bg-white rounded shadow-md hover:shadow-lg">
            <RenderUserInfo createdAt={createdAt} {...author} />
            <div className="font-bold text-xl my-2">{name}</div>
            <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
              {genreTypeFormated}
              ,
              {gradeFormated}
            </p>
            <RenderFeatures features={features} />
          </section>
          <section className="mt-4 p-4 bg-white rounded shadow-md hover:shadow-lg">
            <Rating ratingScore={calculatedRating(rating)} />
          </section>
          <section className="mt-4 p-4 bg-white rounded shadow-md hover:shadow-lg">
            <span>
              <i className="text-green-500 fa-solid fa-location-crosshairs inline-block mr-2" />
            </span>
            <span className="text-gray-700 text-sm">{geoLocation}</span>
            <div>
              <span>
                <i className="text-green-500 fa-solid fa-location-dot inline-block mr-2" />
              </span>
              <span className="text-gray-700 text-sm">{address}</span>
            </div>
          </section>
        </div>

        <div className="w-full col-span-3">
          <section className="p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
            <div>{description}</div>
          </section>

          <section className="p-4 bg-white rounded shadow-md hover:shadow-lg mb-6">
            <div className="font-bold text-xl my-2">Comments</div>
            <CommentSection
              comments={comments}
              onSubmit={handleOnSubmitComment}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default CragItem;
