import LeadText from "@material-tailwind/react/LeadText";
import Icon from "@material-tailwind/react/Icon";

const USEFULL_LINKS = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Climbing routes map",
        path: "/",
      },
      {
        name: "Learn a new skill",
        path: "/",
      },
      {
        name: "Public Forum",
        path: "/",
      },
      {
        name: "To Be Deleted",
        path: "/",
      },
    ],
  },
  {
    title: "Other Resources",
    links: [
      {
        name: "27Crags",
        path: "https://27crags.com",
        isExternal: true,
      },
      {
        name: "Outside",
        path: "https://www.climbing.com",
        isExternal: true,
      },
      {
        name: "Contact Us",
        path: "/",
      },
    ],
  },
];
export default function DefaultFooter() {
  return (
    <>
      <footer className="relative bg-grayDark pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-between pt-8">
            <div className="w-full">
              <span className="block uppercase text-greenNormal text-sm font-serif font-medium mb-2">
                Find us on the other platforms:
              </span>
              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="/"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>
                <a
                  href="/"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
                <a
                  href="/"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-instagram" />
                </a>

                <a
                  href="/"
                  className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-around items-top">
                {USEFULL_LINKS.map(({ title = "", links = [] }, index) => (
                  <div className="w-full" key={index}>
                    <span className="block uppercase text-greenNormal text-sm font-serif font-medium mb-2">
                      {title}
                    </span>
                    <ul className="list-unstyled">
                      {links.map(({ name = "", path = "/" }, idx) => (
                        <li key={idx}>
                          <a
                            href={path}
                            target="_blank"
                            rel="noreferrer"
                            className="text-greenLight hover:text-greenNormal block pb-2 text-sm"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} ClimbAround
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
