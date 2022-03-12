import Button from "@material-tailwind/react/Button";

export default function PictureCard({ image, description, name }) {
  return (
    <>
      <div className="w-full">
        <div className="max-w-sm text-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3 mb-3 md:mb-10 min-w-sm">
          <div className="h-400">
            <img className="rounded-t-lg w-full h-full" src={image} alt=".." />
          </div>
          <h6 className="my-3 text-lg ">{name}</h6>
          <p className="overflow:hidden mx-10 mt-4">{description}</p>
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
