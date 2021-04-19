import Image from 'next/image'

export default function Home() {
  return (
    <div className=' bg-default-light h-full w-full min-h-screen text-default-primary flex items-center justify-center text-lg'>
      <div className='flex flex-col w-full items-center'>
        <Image
          src='/logo/SVG.logo.purple.dark.svg'
          alt='Picture of the author'
          width='200'
          height='45'
          className='object-contain'
        />
        <div className='bg-white text-default-primary mt-6 w-1/2 px-12 pt-12 pb-16 shadow-sm'>
          <div className='flex flex-col'>
            <div className='my-3 flex flex-col'>
              <label htmlFor='' className='px-3 font-medium mb-2'>
                User Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className=' bg-default-light px-3 py-2'
              />
            </div>

            <div className='my-3 flex flex-col'>
              <label htmlFor='' className='px-3 font-medium mb-2'>
                Password
              </label>
              <input
                type='password'
                placeholder='****************'
                className=' bg-default-light px-3 py-2'
              />
            </div>

            <div class='flex items-center my-3'>
              <input
                id='passwordremember'
                name='passwordremember'
                type='checkbox'
                class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-4'
              />
              Remember my password
            </div>

            <button className='  bg-default-primary text-white py-4 px-8 rounded-md mt-5 font-semibold'>
              LOG IN
            </button>
          </div>
        </div>
        <div className='mt-8 font-medium'>Forgot your password</div>
      </div>
    </div>
  )
}
