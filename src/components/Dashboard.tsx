import { NavItems } from '../constants/navItems';
import { createContext, useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import SideBarNav from './SidebarNav';
import {
  MagnifyingGlassIcon,
  CaretRightIcon,
  PersonIcon,
  ExitIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Outlet, useNavigate } from 'react-router-dom';
import Profile from '../page/Profile';
import { TextField } from './TextField';
import classNames from 'classnames';

export const OpenSidebar = createContext({
  open: false,
});

export const ContainerContext = createContext<{
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}>({});

const Dashboard = () => {
  const navigate = useNavigate();

  function handeLogoutClick() {
    navigate('/login');
  }

  function handleProfileClick() {
    navigate('/profile');
  }
  const [open, setOpen] = useState(true);

  const useScrollRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className='flex '>
        <aside className='flex gap-6 items-center relative '>
          <div
            className={`bg-gray-6 min-h-screen ${open ? 'w-62' : 'w-16'} 
             text-gray-100 px-4`}
          >
            <div className=' flex justify-end mt-2'>
              {open ? (
                <RiMenuFoldLine
                  size={26}
                  className='cursor-pointer'
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <RiMenuUnfoldLine
                  size={26}
                  className='cursor-pointer'
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            {open && (
              <div
                className={`${open} flex justify-between mt-4 cursor-pointer`}
              ></div>
            )}
            {!open && <hr className='mt-6 mb-1 w-8' />}
            {open && (
              <TextField.Root>
                {(id) => (
                  <div className='flex pl-2 bg-grayA-3 rounded-md items-center space-x-2 group focus-within:bg-grayA-4'>
                    <TextField.PrefixSuffix className='text-gray-11 group-focus-within:text-gray-11'>
                      <MagnifyingGlassIcon />
                    </TextField.PrefixSuffix>
                    <TextField.Input
                      id={id}
                      // onChange={setSearch}
                      // value={search}
                      className='pr-2 bg-transparent outline-none py-2'
                      placeholder={'Search Project...' as never}
                    />
                  </div>
                )}
              </TextField.Root>
            )}
            <OpenSidebar.Provider value={{ open }}>
              <SideBarNav menu={NavItems} />
            </OpenSidebar.Provider>
          </div>
        </aside>
        <ContainerContext.Provider value={{ ref: useScrollRef }}>
          <div
            className='overflow-y-auto max-h-screen  flex-1 relative '
            ref={useScrollRef}
          >
            <header className=' bg-gray-2 p-4 sticky top-0'>
              <div className='flex justify-between items-center '>
                <img
                  className='h-8 w-auto cursor-pointer'
                  src='http://hrms.channakyasoft.com/assets/HRMS.png'
                  alt='Channakya Software(dev team)'
                />
                <div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger className='space-x-2' asChild>
                      <button className='flex justify-between items-center  bg-opacity-90 rounded-lg  w-full'>
                        <img
                          className='h-auto w-8 mr-2 rounded-xl'
                          src='https://npg.si.edu/sites/default/files/blog_obama_martin_schoeller.jpg'
                          alt=''
                        />
                        <h1 className='mr-auto'>Sushant Dangal</h1>
                        <CaretRightIcon className='I h-4 ml-auto' />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className='bg-gray-1 min-w-[150px] p-2 space-y-0.5 rounded-md shadow-md '>
                        <DropdownMenu.Item
                          className='flex space-x-2 items-center rounded-md
               hover:bg-gray-4   py-1.5 px-2 w-full'
                          onClick={handleProfileClick}
                          asChild
                        >
                          <button>
                            <PersonIcon />
                            <span>User Profile</span>
                          </button>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item
                          className='flex space-x-2 items-center rounded-md
               hover:bg-gray-4   py-1.5 px-2 w-full'
                          asChild
                          // onClick={handleProfileClick}
                        >
                          <button>
                            <LockClosedIcon />
                            <span>Change Password</span>
                          </button>
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator className='h-px bg-gray-7' />
                        <DropdownMenu.Item
                          className=' flex space-x-2 items-center  rounded-md
               hover:bg-error-4 text-error-9  py-1.5 px-2 w-full'
                          asChild
                          onClick={handeLogoutClick}
                        >
                          <button>
                            <ExitIcon />
                            <span>Logout</span>
                          </button>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
              </div>
            </header>

            <Outlet />
          </div>
        </ContainerContext.Provider>
      </div>
    </>
  );
};
export default Dashboard;
