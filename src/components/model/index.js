import ModelContent from '../../components/model/content'

const Model = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className=''>
        <div className=' bg-default-primary h-64 text-white'>
          <div className='mx-auto px-24 py-20'>
            <div className='px-12 w-3/4'>
              <p className='text-3xl'>Model your content</p>
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
            <ModelContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
