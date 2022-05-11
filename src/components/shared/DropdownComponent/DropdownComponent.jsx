import { Link } from 'react-router-dom';
import Icon from '@material-tailwind/react/Icon';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';

function DropdownComponent({ navbarList = [] }) {
  return (
    <Dropdown
      color="transparent"
      buttonText={(
        <div className="font-lg flex items-center">
          <i className="fa-solid fa-bars text-white text-xl" />
        </div>
      )}
      ripple="light"
      className="customDropdownItem"
    >
      {navbarList.map(({ to, name, icon }, idx) => (
        <Link key={idx} to={to}>
          <DropdownItem color="green">
            <div className="flex items-center text-dark">
              <Icon name={icon} size="xl" />
              {' '}
              <span className="inline-block pl-4">{name}</span>
            </div>
          </DropdownItem>
        </Link>
      ))}
    </Dropdown>
  );
}

export default DropdownComponent;
