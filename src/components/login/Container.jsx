export default function Container({ children }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center m-0 p-0 -mt-20">
      {children}
    </div>
  );
}
