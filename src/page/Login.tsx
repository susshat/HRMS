import { AiFillLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleSignin() {
    navigate('/');
  }
  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='http://hrms.channakyasoft.com/assets/HRMS.png'
              alt='Channakya Software(dev team)'
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-12'>
              Sign in to your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-10 px-3 py-2 text-gray-12 placeholder-gray-10 focus:z-10 focus:border-primary-12 focus:outline-none focus:ring-primary-12 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-10 px-3 py-2 text-gray-12 placeholder-gray-10 focus:z-10 focus:border-primary-10 focus:outline-none focus:ring-primary-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-9 text-primary-8 focus:ring-primary-10'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div>

              {/* <div className='text-sm'>
                <a
                  href='#'
                  onClick={handleRegister}
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Don't have an account?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary-8 py-2 px-4 text-sm font-medium text-white hover:bg-primary-10 focus:outline-none focus:ring-2 focus:ring-primary-10 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <AiFillLock
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
