import { useState } from 'react';
import { Button } from 'gpl-tailwind-theme';
import { Icon } from '@material-tailwind/react';
import ComplexLayout from '../components/layouts/ComplexLayout';
import SkillsView from '../components/skills/SkillsView';
import SkillsCategories from '../components/skills/SkillsCategories';

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

const MOCK_CATEGORIES_TITLE = {
  tradClimbing: 'Lets trad climbing togheter',
  sportClimbing: 'How about sport climbig',
  technique: 'The art of techniques',
  rappelling: 'The need to secure you',
  belaying: 'How about belaying',
};

// Belaying, Rappelling, Technique, Sport Climbing, Trad Climbing
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

const mockSkilss = () => {
  const results = [];
  [1, 2, 3].forEach((element) => {
    mockCategories.forEach(({ name, label }) => {
      name !== 'all'
        && results.push({
          id: `${element}-${name}`,
          title: MOCK_CATEGORIES_TITLE[name],
          description:
            'Lorem ipsum loremipsun Lorem ipsum loremipsun Lorem ipsum loremipsun ',
          category: name,
          mainImage: MOCK_CATEGORIES_IMAGES[name],
        });
    });
  });
  return results;
};

export default function Skills() {
  const allSkills = mockSkilss();
  const [categories] = useState(mockCategories);
  const [skillsItems, setSkillsItems] = useState(allSkills);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const onSelect = (label) => {
    setSelectedCategory(label);
    setSkillsItems(
      label === 'all'
        ? allSkills
        : allSkills.filter((skill) => skill.category === label),
    );
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Skills"
      subtitle="Helpers here"
    >
      {/* TODO: to change the background image */}
      <SkillsCategories
        categories={categories}
        selected={selectedCategory}
        onSelect={onSelect}
      />
      <div className="w-3/4 m-auto">
        <Button
          color="green"
          buttonType="link"
          ripple="dark"
          rounded
          className="my-4"
        >
          <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
          CREATE
        </Button>
        <SkillsView skills={skillsItems} />
      </div>
    </ComplexLayout>
  );
}
