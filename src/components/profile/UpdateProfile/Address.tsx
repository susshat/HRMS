import AppTextField from '../../AppTextField';

const Address = () => {
  return (
    <>
      <p className='text-gray-11 text-base italic mb-4'>
        Make changes to your address information here.
      </p>
      <div className='mt-4 space-y-6 border border-gray-7  p-4 rounded-lg'>
        <span className='font-semibold text-lg '>Permanent address</span>
        <input type='hidden' name='remember' defaultValue='true' />

        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 '>
          <AppTextField label='State Code' />
          <AppTextField label='District Code' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='City' />
          <AppTextField label='Street' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='Contact No.' />
          <AppTextField label='Postal Code' />
        </div>
      </div>
      <form
        className='mt-4 space-y-6 border border-gray-7  p-4 rounded-lg'
        action='#'
        method='POST'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <span className=' font-semibold text-lg '>Temporary address</span>
          <button className='group relative flex w-[70%] mx-auto justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'>
            Set as Permanent address
          </button>
        </div>
        <input type='hidden' name='remember' defaultValue='true' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='State Code' />
          <AppTextField label='District Code' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='City' />
          <AppTextField label='Street' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='Contact No.' />
          <AppTextField label='Postal Code' />
        </div>
      </form>
    </>
  );
};
export default Address;
