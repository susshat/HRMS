import { ComponentProps, useContext, useReducer } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { NavItems } from '../constants/navItems';
import SideBarNav from './SidebarNav';
import { OpenSidebar } from './Dashboard';

export type NavlistItemProps = ComponentProps<'li'> & {
  item: typeof NavItems[0];
};

const SideBarItem = ({ item, ...props }: NavlistItemProps) => {
  // const menus = [
  //   { name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
  //   { name: 'User', link: '/', icon: HiUser },
  //   { name: 'Messages', link: '/', icon: BiMessageSquareDetail, margin: true },
  //   { name: 'Saved', link: '/', icon: CiSaveDown2 },
  //   { name: 'balls', link: '/', icon: BiCartAlt },
  //   { name: 'File Manager', link: '/', icon: BiFileBlank, margin: true },
  //   { name: 'settings', link: '/', icon: CiSettings },
  // ];

  const [openNav, toggle] = useReducer((state) => !state, false);
  const { open } = useContext(OpenSidebar);

  return (
    <>
      {/* <section className='flex gap-6'> */}
      {/* <div
          className={`bg-[#020126] min-h-screen ${
            openState ? 'w-48' : 'w-16'
          } duration-500 text-gray-100 px-4`}
        >
          <div className='py-3 flex justify-end'>
            <HiMenuAlt3
              size={26}
              className='cursor-pointer'
              onClick={() => setOpen(!openState)}
            />
          </div> */}

      {open ? (
        <li {...props}>
          {'children' in item ? (
            <button
              className='flex justify-end items-center cursor-pointer  rounded-md
               hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 '
              onClick={() => toggle()}
            >
              <span className='mr-12  items-center'>{item.menuCaption}</span>
              {openNav ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
            </button>
          ) : (
            (item as any).menuCaption
          )}
        </li>
      ) : (
        <button
          className='flex justify-end items-center cursor-pointer
            rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 '
          // onClick={() => toggle()}
        >
          <div className='p-3'> {item.icon}</div>
        </button>
      )}

      {'children' in item && openNav && open ? (
        <SideBarNav menu={item.children as never} />
      ) : null}

      {/* <div className='mt-4 flex flex-col gap-4 relative'>
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu.margin && 'mt-3'
                } group flex items-stretch text-sm gap-3.5 font-medium  hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
                 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover: duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div> */}
      {/* </div> */}
      {/* <div className='m-3 text-xl text-gray-900 font-semibold'>
          HRMS HOME-PAGE
        </div> */}
      {/* </section> */}
    </>
  );
};
export default SideBarItem;
