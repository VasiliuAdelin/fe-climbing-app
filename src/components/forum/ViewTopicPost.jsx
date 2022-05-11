import React from 'react';
import { Icon } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import CommentSection from '../feed/CommentSection';
import ComplexLayout from '../layouts/ComplexLayout';
import AddComment from '../Comment/AddComment';
import Breadcrumb from '../shared/Breadcrumb';

const MOCK_COMMENTS = [
  {
    user: {
      profile:
        'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-14.png?resize=255%2C255&ssl=1',
      name: 'Darwin Watterson',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-18.png?resize=250%2C250&ssl=1',
      name: 'Doggo Guda',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1',
      name: 'Winnie The Pooh',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1',
      name: 'Winnie The Pooh',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1',
      name: 'Winnie The Pooh',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedAt: new Date().toDateString(),
  },
];

function AboutPost() {
  return (
    <div>
      <div className="flex m-4 items-center justify-between">
        <div className="flex">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.natgeofe.com/n/7dbdf95f-fffa-42de-b935-9cbb11aeed16/adam-ondra-day-5-pitch_square.jpg"
            alt="as"
          />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              Admin Admin
            </span>
            <div className="flex mt-2 items-center">
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                Jun 4, 2021
              </span>
              <span className="w-2 h-2 rounded bg-gray-500 mx-2" />
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                Welcome to the app
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
            <i className="fa-solid fa-link" />
            {' '}
            Copy link
          </span>
        </div>
      </div>
    </div>
  );
}

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
    name: 'Welcome to the app',
    icon: 'feed',
    urlTo: '/forum/1',
  },
  {
    name: 'Authentication',
    icon: 'description',
    urlTo: '/forum/1/1',
  },
];
function ViewTopicPost() {
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Authentication"
      subtitle="Let's talk JWT"
      customBackground="https://wallup.net/wp-content/uploads/2015/12/113425-sports-climbing-landscape.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <div className="w-4/5 m-auto flex flex-wrap">
        <div className="w-4/5">
          <AboutPost />
          <div className="font-bold text-xl my-2">Welcome to the app!</div>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            Now to take a step back; since the role of the component is to
            translate raw data into HTML, we can consider that this raw data is
            made out of props and state objects. We could even say that props
            and state are the input data for the render() function. So the State
            represents some property (or properties) that controls the behavior
            of the component.
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            As a rule of thumb, If the Component needs to act it’s own attribute
            changes, then those attributes should be part of its state. Local
            state is a feature only available to classes. What this Means for
            functional Components is to be discussed later.
          </p>
          <hr />
          <div className="lg:overflow-y-auto h-full">
            {MOCK_COMMENTS.map((comm, index) => {
              const { user, comment, postedAt } = comm;
              return (
                <CommentSection
                  key={index}
                  profile={user.profile}
                  name={user.name}
                  comment={comment}
                  postedAt={postedAt}
                />
              );
            })}
            <AddComment />
          </div>
        </div>
        <div className="w-1/5 py-20 px-2 bg-gray-100 h-screen">
          <div className="border border-gray-500 p-2 mb-4">
            <p>Stats</p>
            <div className="flex items-center">
              <Icon name="menu" size="base" color="dark" />
              <span className="inline-block m-2 text-xs"> 12 Views</span>
            </div>
            <div className="flex items-center">
              <Icon name="article" size="base" color="dark" />
              <span className="inline-block m-2 text-xs"> 9 comments</span>
            </div>
          </div>
          <div className="border border-gray-500 p-2">
            <p>Similar Posts</p>
            {['Find a trip', 'FAQ List'].map((item, index) => (
              <Link key={index} to="/">
                <span className="block text-xs m-2 hover:text-greenNormal">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ComplexLayout>
  );
}

export default ViewTopicPost;
