import { NavItems } from '../constants/navItems';
import SideBarItem from './SideBarItem';

export interface SideBarNavProps {
  menu: typeof NavItems;
}

const SideBarNav = (props: SideBarNavProps) => {
  return (
    <nav className='space-y-1.5 mt-2'>
      {props.menu.map((e) => (
        <SideBarItem item={e}></SideBarItem>
      ))}
    </nav>
  );
};
export default SideBarNav;
