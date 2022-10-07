import { Link } from 'react-router-dom';
import { FaRegSun, FaShoppingBasket, FaRegStar, FaRegMap, FaUserFriends } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';

const sideNavIcons = {
  settings: FaRegSun,
  basket: FaShoppingBasket,
  star: FaRegStar,
  card: BsCreditCard,
  map: FaRegMap,
  users: FaUserFriends,
};

const SideNavIcon = ({ Icon }) => {
  return <Icon />;
};

const SideNavItem = ({ link, text, icon, active }) => {
  return (
    <li className={`${active === true ? 'side-nav--active' : ''}`}>
      <Link to={link}>
        <SideNavIcon Icon={sideNavIcons[icon]} />
        {text}
      </Link>
    </li>
  );
};

export default SideNavItem;
