import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import { Link } from "react-router-dom";
import SearchRoutes from "./SearchRoutes";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-login-background2 bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">Welcome to Climb Around!</H2>
            <div className="text-gray-200">
              <LeadText color="gray-200">
                New here?{" "}
                <Link to="/register">
                  <span className=" inline-block text-sky-400">
                    Create an account!
                  </span>
                </Link>{" "}
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
