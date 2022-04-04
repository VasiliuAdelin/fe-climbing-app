import Header from "../components/landing/Header";
import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import ClimbingLocationsSection from "../components/landing/ClimbingLocationsSection";
import NewsFeedPostsSection from "../components/NewsFeed/NewsFeedPostsSection";

const Landing = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <ClimbingLocationsSection />
        <NewsFeedPostsSection />
      </main>
      
    </>
  );
};

export default Landing;
