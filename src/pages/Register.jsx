import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import { Button } from 'gpl-tailwind-theme';
import Paragraph from '@material-tailwind/react/Paragraph';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { selectState } from '../features/auth/authSlice';
import Container from '../components/login/Container';
import DefaultNavbar from '../components/DefaultNavbar';
import CardFooter from '../components/shared/Card/CardFooter';
import CardBody from '../components/shared/Card/CardBody';
import CardHeader from '../components/shared/Card/CardHeader';
import Card from '../components/shared/Card/Card';
import { registerAsync } from '../features/auth/auth.actions';

export default function Register() {
  const [values, setValues] = useState({
    name: 'admin',
    email: 'vasiliuadelin98@gmail.com',
    password: 'parola111',
    confirmPassword: 'parola111',
  });
  // successRegister
  const {
    status, isLoggedIn,
  } = useSelector(selectState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn === true) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    dispatch(registerAsync({ name, email, password }));
  };

  return (
    <div className="bg-new-login-background bg-cover bg-center w-full h-screen md:h-screen relative lg:flex flex-col justify-between">
      <DefaultNavbar />
      <Container>
        <form onSubmit={handleSubmit}>
          <Card className="rounded-xl min-w-400">
            <CardHeader color="green" className="rounded-custom-shape">
              <H5 color="white" style={{ marginBottom: 0 }}>
                Create an account
              </H5>
            </CardHeader>

            <CardBody>
              <div className="mb-10 px-4">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Full Name"
                  iconName="account_circle"
                  value={values.name}
                  name="name"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-10 px-4">
                <InputIcon
                  type="email"
                  color="green"
                  placeholder="Email Address"
                  iconName="email"
                  value={values.email}
                  name="email"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-10 px-4">
                <InputIcon
                  type="password"
                  color="green"
                  placeholder="Password"
                  iconName="lock"
                  value={values.password}
                  name="password"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-4 px-4">
                <InputIcon
                  type="password"
                  color="green"
                  placeholder="Confirm Password"
                  iconName="lock"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center">
                <Button
                  color="green"
                  size="lg"
                  ripple="dark"
                  type="submit"
                  className="w-full rounded-custom-shape"
                >
                  {status === 'loading' ? 'Loading' : 'Register'}
                </Button>
              </div>
              <div className="mt-4 pt-2 border-t-2">
                <Paragraph color="blueGray">
                  Already an account? Please
                  {' '}
                  <Link
                    to="/login"
                    className="inline-block text-greenDark hover:text-green-900 p-2 pl-0"
                  >
                    login
                  </Link>
                </Paragraph>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Container>
    </div>
  );
}
