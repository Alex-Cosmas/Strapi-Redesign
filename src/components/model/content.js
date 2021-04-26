// import Test from '../../shared/horizontal-tabs/test'
import ModelConfigurationTab from '../../shared/vertical-tabs/configuration'

export default function ModelContent() {
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex flex-col pr-10'>
          <div className='text-2xl'>Create a collection type </div>
        </div>
        <h2 className='mt-5 mb-1'>Configuration Settings</h2>
        <hr className='mt-1 mb-5' />
        {/* Tabs  */}
        <ModelConfigurationTab />

        <hr className='mt-5 mb-5' />

        <div className="flex justify-between">
          <button className=" px-10 py-2  rounded-sm bg-default-primary opacity-20 text-white"> Cancel</button>
          <button className="px-10 py-2  rounded-sm bg-default-primary text-white"> Proceed </button>
        </div>
      </div>
    </div >
  )
}
