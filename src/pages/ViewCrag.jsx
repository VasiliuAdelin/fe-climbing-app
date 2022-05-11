import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep, isEmpty } from 'lodash';
import ComplexLayout from '../components/layouts/ComplexLayout';
import { useRouter } from '../hooks/useRouter';
import Breadcrumb from '../components/shared/Breadcrumb';
import TYPES from '../types';
import CragItem from '../components/crags/CragItem';
import { getCragById, updateCrag } from '../features/crags/crags.actions';
import { setFieldCrags } from '../features/crags/cragsSlice';
import { createCommentAsync } from '../features/ui/ui.actions';

const { COUNTRIES } = TYPES;

export default function RouteList() {
  const { query, push } = useRouter();
  const [currentCrag, setCurrentCrag] = useState({});
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { currentCrag: reduxCurrentCrag } = useSelector((state) => state.crags);

  const { country, city, id } = query;

  const selectedCountry = COUNTRIES[country] || null;
  const selectedCity = selectedCountry ? selectedCountry.cities[city] : null;

  useEffect(() => {
    dispatch(getCragById(id));
  }, []);

  useEffect(() => {
    setCurrentCrag(reduxCurrentCrag);
  }, [reduxCurrentCrag]);

  useLayoutEffect(() => {
    if (!selectedCountry || !selectedCity || !id) {
      push('/');
    }
  }, [selectedCountry, selectedCity, id]);

  const handleOnSubmitComment = (message) => {
    const payloadComment = {
      description: message,
      entityId: id,
      author: user.id,
    };

    const newComment = {
      description: message,
      author: {
        name: user.name,
        imageLink: user.imageLink,
        id: user.id,
      },
      createdAt: new Date(),
      entityId: id,
    };

    dispatch(createCommentAsync(payloadComment));
    let cragCopy = cloneDeep(currentCrag);
    let selectedPostCommentsCopy = cloneDeep(cragCopy.comments || []);
    selectedPostCommentsCopy = [...selectedPostCommentsCopy, newComment];

    cragCopy = {
      ...cragCopy,
      comments: selectedPostCommentsCopy,
    };

    dispatch(
      setFieldCrags({
        name: 'currentCrag',
        value: cragCopy,
      }),
    );
  };

  const handleOnParticipate = () => {
    const selectedCrag = cloneDeep(currentCrag);
    let selectedCragParticipants = cloneDeep(selectedCrag.ascents || []);
    let selectedCragInterested = cloneDeep(selectedCrag.interested || []);

    if (selectedCragParticipants.includes(user.id)) {
      selectedCragParticipants = selectedCragParticipants.filter(
        (item) => item !== user.id,
      );
    } else {
      selectedCragParticipants.push(user.id);
    }

    if (selectedCragInterested.includes(user.id)) {
      selectedCragInterested = selectedCragInterested.filter(
        (item) => item !== user.id,
      );
    }

    dispatch(
      updateCrag({
        id,
        payload: {
          ascents: selectedCragParticipants,
          interested: selectedCragInterested,
        },
      }),
    );

    setCurrentCrag({
      ...currentCrag,
      ascents: selectedCragParticipants,
      interested: selectedCragInterested,
    });
  };

  const handleOnInterested = () => {
    const selectedCrag = cloneDeep(currentCrag);
    let selectedCragParticipants = cloneDeep(selectedCrag.ascents || []);
    let selectedCragInterested = cloneDeep(selectedCrag.interested || []);

    if (selectedCragInterested.includes(user.id)) {
      selectedCragInterested = selectedCragInterested.filter(
        (item) => item !== user.id,
      );
    } else {
      selectedCragInterested.push(user.id);
    }

    if (selectedCragParticipants.includes(user.id)) {
      selectedCragParticipants = selectedCragParticipants.filter(
        (item) => item !== user.id,
      );
    }

    dispatch(
      updateCrag({
        id,
        payload: {
          ascents: selectedCragParticipants,
          interested: selectedCragInterested,
        },
      }),
    );

    setCurrentCrag({
      ...currentCrag,
      ascents: selectedCragParticipants,
      interested: selectedCragInterested,
    });
  };

  const routesBreadcrumb = [
    {
      name: 'ClimbAround',
      icon: 'home',
      urlTo: '/',
    },
    {
      name: selectedCountry.name,
      icon: 'people',
      urlTo: `/areas/${country}/${city}`,
    },
    {
      name: `All the routes from ${selectedCity}`,
      icon: 'map',
      urlTo: `/areas/${country}/${city}/routelist`,
    },
    {
      name: currentCrag?.name,
      icon: 'hiking',
      urlTo: `/areas/${country}/${city}/${id}`,
    },
  ];

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={currentCrag?.name}
      subtitle={`${selectedCountry.name}, ${selectedCity}`}
    >
      <Breadcrumb routes={routesBreadcrumb} />
      {!isEmpty(currentCrag) && (
        <CragItem
          onAscending={handleOnParticipate}
          onInterested={handleOnInterested}
          handleOnSubmitComment={handleOnSubmitComment}
          crag={currentCrag}
        />
      )}
    </ComplexLayout>
  );
}
