import { NavItems } from '../constants/navItems';
import SideBarItem from './SideBarItem';

export interface SideBarNavProps {
  menu: typeof NavItems;
}

const SideBarNav = (props: SideBarNavProps) => {
  return (
    <nav className=' mt-2'>
      <SideBarItem item={props.menu}></SideBarItem>
    </nav>
  );
};
export default SideBarNav;
