export default function Container({ children }) {
  return (
    <>
      {/* <div className="h-screen w-auto py-20 m-0 px-2 lg:mx-auto lg:my-8 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
      {children}
    </div> */}
      <div className="w-screen h-screen flex justify-center items-center m-0 p-0 -mt-20">
        {children}
      </div>
    </>

  );
}
