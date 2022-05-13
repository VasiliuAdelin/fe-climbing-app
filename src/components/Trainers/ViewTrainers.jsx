import { useEffect, useState } from 'react';
import { Button } from 'gpl-tailwind-theme';
import { Icon } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import SkillsCategories from '../skills/SkillsCategories';
// import TrainerCard from './TrainerCard';
import { getTrainers } from '../../features/trainers/trainers.actions';
import TYPES from '../../types';
import { formatTrainers } from './trainers.utils';
import Modal from '../shared/Modals/Modal';
import BecomeTrainer from './BecomeTrainer';

const { CATEGORIES } = TYPES;

export default function ViewTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const { trainers: reduxTrainers } = useSelector((state) => state.trainers);
  const dispatch = useDispatch();

  const formatCategories = formatTrainers({
    ALL: 'All',
    ...CATEGORIES,
  });

  const onSelect = (label) => {
    setSelectedCategory(label);
    setTrainers(
      label === 'all'
        ? reduxTrainers
        : reduxTrainers.filter((trainer) => trainer.categories.includes(label)),
    );
  };

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  useEffect(() => {
    setTrainers(reduxTrainers);
  }, [reduxTrainers]);

  const handleOnBecameTrainer = () => {};
  // AIzaSyDOLqlshJjIXJimeALA_GLRUyQ4_to5wVs
  return (
    <>
      <SkillsCategories
        categories={formatCategories}
        selected={selectedCategory}
        onSelect={onSelect}
      />
      <Button
        color="green"
        buttonType="link"
        ripple="dark"
        rounded
        className="m-4"
        onClick={() => setOpenModal(true)}
      >
        <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
        BECOME A TRAINER
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <BecomeTrainer onSubmit={handleOnBecameTrainer} />
      </Modal>
      <div className="flex flex-wrap">{JSON.stringify(trainers)}</div>
    </>
  );
}
