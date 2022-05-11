export default function Container({ children }) {
  return (
    <div className="h-screen py-8 px-2 lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:m-0 lg:p-0 lg:-mt-20">
      {children}
    </div>
  );
}
