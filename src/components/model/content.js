import Test from '../../shared/horizontal-tabs/test'

export default function ModelContent() {
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex flex-col pr-10'>
          <div className='text-2xl'>Create a collection type </div>
        </div>
        <h2 className='mt-5 mb-1'>Configuration Setting</h2>
        <hr className='mt-1 mb-5' />
        {/* Tabs  */}
        Vertical Tabs
        <Test />
      </div>
    </div>
  )
}
