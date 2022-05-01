import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import { Button } from "gpl-tailwind-theme";
import DefaultNavbar from "../components/DefaultNavbar";
import Container from "../components/login/Container";
import Paragraph from "@material-tailwind/react/Paragraph";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectState } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import Card from "../components/shared/Card/Card";
import CardHeader from "../components/shared/Card/CardHeader";
import CardBody from "../components/shared/Card/CardBody";
import CardFooter from "../components/shared/Card/CardFooter";
import { loginAsync } from "../features/auth/auth.actions";

export default function Login() {
  const [values, setValues] = useState({
    email: "adelinadelin@gmail.com",
    password: "asdf123asdf",
  });

  const { isLoggedIn } = useSelector(selectState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn === true) {
      history.push("/");
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
    dispatch(loginAsync(values));
  };
  
  return (
    <>
      <div className="bg-new-login-background bg-cover bg-center w-full h-screen md:h-screen relative lg:flex flex-col justify-between">
        <DefaultNavbar />
        <Container>
          <form onSubmit={handleSubmit}>
            <Card className="rounded-xl min-w-400">
              <CardHeader color="green" className="rounded-custom-shape">
                <H5 color="white" style={{ marginBottom: 0 }}>
                  Welcome back
                </H5>
              </CardHeader>
              <CardBody>
                <div className="mb-12 px-4 bg-bb">
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
                <div className="mb-2 px-4">
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
              </CardBody>
              <CardFooter>
                <div className="flex justify-center bg-bb">
                  <Button
                    color="green"
                    size="lg"
                    className="rounded-custom-shape w-full"
                  >
                    Login
                  </Button>
                </div>

                <div className="mt-4 pt-2 border-t-2">
                  <Paragraph color="blueGray">
                    Not having an account? Please{" "}
                    <Link
                      to="/register"
                      className="inline-block text-greenDark hover:text-green-900 p-2 pl-0"
                    >
                      register
                    </Link>
                  </Paragraph>
                </div>
                <div className="p-0 m-0">
                  <Paragraph color="blueGray">
                    <Link
                      to="/forgot-password"
                      className="inline-block text-greenDark hover:text-green-900 p-0"
                    >
                      Forgot Password?
                    </Link>
                  </Paragraph>
                </div>
              </CardFooter>
            </Card>
          </form>
        </Container>
      </div>
    </>
  );
}
