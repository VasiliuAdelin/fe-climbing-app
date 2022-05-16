/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button } from 'gpl-tailwind-theme';
import { Icon } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import SkillsCategories from '../skills/SkillsCategories';
// import TrainerCard from './TrainerCard';
import { createTrainerAsync, getTrainers } from '../../features/trainers/trainers.actions';
import TYPES from '../../types';
import { formatTrainers } from './trainers.utils';
import Modal from '../shared/Modals/Modal';
import BecomeTrainer from './BecomeTrainer';
import TrainerCard from './TrainerCard';

const { CATEGORIES } = TYPES;

export default function ViewTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const { user } = useSelector((state) => state.auth);
  const { trainers: reduxTrainers } = useSelector((state) => state.trainers);
  const dispatch = useDispatch();

  const formatCategories = formatTrainers({
    ALL: 'All',
    ...CATEGORIES,
  });

  const onSelect = (category) => {
    setSelectedCategory(category);
    setTrainers(
      category.value === 'ALL'
        ? reduxTrainers
        : reduxTrainers.filter((trainer) => trainer.categories.includes(category.value)),
    );
  };

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  useEffect(() => {
    setTrainers(reduxTrainers);
  }, [reduxTrainers]);

  const handleOnBecameTrainer = (payload) => {
    setOpenModal(false);
    dispatch(createTrainerAsync({
      ...payload,
      author: user.id,
    }));

    setTimeout(() => dispatch(getTrainers()), 2000);
  };

  return (
    <>
      <SkillsCategories
        categories={formatCategories}
        selected={selectedCategory}
        onSelect={onSelect}
      />
      <Button
        color="green"
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
      {
        isEmpty(trainers) && (<span>No trainers</span>)
      }
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
        trainers.map((trainer) => (
          <TrainerCard
            key={trainer?.id}
            id={trainer?.author?.id}
            name={trainer?.author?.name}
            description={trainer?.description}
            mainImage={trainer?.author?.imageLink}
            position={trainer?.title}
          />
        ))
      }
      </div>

    </>
  );
}
