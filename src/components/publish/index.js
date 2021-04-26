import PublishContent from '../publish/content'

const Publish = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex-grow'>
        <div className=' bg-default-primary h-64 text-white'>
          <div className='mx-auto px-24 py-20'>
            <div className='px-12 w-3/4'>
              <p className='text-3xl'>Publish your content</p>
              <span className='leading-3 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                velit nisi, pretium ut lacinia in,
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='pb-12'>
        <div className='mx-auto px-24'>
          <div className='bg-white h-auto rounded-md shadow-lg -mt-11 px-12 py-12'>
            <PublishContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publish
