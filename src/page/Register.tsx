import { AiFillLock } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import AppTextField from '../components/AppTextField';

import * as Tabs from '@radix-ui/react-tabs';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full md:max-w-4xl mx-auto p-4'>
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-12'>
          Update your profile
        </h2>
        <Tabs.Root
          className='flex flex-col w-full mt-8'
          defaultValue='basicinfo'
        >
          <Tabs.List
            className='shrink-0 flex border-b border-mauve6'
            aria-label='Manage your account'
          >
            <Tabs.Trigger
              className='bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[] data-[state=active]:focus:shadow-black outline-none cursor-default'
              value='basicinfo'
            >
              Basic Info
            </Tabs.Trigger>
            <Tabs.Trigger
              className='bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[] data-[state=active]:focus:shadow-black outline-none cursor-default'
              value='address'
            >
              Address
            </Tabs.Trigger>
            <Tabs.Trigger
              className='bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[] data-[state=active]:focus:shadow-black outline-none cursor-default'
              value='relation'
            >
              Relationship
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='basicinfo'
          >
            <p className='mb-5 text-mauve11 text-[15px] leading-normal'>
              Make changes to your basic information here.
            </p>
            <form
              className='mt-8 space-y-6 border border-gray-7  p-5 rounded-lg'
              action='#'
              method='POST'
            >
              <input type='hidden' name='remember' defaultValue='true' />

              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Full Name' />
                <AppTextField label='Gender' />
              </div>
              {/* fullname is send from above info */}
              {/* <AppTextField label='Full Name' /> */}

              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Date of Birth' />
                <AppTextField label='Nationality' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Email' />
                <AppTextField label='Alternate Email' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Mobile No.' />
                <AppTextField label='Martial Status' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='E-ContPerson' />
                <AppTextField label='Blood Group' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Religion' />
                <AppTextField label='Relationship' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='E-ContNo.' />
                <AppTextField label='Status' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='File Name' />
                <AppTextField label='Ext No.' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Cug No.' />
              </div>
            </form>
          </Tabs.Content>
          <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='address'
          >
            <p className='mb-5 text-mauve11 text-[15px] leading-normal'>
              Make changes to your address information here.
            </p>
            <form
              className='mt-8 space-y-6 border border-gray-7  p-5 rounded-lg'
              action='#'
              method='POST'
            >
              <span className='text-xl font-bold '>Permanent address</span>
              <input type='hidden' name='remember' defaultValue='true' />

              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='State Code' />
                <AppTextField label='District Code' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='City' />
                <AppTextField label='Street' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Contact No.' />
                <AppTextField label='Postal Code' />
              </div>
            </form>
            <form
              className='mt-8 space-y-6 border border-gray-7  p-5 rounded-lg'
              action='#'
              method='POST'
            >
              <div className='grid grid-cols-2 gap-4'>
                <span className=' text-xl font-bold '>Temporary address</span>
                <button className='group relative flex w-[70%] mx-auto justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'>
                  Same as Permanent address
                </button>
              </div>
              <input type='hidden' name='remember' defaultValue='true' />

              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='State Code' />
                <AppTextField label='District Code' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='City' />
                <AppTextField label='Street' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Contact No.' />
                <AppTextField label='Postal Code' />
              </div>
            </form>
          </Tabs.Content>
          <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='relation'
          >
            <p className='mb-5 text-mauve11 text-[15px] leading-normal'>
              Make changes to your relationship information here. Click save
              when you're done.
            </p>
            <form
              className='mt-8 space-y-6 border border-gray-7  p-5 rounded-lg'
              action='#'
              method='POST'
            >
              <input type='hidden' name='remember' defaultValue='true' />

              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Name' />
                <AppTextField label='Type of Relation' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Occupation' />
                <AppTextField label='Date of Birth' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <AppTextField label='Contact No.' />
              </div>

              <div className='flex justify-end space-x-2'>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'
                >
                  Save changes
                </button>
                <div className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'>
                  <Link
                    className='h-2 w-2  text-white group-hover:text-indigo-400'
                    to='..'
                    relative='path'
                  >
                    <span>Back</span>
                  </Link>
                </div>
              </div>
            </form>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
};
export default Register;
