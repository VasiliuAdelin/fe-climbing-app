import Carousel from 'react-multi-carousel';
import Title from './Title';
import PictureCard from './PictureCard';
import 'react-multi-carousel/lib/styles.css';
import useRouter from '../../hooks/useRouter';

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

function ClimbingLocationsSection({ deviceType, routes = [] }) {
  const { push } = useRouter();
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 ">
        <div className="pt-6">
          <Title heading="Top Climbing Locations!" />
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
          {routes.map(({
            assets = [], description, name, country, city, id,
          }, index) => (
            <PictureCard
              key={index}
              name={name}
              image={assets[0] || ''}
              description={description}
              onClick={() => push(`/areas/${country}/${city}/routelist/${id}`)}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ClimbingLocationsSection;
