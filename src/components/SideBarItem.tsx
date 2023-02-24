import { ComponentProps, useContext, useReducer } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { NavItems } from '../constants/navItems';
import SideBarNav from './SidebarNav';
import { OpenSidebar } from './Dashboard';

export type NavlistItemProps = ComponentProps<'li'> & {
  item: typeof NavItems[0];
};

const SideBarItem = ({ item, ...props }: NavlistItemProps) => {
  const [openNav, toggle] = useReducer((state) => !state, false);
  const { open } = useContext(OpenSidebar);

  return (
    <>
      {open ? (
        'children' in item ? (
          <button
            className='flex justify-between items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4 py-1.5 px-2 w-full'
            onClick={() => toggle()}
          >
            <span>{item.menuCaption}</span>
            {openNav ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
          </button>
        ) : (
          <button
            className=' flex justify-between items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4  py-1.5 px-2 w-full '
          >
            {(item as any).menuCaption}
          </button>
        )
      ) : (
        <button
          className='flex justify-end items-center cursor-pointer
            rounded-md hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4 '
          // onClick={() => toggle()}
        >
          <div className='p-3'> {item.icon}</div>
        </button>
      )}

      {'children' in item && openNav && open ? (
        <SideBarNav menu={item.children as never} />
      ) : null}
    </>
  );
};
export default SideBarItem;
