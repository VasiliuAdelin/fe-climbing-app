import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import SettingsForm from '../components/SettingsForm';
import ProfileCard from '../components/ProfileCard';
import { selectState } from '../features/auth/authSlice';
import { updateUserDataAsync } from '../features/auth/auth.actions';

export default function Settings() {
  const { user } = useSelector(selectState);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    imageLink: '',
    username: 'Adelin',
    email: 'adelin@gmail.com',
    name: 'Adelin Vasiliu',
    address: 'Iasi',
    city: 'Iasi',
    country: 'Romania',
    postalCode: '',
    description: '',
    position: '',
    phone: '',
  });

  useEffect(() => {
    setValues({
      ...values,
      ...user,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      imageLink, name, address, city, country, postalCode, description, position, phone,
    } = values;
    const { id } = user;
    const payload = {
      imageLink,
      name,
      address,
      city,
      country,
      postalCode,
      description,
      position,
      phone,
    };
    dispatch(updateUserDataAsync({ id, payload }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-3 md:px-8 h-auto pt-10">
        <div className="container mx-auto max-w-full mt-20">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div className="xl:col-start-1 xl:col-end-3 px-4 mb-16 mt-24 md:mt-0">
              <ProfileCard {...values} />
            </div>
            <div className="xl:col-start-3 xl:col-end-7 px-4 mb-16">
              <SettingsForm
                values={values}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
