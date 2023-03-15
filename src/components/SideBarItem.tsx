import { ComponentProps, useContext, useReducer } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { NavItems } from '../constants/navItems';
import { OpenSidebar } from './Dashboard';
import { Drawer } from './Drawer/Drawer';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ExtendedDrawerSub } from './ExtendedDrawerSub';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type NavlistItemProps = ComponentProps<'li'> & {
  item: typeof NavItems;
};

const SideBarItem = ({ item, ...props }: NavlistItemProps) => {
  const { open: sidebarOpen } = useContext(OpenSidebar);

  return (
    <>
      <Drawer.Root
        isOpen={sidebarOpen}
        className={classNames(
          'h-screen  w-[220px] flex flex-col py-5 px-4 select-none',
          {
            'items-stretch w-[220px]': sidebarOpen,
            'w-[20px] items-center': !sidebarOpen,
          }
        )}
      >
        <Drawer.Header className='relative  '>
          {/* <button onClick={() => toggle()}>
            {openNav ? <CaretLeftIcon /> : <CaretRightIcon />}
          </button> */}
        </Drawer.Header>
        <Drawer.Body>
          {NavItems.map((menu, index) => (
            <>
              {'children' in menu ? (
                !sidebarOpen ? (
                  <>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger
                        className='flex items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4 py-1.5 px-2 w-full '
                      >
                        {menu.icon}
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Portal>
                        <DropdownMenu.Content className='bg-gray-7 mx-10 shadow-md rounded-md '>
                          {menu.children?.map((e) => (
                            <DropdownMenu.Item
                              className='flex cursor-pointer rounded-md  hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4  py-1.5 px-2 w-full'
                              key={'general-' + index}
                            >
                              <Link to={e.to}>
                                <div className='flex  items-center'>
                                  {e.menuCaption}
                                </div>
                              </Link>
                            </DropdownMenu.Item>
                          ))}
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </>
                ) : (
                  <ExtendedDrawerSub>
                    {(open) => (
                      <>
                        <Drawer.SubTrigger
                          className=' flex justify-between  items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4 py-1.5 px-2 w-full '
                        >
                          <div className='flex items-center '>
                            <span className='mr-2'> {menu.icon}</span>
                            <span> {menu.menuCaption}</span>
                          </div>
                          {open ? (
                            <MdKeyboardArrowDown />
                          ) : (
                            <MdKeyboardArrowLeft />
                          )}
                        </Drawer.SubTrigger>
                        <Drawer.SubSection>
                          {menu.children?.map((e) => (
                            <Drawer.Item
                              className='flex cursor-pointer rounded-md hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4  py-1.5 px-2 w-full'
                              key={'general-' + index}
                            >
                              <Link to={e.to}>
                                <div className='flex  items-center space-x-4'>
                                  {e.menuCaption}
                                </div>
                              </Link>
                            </Drawer.Item>
                          ))}
                        </Drawer.SubSection>
                      </>
                    )}
                  </ExtendedDrawerSub>
                )
              ) : (
                <Drawer.Item
                  className=' flex   items-center cursor-pointer  rounded-md
               hover:bg-gray-4 dark:text-white dark:hover:bg-grayA-4  py-1.5 px-2 w-full '
                >
                  <Link to={menu.to} className='flex items-center '>
                    <span className='mr-2'>{menu.icon}</span>
                    {sidebarOpen && menu.menuCaption}
                  </Link>
                </Drawer.Item>
              )}
            </>
          ))}
        </Drawer.Body>
      </Drawer.Root>
    </>
  );
};
export default SideBarItem;
