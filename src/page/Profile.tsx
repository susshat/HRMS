import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className=' fixed z-90 bottom-10 right-12 bg-blue-600 w-20 h-20 rounded-full flex justify-center items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-xl  '>
        <Link
          to={'/profile/register'}
          className='text-black-12 text-xl mb-4 mt-4 bg-info-6 hover:bg-info-8 py-2 px-4 rounded font-medium float-left'
        >
          Edit
        </Link>
      </header>

      <section className=' border border-gray-7 p-5 max-w-[850px] mx-auto rounded-lg mt-24'>
        <div className=''>
          <div>
            <h1 className='text-xl font-medium mb-1.5 '>Basic info</h1>
            <span className='text-gray-8'>Some basic info of user</span>
          </div>
        </div>
        <div className='text-gray-11  '>
          <div className='grid text-sm  divide-y divide-gray-4 '>
            <div className='grid grid-cols-2 items-center'>
              <div className='font-semibold  ml-4'>Photo</div>
              <img
                className='h-auto w-28 ml-auto mb-1'
                src='https://npg.si.edu/sites/default/files/blog_obama_martin_schoeller.jpg'
                alt=''
              />
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Full Name</div>
              <div>Sabun Liril</div>
            </div>

            <div className='grid grid-cols-2 items-center p-4 '>
              <div className=' font-semibold'>Date of birth</div>
              <div>Dec 29 1991</div>
            </div>

            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Nationality</div>
              <div>Nepali</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Gender</div>
              <div>Male</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Martial Status</div>
              <div>Single</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Blood Group</div>
              <div>A+</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Religion</div>
              <div>Hindu</div>
            </div>
          </div>
        </div>
      </section>
      <section className='my-16 border border-gray-7 p-5 max-w-[850px] mx-auto rounded-lg '>
        <div className=''>
          <div>
            <h1 className='text-xl font-medium mb-4'>Company info</h1>
          </div>
        </div>
        <div className='text-gray-11'>
          <div className='grid text-sm  divide-y divide-gray-4 '>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold bg-success-12-500 hover:bg-sky-700'>
                Status
              </div>
              <div className='rounded-full bg-success-8 w-fit '>Active</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Branch</div>
              <div>Sinamangal</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4 '>
              <div className=' font-semibold'>Designation </div>
              <div>Agent-X</div>
            </div>

            <div className='grid grid-cols-2 items-center p-4 '>
              <div className=' font-semibold'>Bussines Unit</div>
              <div>Retail outlet</div>
            </div>

            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Email</div>
              <div>Bussiness@example.com</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Alternate Email</div>
              <div>AltBussiness@example.com</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Mobile No.</div>
              <div>+977-0987654312</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Report To(1)</div>
              <div>Salman</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Report To(2)</div>
              <div>Krish</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Contact-Person</div>
              <div>Jaadoo</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>Contact person-Contact No.</div>
              <div>+977-123456789</div>
            </div>
            <div className='grid grid-cols-2 items-center p-4'>
              <div className=' font-semibold'>File-Name</div>
              <div>File name</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
