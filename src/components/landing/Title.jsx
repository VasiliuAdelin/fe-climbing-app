export default function Title({ heading }) {
  return (
    <div className="flex flex-wrap justify-center text-center lg:mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h3 className="text-2xl lg:text-4xl font-serif font-bold leading-normal mt-0 mb-2">
          {heading}
        </h3>
      </div>
    </div>
  );
}
