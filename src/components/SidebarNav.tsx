import { NavItems } from '../constants/navItems';
import SideBarItem from './SideBarItem';
import Navlist from './NavList';
import { Outlet } from 'react-router-dom';

export interface SideBarNavProps {
  menu: typeof NavItems;
}

const SideBarNav = (props: SideBarNavProps) => {
  return (
    <Navlist>
      {props.menu.map((e) => (
        <SideBarItem item={e}></SideBarItem>
      ))}
    </Navlist>
  );
};
export default SideBarNav;
