import React from "react";
import FeedPostCard from "./FeedPostCard";
import img from "../../assets/img/background-1920x1280.jpg";

function NewsFeedPostsSection() {
  const profile =
    "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif";
  const description =
    "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration. fdsajhfkjdsafhsdajkfalh fdsafas fdsaf fdsafsad fasdfsaf";
  const name = "Andres Berlin";
  const postedTime = "About two minutes ago.";
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
                <FeedPostCard
                  profile={profile}
                  image={img}
                  description={description}
                  name={name}
                  postedTime={postedTime}
                />
                <FeedPostCard
                  profile={profile}
                  image={img}
                  description={description}
                  name={name}
                  postedTime={postedTime}
                />
                <FeedPostCard
                  profile={profile}
                  image={img}
                  description={description}
                  name={name}
                  postedTime={postedTime}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsFeedPostsSection;
