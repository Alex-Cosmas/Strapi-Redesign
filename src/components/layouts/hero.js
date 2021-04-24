const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <div>
        <div className='bg-blue-900 h-64 text-white'>
          <div className='mx-auto px-24 py-20'>
            <div className='px-12'>
              <p className='text-3xl'>Welcome, Alex</p>
              <span className='leading-3'>
                We hope you are making progress on your project
                <br />
                Feel free to read the lastest news about Strapi.
                <br />
                We are giving out best to improve the product based on your
                feedback
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='pb-12'>
        <div className='mx-auto px-24'>
          <div className='bg-white h-auto rounded-md shadow-lg -mt-11 px-12 py-12'>
            <div className='flex'>
              <div className='w-9/12'>
                <div className='flex flex-col pr-10'>
                  We noticed that there is no model to work with. Easily create
                  content types to repeat the same type of content like blog
                  posts, products, users or any list of content you can think
                  of.
                  <button
                    type='submit'
                    className='bg-yellow-500 text-white py-4 mt-5 rounded-md'
                  >
                    Create your first model
                  </button>
                </div>
              </div>
              <div className='Sidebar w-3/12'>
                <div>
                  <div className='Promo'>
                    <div className='border-b-1 shadow-sm border-gray-100 pb-5'>
                      <p>
                        Read the documentation Discover the concepts, reference
                        guides and tutorials.
                      </p>
                    </div>
                    <div className='border-b-1 shadow-sm border-gray-100 py-5'>
                      <p>
                        Read the documentation Discover the concepts, reference
                        guides and tutorials.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className='mt-8'>
                      <h3 className='text-2xl'>Join the Community</h3>
                      <p>
                        Discuss with team members, contributors and developers
                        on different channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
