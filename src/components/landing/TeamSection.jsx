import Title from './Title';
import TeamCard from './TeamCard';

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Lorem Ipsum is simply">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Title>
        <div className="flex flex-wrap justify-center">
          <TeamCard
            img="https://via.placeholder.com/400"
            name="Lorem Ipsum"
            position="Lorem Ipsum"
          />
          <TeamCard
            img="https://via.placeholder.com/400"
            name="Lorem Ipsum"
            position="Lorem Ipsum"
          />
          <TeamCard img="https://via.placeholder.com/400" name="Lorem Ipsum" position="Lorem Ipsum" />
        </div>
      </div>
    </section>
  );
}
