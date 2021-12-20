import React from "react";
import Intro from "../components/home/Intro";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="hidden">
        <Navbar />
      </div>
      <main>
        <Intro />
      </main>
    </>
  );
};

export default HomePage;
