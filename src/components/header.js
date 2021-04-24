import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <nav>
      <div className='bg-gray-50'>
        <div className='flex justify-between mx-auto px-24 py-5 bg-gray-200'>
          <Image
            src='/logo/SVG.logo.purple.dark.svg'
            alt='Picture of the author'
            width='200'
            height='25'
            className=' float-left object-contain'
          />

          <ul className='flex space-x-3'>
            <li>
              <Link href='/dashboard'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href='/model'>
                <a>Model</a>
              </Link>
            </li>
            <li>
              <Link href='/structure'>
                <a>Structure</a>
              </Link>
            </li>
            <li>
              <Link href='/publish'>
                <a>Publish</a>
              </Link>
            </li>
            <li>
              <Link href='/configure'>
                <a>Configure</a>
              </Link>
            </li>
          </ul>
          <div>
            <div className='flex space-x-2'>
              <p>Alex</p>
              <div className='flex items-center justify-center rounded-full w-6 h-6 bg-blue-800 border-white border-2'>
                <span className='text-sm text-white font-medium'>A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
