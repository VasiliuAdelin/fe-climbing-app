import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldUI } from '../../features/ui/uiSlice';
import useRouter from '../../hooks/useRouter';

function SecureRoute({ routeName = '', privateRoute = false, children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    const payload = {
      name: 'error',
      value: {
        isError: true,
        message: `Access Denied. Please login to access ${routeName} page.`,
      },
    };
    if (!isLoggedIn && privateRoute) {
      dispatch(setFieldUI(payload));
      push('/login');
    }
  }, []);

  return <div>{children}</div>;
}

export default SecureRoute;
