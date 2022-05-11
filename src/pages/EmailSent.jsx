/* eslint-disable react/no-unescaped-entities */
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import Paragraph from '@material-tailwind/react/Paragraph';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory } from 'react-router';
import DefaultNavbar from '../components/DefaultNavbar';
import Page from '../components/login/Page';
import Container from '../components/login/Container';

export default function EmailSent() {
  const history = useHistory();
  const query = new URLSearchParams(history.location.search);
  const email = query.get('email');

  return (
    <Page className="static">
      <DefaultNavbar />
      <Container>
        <Card>
          <CardHeader color="green">
            <H5 color="white" style={{ marginBottom: 0 }}>
              Email Sent
            </H5>
          </CardHeader>
          <CardBody>
            <Paragraph>
              We've sent you an email on
              {email}
            </Paragraph>
          </CardBody>
          <CardFooter>
            <div className="p-0 m-0">
              <Paragraph color="blueGray">
                <Link
                  to="/login"
                  className="inline-block text-gray-700 hover:text-blue-900 p-0"
                >
                  Login
                </Link>
              </Paragraph>
            </div>
          </CardFooter>
        </Card>
      </Container>
    </Page>
  );
}
