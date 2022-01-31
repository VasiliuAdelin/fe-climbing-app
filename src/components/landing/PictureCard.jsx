import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function PictureCard({ icon, title, children }) {
  return (
    <>
      <div className="w-full">
        <div className="max-w-sm text-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3 mb-3 md:mb-10 min-w-sm">
          <img className="rounded-t-lg" src={icon} alt=".." />
          <h6 className="my-3 text-lg ">Karmara Tedos</h6>
          <p className="overflow:hidden mx-10 mt-4">{children}</p>
          <div className="flex justify-center mt-10 mb-4">
            <Button color="green" ripple="light">
              Read More...
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
