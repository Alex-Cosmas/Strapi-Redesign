import Image from 'next/image'
import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()
  const SignIn = (e) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div>
      <div className='min-h-screen bg-default-light flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center items-center'>
          <Image
            src='/logo/SVG.logo.purple.dark.svg'
            alt='Picture of the author'
            width='200'
            height='45'
            className='mx-auto w-auto object-contain'
          />
        </div>

        {/* Form  */}

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white pt-8 pb-12 px-4 shadow sm:rounded-lg sm:px-10 text-default-primary'>
            <form className='space-y-6' action='#' method='POST'>
              <div className='my-3 flex flex-col'>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium px-3'
                >
                  User Name
                </label>
                <input
                  type='text'
                  placeholder='John Doe'
                  className=' bg-default-light appearance-none block w-full px-3 py-2 border border-gray-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-default-primary focus:border-default-primary sm:text-sm'
                />
              </div>

              <div className='my-3 flex flex-col'>
                <label
                  htmlFor='password'
                  className='mb-2 block text-sm font-medium px-3'
                >
                  Password
                </label>
                <input
                  type='password'
                  placeholder='************'
                  className=' bg-default-light appearance-none block w-full px-3 py-2 border border-gray-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-default-primary focus:border-default-primary sm:text-sm'
                />
              </div>

              <div className='flex items-center'>
                <input
                  id='remember_me'
                  name='remember_me'
                  type='checkbox'
                  className='h-4 w-4  bg-default-light rounded'
                />
                <label
                  htmlFor='remember_me'
                  className='ml-2 block text-sm font-medium'
                >
                  Remember my password
                </label>
              </div>

              <button
                className='w-full bg-default-primary text-white py-4 px-8 rounded-md mt-5 font-semibold focus:outline-none focus:ring-default-primary focus:border-default-primary'
                onClick={SignIn}
                type='button'
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>

        {/* End of Form  */}

        <div className='mt-8 font-medium mx-auto text-default-primary'>
          Forgot your password?
        </div>
      </div>
    </div>
  )
}

export default SignIn
