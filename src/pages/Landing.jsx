import Header from "../components/landing/Header";
import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import DefaultFooter from "../components/DefaultFooter";
import ClimbingLocationsSection from "../components/landing/ClimbingLocationsSection";
import NewsFeedPostsSection from "../components/landing/NewsFeedPostsSection";

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
        {/* <WorkingSection />
        <TeamSection />
        <ContactSection /> */}
      </main>
      <DefaultFooter />
    </>
  );
};

export default Landing;
