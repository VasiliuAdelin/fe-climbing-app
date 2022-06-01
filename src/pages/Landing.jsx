import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/landing/Header';
import DefaultNavbar from '../components/DefaultNavbar';
import ClimbingLocationsSection from '../components/landing/ClimbingLocationsSection';
import NewsFeedPostsSection from '../components/NewsFeed/NewsFeedPostsSection';
import { getCrags } from '../features/crags/crags.actions';

function Landing() {
  const [crags, setCrags] = useState([]);
  const dispatch = useDispatch();
  const { crags: reduxCrags } = useSelector((state) => state.crags);

  useEffect(() => {
    dispatch(getCrags('/?limit=10'));
  }, []);

  useEffect(() => {
    setCrags(reduxCrags);
  }, [reduxCrags]);

  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <ClimbingLocationsSection routes={crags} />
        <NewsFeedPostsSection />
      </main>
    </>
  );
}

export default Landing;
