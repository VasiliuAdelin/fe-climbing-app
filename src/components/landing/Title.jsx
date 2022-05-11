import H3 from '@material-tailwind/react/Heading3';

export default function Title({ heading }) {
  return (
    <div className="flex flex-wrap justify-center text-center lg:mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <H3 color="gray">{heading}</H3>
      </div>
    </div>
  );
}
