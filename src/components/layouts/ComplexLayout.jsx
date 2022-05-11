import { LeadText } from '@material-tailwind/react';
import React from 'react';
import DefaultNavbar from '../DefaultNavbar';

function ComplexLayout({
  children,
  backgroundImage = 'landing-background',
  title = '',
  subtitle = '',
  customBackground = '',
}) {
  const backgroundImageClass = customBackground ? '' : `bg-${backgroundImage}`;
  const style = customBackground
    ? {

      background: `linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(${String(
        customBackground,
      )})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
    : {};

  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <section className="relative block h-500">
          <div
            style={style}
            className={`${backgroundImageClass} bg-cover bg-center absolute top-0 w-full h-full flex justify-center items-center`}
          />
          <div className="relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full px-4 ml-auto mr-auto text-center mt-24">
                {title && (
                <h2 className="text-2xl md:text-3xl text-white lg:text-5xl font-serif font-bold leading-normal m-0">
                  {title}
                </h2>
                )}
                {subtitle && (
                  <div className="text-gray-200">
                    <LeadText color="text-sky-400">
                      {subtitle}
                    </LeadText>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-16 bg-gray-100">
          <div className="container m-0 p-0 max-w-7xl lg:px-4 lg:mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-3xl -mt-64 h-auto">
              <div className="px-1 py-5 lg:p-5">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ComplexLayout;
