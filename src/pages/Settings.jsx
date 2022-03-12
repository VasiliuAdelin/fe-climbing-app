/* eslint-disable react-hooks/exhaustive-deps */
import SettingsForm from "../components/SettingsForm";
import ProfileCard from "../components/ProfileCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectState,
  updateUserDataAsync,
  setField,
} from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { Alert } from "gpl-tailwind-theme";
import CurrentUserDropdown from "../components/CurrentUserDropdown";

export default function Settings() {
  const { user, errors, message, success } = useSelector(selectState);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    imageLink: "",
    username: "Adelin",
    email: "adelin@gmail.com",
    name: "Adelin Vasiliu",
    address: "Iasi",
    city: "Iasi",
    country: "Romania",
    postalCode: "",
    description: "",
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
    const { imageLink, name, address, city, country, postalCode, description } =
      values;
    const { id } = user;
    const payload = {
      imageLink,
      name,
      address,
      city,
      country,
      postalCode,
      description,
    };
    dispatch(updateUserDataAsync({ id, payload }));
  };

  return (
    <>
      <div className=" bg-gray-100 lg:px-36 min-h-screen">
        <div className="flex justify-end px-8">
          <CurrentUserDropdown />
        </div>

        {errors && errors.length > 0 && (
          <Alert
            color="red"
            icon="error"
            iconSize="xl"
            iconPosition="center"
            closeIcon="close"
            closeIconPosition="center"
            hideAfter={5000}
            className="fixed bottom-2 right-2 inline-block"
            handleClose={() =>
              dispatch(setField({ name: "errors", value: [] }))
            }
          >
            {`${message} | ${errors[0]}`}
          </Alert>
        )}
        {success && (
          <Alert
            color="green"
            icon="check"
            iconSize="xl"
            iconPosition="center"
            closeIcon="close"
            className="fixed bottom-2 right-2 inline-block"
            closeIconPosition="center"
            hideAfter={2000}
            handleClose={() =>
              dispatch(setField({ name: "success", value: "" }))
            }
          >
            {`${success}`}
          </Alert>
        )}
        <div className="px-3 md:px-8 h-auto mt-10">
          <div className="container mx-auto max-w-full">
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
    </>
  );
}
