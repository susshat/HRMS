import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ChevronDownIcon,
  Pencil1Icon,
  Pencil2Icon,
} from '@radix-ui/react-icons';

import UpdateProfile from '../components/UpdateProfile';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Portal } from '@radix-ui/react-dropdown-menu';
import ProfileCard from '../components/Profile/profileCard';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className=' fixed z-90 bottom-10 right-12 bg-blue-600 w-24 h-24  flex justify-center items-center text-white text-xl   '>
        <HoverCard.Root openDelay={0} closeDelay={0}>
          <HoverCard.Trigger>
            <Link
              to={'/profile/register'}
              className='text-black-12 text-xl bg-info-6 hover:bg-info-8 py-2 px-4 rounded-xl font-medium float-left '
            >
              <Pencil1Icon />
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              side='top'
              className='rounded-lg border border-gray-6  p-3 bg-info-4'
            >
              Edit
              <HoverCard.Arrow />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div> */}
      <div className="bg-[url('E:/work/HRMS3/hrms3/public/circuit-board.svg')] bg-primary-7 from-primary-6  h-56 items-center rounded-r-x "></div>
      <section className='md:flex md:items-start md:space-x-6 -mt-24 p-4  '>
        <ProfileCard />
        <UpdateProfile />
      </section>
    </>
  );
};

export default Profile;
