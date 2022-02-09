import Title from "./Title";
import PictureCard from "./PictureCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MOCK_CARDS = [
  {
    name: "Robitza rope",
    image:
      "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Ler fafasd",
    image:
      "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Robitza rope",
    image:
      "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Ler fafasd",
    image:
      "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Robitza rope",
    image:
      "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const ClimbingLocationsSection = (props) => {
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 ">
        <Title heading="Climbing locations around you!"></Title>

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container z-10 items-center"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {MOCK_CARDS.map((card, index) => {
            const { image, description, name } = card;
            return (
              <PictureCard
                key={index}
                name={name}
                image={image}
                description={description}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ClimbingLocationsSection;
