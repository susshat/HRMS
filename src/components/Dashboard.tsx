import { NavItems } from '../constants/navItems';
import { createContext, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import SideBarNav from './SidebarNav';
import { MagnifyingGlassIcon, CaretRightIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Outlet, useNavigate } from 'react-router-dom';
import Profile from '../page/Profile';

export const OpenSidebar = createContext({
  open: false,
});

const Dashboard = () => {
  const navigate = useNavigate();

  function handeLogoutClick() {
    navigate('/login');
  }

  function handleProfileClick() {
    navigate('/profile');
  }
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className='fixed w-full'>
        <header className=' bg-blue-300 p-4 '>
          <div className='flex justify-end'>
            <img
              className='h-8 w-auto cursor-pointer '
              src='http://hrms.channakyasoft.com/assets/HRMS.png'
              alt='Channakya Software(dev team)'
            />
          </div>
        </header>
      </div>
      <div className='flex'>
        <OpenSidebar.Provider value={{ open }}>
          <aside className='flex gap-6 items-center relative '>
            <div
              className={`bg-[#020126] min-h-screen ${open ? 'w-60' : 'w-16'} 
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
                >
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className=' flex justify-between items-center bg-gray-400 bg-opacity-90 rounded-lg p-2 w-full'>
                        <CgProfile size={32} />
                        <h1 className='ml-2'>Sushant Dangal</h1>
                        <CaretRightIcon className=' h-4 ml-auto' />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content>
                        <DropdownMenu.Item className=' bg-white rounded-lg p-2 shadow-xl '>
                          <button
                            className='hover:bg-gray-50 dark:text-black dark:hover:bg-gray-100 rounded-md'
                            onClick={handleProfileClick}
                          >
                            Profile
                          </button>
                          <br />
                          <button
                            className='hover:bg-gray-50 dark:text-black dark:hover:bg-gray-100 rounded-md'
                            onClick={handeLogoutClick}
                          >
                            Logout
                          </button>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
              )}
              {open ? (
                <hr className='mt-4 mb-2' />
              ) : (
                <hr className='mt-6 mb-1  w-8 ' />
              )}
              {open && (
                <label className='relative text-gray-400 focus-within:text-gray-600 block mb-2 mt-4'>
                  <input
                    type='text'
                    placeholder='Search..'
                    className='form-input rounded-md border border-gray-900 py-2 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-8 focus:outline-none'
                  ></input>
                  <MagnifyingGlassIcon className='pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3' />
                </label>
              )}
              <SideBarNav menu={NavItems} />
            </div>
          </aside>
        </OpenSidebar.Provider>
        <div className='overflow-y-auto max-h-screen'>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
