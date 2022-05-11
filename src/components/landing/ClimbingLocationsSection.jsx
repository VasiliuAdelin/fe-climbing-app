import Carousel from 'react-multi-carousel';
import Title from './Title';
import PictureCard from './PictureCard';
import 'react-multi-carousel/lib/styles.css';

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
    name: 'Robitza rope',
    image:
      'https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },
  {
    name: 'Ler fafasd',
    image:
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },
  {
    name: 'Robitza rope',
    image:
      'https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },
  {
    name: 'Ler fafasd',
    image:
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },
  {
    name: 'Robitza rope',
    image:
      'https://27crags.s3.amazonaws.com/photos/000/128/128736/large-a25926280eca.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },
];

function ClimbingLocationsSection({ deviceType }) {
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 ">
        <div className="pt-6">
          <Title heading="Climbing locations around you!" />
        </div>
        <Carousel
          swipeable
          draggable={false}
          showDots
          responsive={responsive}
          ssr
          infinite
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container z-10 items-center"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {MOCK_CARDS.map(({ image, description, name }, index) => (
            <PictureCard
              key={index}
              name={name}
              image={image}
              description={description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ClimbingLocationsSection;
