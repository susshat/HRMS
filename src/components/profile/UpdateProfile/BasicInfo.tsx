import AppTextField from '../../Textfield/AppTextField';

const BasiInfo = () => {
  return (
    <section>
      <p className='text-gray-11 text-base italic mb-4'>
        Make changes to your basic information here.
      </p>
      <form className='space-y-4'>
        <section>
          <header className='mb-4'>
            <h6 className='font-medium text-lg'>Personal Information</h6>
            <p className='text-gray-11 italic'>
              Personal information is any data that identifies an individual,
              such as their name, address, date of birth, or social security
              number.
            </p>
          </header>
          <div>
            <AppTextField label='Full Name' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
              <AppTextField label='Gender' />
              <AppTextField label='Martial Status' />
              <AppTextField label='Blood Group' />
              <AppTextField label='Date of Birth' />
              <AppTextField label='Religion' />
              <AppTextField label='Nationality' />
            </div>
          </div>
        </section>
        <section>
          <header className='mb-4'>
            <h6 className='font-medium text-lg'>Contact Information</h6>
            <p className='text-gray-11 italic'>
              Contact information is the means by which an individual or
              organization can be reached for communication.
            </p>
          </header>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <AppTextField label='Mobile No.' />
            <AppTextField label='Email' />
            <AppTextField label='Alternate Email' />
          </div>
        </section>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <AppTextField label='Relationship' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <AppTextField label='E-ContPerson' />
          <AppTextField label='Ext No.' />
          <AppTextField label='Cug No.' />
          <AppTextField label='E-ContNo.' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <AppTextField label='Status' />
          <AppTextField label='File Name' />
        </div>
      </form>
    </section>
  );
};
export default BasiInfo;
