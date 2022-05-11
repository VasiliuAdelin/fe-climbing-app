import LeadText from '@material-tailwind/react/LeadText';
import { Link } from 'react-router-dom';
import SearchRoutes from './SearchRoutes';

function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-login-background2 bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="mt-32 lg:mt-0 container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h2 className="text-2xl md:text-3xl text-white lg:text-5xl font-serif font-bold leading-normal m-0">
              Welcome to Climb Around!
            </h2>
            <div className="text-gray-200">
              <LeadText color="gray-200">
                New here?
                {' '}
                <Link to="/register">
                  <span className=" inline-block text-sky-400">
                    Create an account!
                  </span>
                </Link>
              </LeadText>
            </div>
            <div className="text-white text-lg">OR</div>
            <SearchRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
