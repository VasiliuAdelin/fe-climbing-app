import React from "react";

const EmptyRating = () => (
  <i className="fa-regular fa-star text-green-500"></i>
);

const FillesRating = () => (
  <i className="fa-solid fa-star text-green-500"></i>
);

const Rating = ({ ratingScore }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((element) => {
        if (isNaN(ratingScore)) {
          return <EmptyRating />;
        }
        return Number(element) <= Number(ratingScore) ? (
          <FillesRating />
        ) : (
          <EmptyRating />
        );
      })}
    </div>
  );
};

Rating.defaultProps = {
  ratingScore: null,
  onRate: () => undefined,
};

export default Rating;
