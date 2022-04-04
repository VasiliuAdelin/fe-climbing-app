import React from "react";
import { Alert } from "gpl-tailwind-theme";
import { selectUIState, setFieldUI } from "../../features/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const NotificationContainer = () => {
  const { error, success, notification } = useSelector(selectUIState);
  const dispatch = useDispatch();

  const setField = (name, value) => {
    dispatch(setFieldUI({ name, value }));
  };

  return (
    <>
      {error.isError && (
        <Alert
          color="red"
          icon="error"
          iconSize="xl"
          iconPosition="center"
          closeIcon="close"
          closeIconPosition="center"
          hideAfter={10000}
          className="fixed bottom-2 right-2 inline-block"
          handleClose={() => setField("error", { isError: false, message: "" })}
        >
          {error.message}
        </Alert>
      )}
      {success.isSuccess && (
        <Alert
          color="green"
          icon="check"
          iconSize="xl"
          iconPosition="center"
          closeIcon="close"
          closeIconPosition="center"
          hideAfter={5000}
          className="fixed bottom-2 right-2 inline-block"
          handleClose={() =>
            setField("success", { isSuccess: false, message: "" })
          }
        >
          {success.message}
        </Alert>
      )}
      {notification.isNotification && (
        <Alert
          color="purple"
          icon="notifications_active"
          iconSize="xl"
          iconPosition="center"
          closeIcon="close"
          closeIconPosition="center"
          hideAfter={6000}
          className="fixed bottom-2 right-2 inline-block"
          handleClose={() =>
            setField("notification", { isNotification: false, message: "" })
          }
        >
          {notification.message}
        </Alert>
      )}
    </>
  );
};

export default NotificationContainer;
