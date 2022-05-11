import React from 'react';
import CommentSection from '../components/feed/CommentSection';
import ComplexLayout from '../components/layouts/ComplexLayout';
import AddComment from '../components/Comment/AddComment';

const mockSkill = {
  id: 12345,
  title: 'How to get to climbing?',
  description: 'Lorem imspun lorem impasjd k asdk sakdn kasd sakdn askd',
  mainImage:
    'https://explore-share.imgix.net/wp-content/uploads/2017/11/Arrampicata-trad-avanzato-2.jpg',
};

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
                2 min read
              </span>
              <span className="w-2 h-2 rounded bg-gray-500 mx-2" />
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                BELAYING
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
function ViewSkill() {
  const { title, description, mainImage } = mockSkill;
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={title}
      subtitle={description}
      customBackground={mainImage}
    >
      <div className="w-3/5 m-auto">
        <AboutPost />
        <div className="font-bold text-xl my-2">{title}</div>
        <div>{description}</div>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          Now to take a step back; since the role of the component is to
          translate raw data into HTML, we can consider that this raw data is
          made out of props and state objects. We could even say that props and
          state are the input data for the render() function. So the State
          represents some property (or properties) that controls the behavior of
          the component.
        </p>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          As a rule of thumb, If the Component needs to act it’s own attribute
          changes, then those attributes should be part of its state. Local
          state is a feature only available to classes. What this Means for
          functional Components is to be discussed later.
        </p>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          It’s not mandatory to use States and since it increases complexity, a
          stateless component is always preferable. This however is inevitable
          in an interactive app.
        </p>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          Following is an example of a state object declaration. The code below
          might be a bit outdated due to the use of class components, but it
          makes sense to go back a little bit to understand the tenants of this
          core React Feature :
        </p>
        <div className="flex justify-around items-center">
          <img
            src="https://miro.medium.com/max/624/1*gcr5AtZ2nbgTPAlhAVlBmQ.png"
            alt="img-1"
          />
        </div>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          Following is an example of a state object declaration. The code below
          might be a bit outdated due to the use of class components, but it
          makes sense to go back a little bit to understand the tenants of this
          core React Feature :
        </p>
        <div className="flex justify-around items-center">
          <img
            src="https://miro.medium.com/max/624/1*gcr5AtZ2nbgTPAlhAVlBmQ.png"
            alt="img-1"
          />
          <img
            src="https://miro.medium.com/max/624/1*gcr5AtZ2nbgTPAlhAVlBmQ.png"
            alt="img-1"
          />
        </div>
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          Following is an example of a state object declaration. The code below
          might be a bit outdated due to the use of class components, but it
          makes sense to go back a little bit to understand the tenants of this
          core React Feature :
        </p>

        <hr />
        <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
          Comments:
        </p>
        <AddComment />
        <div className="h-500">
          <div className="lg:overflow-y-auto h-full border border-gray-100 h-500">
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
          </div>
        </div>
      </div>
    </ComplexLayout>
  );
}

export default ViewSkill;
