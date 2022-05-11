import React from 'react';

function EmptyRating() {
  return <i className="fa-regular fa-star text-green-500" />;
}

function FillesRating() {
  return <i className="fa-solid fa-star text-green-500" />;
}

function Rating({ ratingScore }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((element) => {
        if (Number.isNaN(ratingScore)) {
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
}

Rating.defaultProps = {
  ratingScore: null,
  onRate: () => undefined,
};

export default Rating;
