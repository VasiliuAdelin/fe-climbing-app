import React from "react";
import FeedPostCard from "./FeedPostCard";

function NewsFeedPostsSection() {
  return (
    <>
      <section className="pb-20 relative block bg-gray-100">
        <div className="mb-16">
          <div className="max-w-7xl bg-gray-100 px-10 pt-10 mx-auto">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <FeedPostCard />
                <FeedPostCard />
                <FeedPostCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsFeedPostsSection;
