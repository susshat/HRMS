import { ComponentProps, useContext, useReducer } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { NavItems } from '../constants/navItems';
import SideBarNav from './SidebarNav';
import { OpenSidebar } from './Dashboard';
import { Drawer } from './Drawer/Drawer';
import classNames from 'classnames';
import { CaretLeftIcon, CaretRightIcon, PlusIcon } from '@radix-ui/react-icons';

import * as Separator from '@radix-ui/react-separator';
import DrawerSection from './Drawer/DrawerSection/DrawerSection';
import { Link } from 'react-router-dom';

export type NavlistItemProps = ComponentProps<'li'> & {
  item: typeof NavItems;
};

const SideBarItem = ({ item, ...props }: NavlistItemProps) => {
  const [openNav, toggle] = useReducer((state) => !state, false);
  const { open } = useContext(OpenSidebar);

  return (
    <>
      <Drawer.Root
        isOpen={openNav}
        className={classNames(
          'h-screen  w-[220px] flex flex-col py-5 px-4 select-none',
          {
            'items-stretch w-[220px]': open,
            'w-[20px] items-center': !open,
          }
        )}
      >
        <Drawer.Header className='relative '>
          {/* <button onClick={() => toggle()}>
            {openNav ? <CaretLeftIcon /> : <CaretRightIcon />}
          </button> */}
        </Drawer.Header>
        <Drawer.Body>
          {NavItems.map((menu, index) => (
            <Drawer.Item
              className='flex justify-start cursor-pointer  rounded-md hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4  py-1.5 px-2 w-full'
              key={'general-' + index}
            >
              <Link to={menu.to}>
                <div className='flex justify-between items-center space-x-4'>
                  {menu.icon}
                  {open ? <span>{menu.menuCaption}</span> : null}
                </div>
                {'children' in item && open ? (
                  <Link
                    to={menu.to}
                    className=' items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4 py-1.5 px-2 w-full'
                  >
                    <PlusIcon className='size-4' />
                  </Link>
                ) : null}
              </Link>
            </Drawer.Item>
          ))}
        </Drawer.Body>
      </Drawer.Root>
    </>
  );
};
export default SideBarItem;
