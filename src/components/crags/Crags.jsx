import { useEffect, useState } from 'react';
import { Button } from 'gpl-tailwind-theme';
import { Icon } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep, forEach, isEmpty } from 'lodash';
import RouteListView from './RouteListView';
import CreateCrag from './CreateCrag';
import Modal from '../shared/Modals/Modal';
import { createCragAsync, getCrags } from '../../features/crags/crags.actions';
import FilterSection from './FilterSection';

export default function Crags({ country = '', city = '' }) {
  const [crags, setCrags] = useState([]);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { crags: reduxCrags } = useSelector((state) => state.crags);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getCrags(`/?country=${country}&city=${city}`));
  }, []);

  useEffect(() => {
    setCrags(reduxCrags);
  }, [reduxCrags]);

  const handleOnAdd = (payload) => {
    setOpenModal(false);
    dispatch(createCragAsync({
      ...payload, city, country, author: user.id,
    }));
    setTimeout(() => {
      dispatch(getCrags(`/?country=${country}&city=${city}`));
    }, 2000);
  };

  const handleFilter = (filters) => {
    let cragsClone = cloneDeep(reduxCrags);
    const {
      type: typeFilters,
      grade: gradeFilters,
      features: featuresFilters,
    } = filters;

    cragsClone = cragsClone.filter((crag) => {
      const { type, grade, features } = crag;
      let isValid = true;

      if (!isEmpty(typeFilters) && !typeFilters.includes(type)) {
        return false;
      }

      if (!isEmpty(gradeFilters) && !gradeFilters.includes(grade)) {
        return false;
      }

      if (!isEmpty(featuresFilters)) {
        if (featuresFilters.length > features.length) {
          return false;
        }
        featuresFilters.forEach((ftFilter) => {
          if (!features.includes(ftFilter)) {
            isValid = false;
          }
        });
      }

      return isValid;
    });

    setCrags(cragsClone);
  };

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateCrag onSubmit={handleOnAdd} />
      </Modal>
      {isLoggedIn && (
        <Button
          color="green"
          buttonType="link"
          ripple="dark"
          className="mx-4 py-2 px-4"
          onClick={() => setOpenModal(true)}
        >
          <Icon family="font-awesome" name="fa-solid fa-plus" size="base" />
          Add new route
        </Button>
      )}
      <div className="w-full h-auto p-4">
        <FilterSection onChange={handleFilter} />
      </div>
      <div className="w-full border-gray-100  p-4">
        <RouteListView data={crags} />
      </div>
    </>
  );
}
