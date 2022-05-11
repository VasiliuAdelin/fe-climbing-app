import { useState } from 'react';
import { Button } from 'gpl-tailwind-theme';
import { Icon } from '@material-tailwind/react';
import ComplexLayout from '../components/layouts/ComplexLayout';
import SkillsCategories from '../components/skills/SkillsCategories';
import TrainerCard from '../components/Trainers/TrainerCard';

const MOCK_CATEGORIES_IMAGES = {
  tradClimbing:
    'https://explore-share.imgix.net/wp-content/uploads/2017/11/Arrampicata-trad-avanzato-2.jpg',
  sportClimbing:
    'https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=6609&index=0&w=605&h=434',
  technique:
    'https://supersherpas.com/wp-content/uploads/2022/01/Trad-vs.-Sport-Climbing-Nuts-Bolts-and-Quickdraws-.jpeg',
  rappelling:
    'https://images.thrillophilia.com/image/upload/s--YM-Jkszl--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/227/818/original/1586880045_rappelling__1.jpg.jpg?1586880045',
  belaying:
    'https://www.tripsavvy.com/thmb/X_oBbQGlp-UbgKm3CPFnBsPqtFQ=/2641x1981/smart/filters:no_upscale()/IceCreamParlor_Bill_Belaying_234_2-581dd76c5f9b581c0b77a8a3.jpg',
};

const mockCategories = [
  {
    name: 'all',
    label: 'All',
  },
  {
    name: 'belaying',
    label: 'Belaying',
  },
  {
    name: 'rappelling',
    label: 'Rappelling',
  },
  {
    name: 'technique',
    label: 'Technique',
  },
  {
    name: 'sportClimbing',
    label: 'Sport Climbing',
  },
  {
    name: 'tradClimbing',
    label: 'Trad Climbing',
  },
];

const mockTrainers = () => {
  const results = [];
  [1, 2, 3, 4, 5].forEach((element) => {
    mockCategories.forEach(({ name }) => {
      if (name !== 'all') {
        results.push({
          id: `${element}-${name}`,
          username: `@${name.toLocaleLowerCase()}`,
          position: 'Climbing Trainer',
          name: 'John Doe',
          totalLikes: 123,
          totalPosts: 74,
          totalFeedback: 23,
          description:
            'Lorem ipsum loremipsun Lorem ipsum loremipsun Lorem ipsum loremipsun ',
          mainImage: MOCK_CATEGORIES_IMAGES[name],
          categories: [name],
        });
      }
    });
  });
  return results;
};

export default function Trainers() {
  const allTrainers = mockTrainers();
  const [trainers, setTrainers] = useState(allTrainers);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const onSelect = (label) => {
    setSelectedCategory(label);
    setTrainers(
      label === 'all'
        ? allTrainers
        : allTrainers.filter((trainer) => trainer.categories.includes(label)),
    );
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Trainers"
      subtitle="Get Help From The Best"
    >
      {/* TODO: to change the background image */}
      <SkillsCategories
        categories={mockCategories}
        selected={selectedCategory}
        onSelect={onSelect}
      />
      <Button
        color="green"
        buttonType="link"
        ripple="dark"
        rounded
        className="m-4"
      >
        <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
        BECOME A TRAINER
      </Button>
      <div className="flex flex-wrap">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} {...trainer} />
        ))}
      </div>
    </ComplexLayout>
  );
}
