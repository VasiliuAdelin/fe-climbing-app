/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '@material-tailwind/react/Icon';
import { NavLink } from 'react-router-dom';

function Breadcrumb({ routes }) {
  return (
    <div>
      <nav className="flex m-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {routes.map(({ name = '', icon = '', urlTo = '/' }, index) => {
            const isLastElement = routes.length === index + 1;

            const formatName = name.length > 4 ? `${name.slice(0, 4)}...` : name;

            return (
              <div key={index}>
                <li className="flex items-center">
                  <NavLink
                    to={urlTo}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                    activeClassName="text-gray-900 hover:text-gray-500"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center -mt-1">
                        <Icon name={icon} size="xl" className="-mt-1" />
                      </div>
                      {
                        index > 0 && (
                          <>
                            <span className="inline-block lg:hidden ml-1">{formatName}</span>
                            <span className="hidden lg:inline-block ml-1">{name}</span>
                          </>
                        )
                      }

                      {!isLastElement && (
                        <div className="flex items-center ml-2">
                          <Icon
                            name="arrow_forward_ios"
                            size="xs"
                            className=""
                          />
                        </div>
                      )}
                    </div>
                  </NavLink>
                </li>
              </div>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

Breadcrumb.defaultProps = {
  routes: [
    {
      name: 'Home',
      icon: 'home',
      urlTo: '/',
    },
    {
      name: 'Home',
      icon: '',
      urlTo: '/',
    },
  ],
};

export default Breadcrumb;
