import Title from "./Title";
import PictureCard from "./PictureCard";
import Form from "./Form";
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

export default function ClimbingLocationsSection(props) {
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
          containerClass="carousel-container z-10"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* <div className="flex flex-wrap -mt-12 justify-center"> */}
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </PictureCard>
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </PictureCard>
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </PictureCard>
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesettingg
            industry.
          </PictureCard>
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typafasesetting
            industry.
          </PictureCard>
          <PictureCard
            icon={
              "https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and
            typedasdsasetting industry.
          </PictureCard>
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}
