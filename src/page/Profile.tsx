const Profile = () => {
  return (
    <>
      <div className='container mx-auto my-12 p-5 sm:block fixed '>
        <div className='md:flex no-wrap md:-mx-2 '>
          {/* <!-- Left Side --> */}
          <div className='w-full md:w-2/12 md:mx-2'>
            {/* <!-- Profile Card --> */}
            <div>
              <div className='image overflow-hidden'>
                <img
                  className='h-auto w-full mx-auto'
                  src='data:image/jpeg;base64,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'
                  alt=''
                />
              </div>
              <h1 className='text-gray-900 font-bold text-xl leading-6 my-1'>
                Tyler ji
              </h1>
              <ul className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
                <li className='flex items-center py-3'>
                  <span>Status</span>
                  <span className='ml-auto'>
                    <span className='bg-green-500 py-1 px-2 rounded text-white text-sm'>
                      Active
                    </span>
                  </span>
                </li>
                <li className='flex items-center py-3'>
                  <span className='mr-3'>Member since</span>
                  <span className='ml-auto'>Nov 07, 1969</span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className='my-4'></div>
          </div>
          {/* <!-- Right Side --> */}
          <div className='w-full md:w-9/12 mx-2 h-64'>
            {/* <!-- Profile tab --> */}
            {/* <!-- About Section --> */}
            <div className='bg-white p-3 shadow-sm rounded-sm'>
              <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                <span className='text-green-500'>
                  <svg
                    className='h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </span>
                <span className='tracking-wide'>About</span>
              </div>
              <div className='text-gray-700'>
                <div className='grid md:grid-cols-2 text-sm'>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Full Name</div>
                    <div className='px-4 py-2'>Tyler</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'> UserName</div>
                    <div className='px-4 py-2'>The creator</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Gender</div>
                    <div className='px-4 py-2'>Bi</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Contact No.</div>
                    <div className='px-4 py-2'>+977-9948001001</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>
                      Current Address
                    </div>
                    <div className='px-4 py-2'>Sinamangal, Omnagar</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>
                      Permanent Address
                    </div>
                    <div className='px-4 py-2'>Sukumbasi</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Email.</div>
                    <div className='px-4 py-2'>
                      <a
                        className='text-blue-800'
                        href='mailto:jane@example.com'
                      >
                        sus@example.com
                      </a>
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Birthday</div>
                    <div className='px-4 py-2'>Feb 06, 1998</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            <div className='my-4'></div>

            {/* <!-- Experience and education --> */}
            <div className='bg-white p-3 shadow-sm rounded-sm'>
              <div className='grid grid-cols-2'>
                <div>
                  <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
                    <span className='text-green-500'>
                      <svg
                        className='h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </span>
                    <span className='tracking-wide'>Experience</span>
                  </div>
                  <ul className='list-inside space-y-2'>
                    <li>
                      <div className='text-teal-600'>Owner at Nasa.</div>
                      <div className='text-gray-500 text-xs'>
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className='text-teal-600'>Owner at SpaceX.</div>
                      <div className='text-gray-500 text-xs'>
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
                    <span className='text-green-500'>
                      <svg
                        className='h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path fill='#fff' d='M12 14l9-5-9-5-9 5 9 5z' />
                        <path
                          fill='#fff'
                          d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        />
                      </svg>
                    </span>
                    <span className='tracking-wide'>Education</span>
                  </div>
                  <ul className='list-inside space-y-2'>
                    <li>
                      <div className='text-teal-600'>
                        Masters Degree in Channakya
                      </div>
                      <div className='text-gray-500 text-xs'>
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className='text-teal-600'>
                        Bachelors Degreen in ISMT
                      </div>
                      <div className='text-gray-500 text-xs'>
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End of Experience and education grid --> */}
            </div>
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
