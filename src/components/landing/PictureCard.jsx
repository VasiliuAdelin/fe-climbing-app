import Button from '@material-tailwind/react/Button';

export default function PictureCard({
  image, description, name, onClick,
}) {
  return (
    <div className="max-w-sm text-center rounded-lg border rounded border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3 mb-3 md:mb-10 h-500 relative">
      <div className="h-300 w-300 overflow-hidden flex justify-center align-center">
        <img className="rounded-t-lg h-full" src={image} alt=".." />
      </div>
      <h6 className="my-3 text-lg ">{name}</h6>
      <p className="overflow:hidden mx-10 mt-4">{description}</p>
      <div className="absolute bottom-4 left-32">
        <Button color="green" onClick={onClick} ripple="light">
          Read More...
        </Button>
      </div>
    </div>
  );
}
