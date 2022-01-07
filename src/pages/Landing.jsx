import Header from "../components/landing/Header";
import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import WorkingSection from "../components/landing/WorkingSection";
import TeamSection from "../components/landing/TeamSection";
import ContactSection from "../components/landing/ContactSection";
import DefaultFooter from "../components/DefaultFooter";

const Landing = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <WorkingSection />
        <TeamSection />
        <ContactSection />
      </main>
      <DefaultFooter/>
    </>
  );
};

export default Landing;
