export default function StructureContent() {
  return (
    <div className='flex'>
      <div className='w-full'>

        {/* Structure Content */}
        <div>
          <h2 className="text-xl pb-3">Select a field for your collection type</h2>
          <hr />
          <div>
            <h2 className="my-4">Types</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center" >
                <h2>Text</h2>
                <h2>Small or long text like title or description</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Rich Text</h2>
                <h2>A rich text editor with formatting options</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Email</h2>
                <h2>Email field with validations format</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Password</h2>
                <h2>A rich text editor with formatting options</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Number</h2>
                <h2>Numbers (integer, float, decimal)</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Enumeration</h2>
                <h2>List of values, then pick one</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Date</h2>
                <h2>A date picker with hours, minutes and secondss</h2>
              </div>


              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Media</h2>
                <h2>Files like images, videos, etc</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Boolean</h2>
                <h2>Yes or no, 1 or 0, true or false</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>JSON</h2>
                <h2>Data in JSON format</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>Relation</h2>
                <h2>Refers to a Collection Type</h2>
              </div>

              <div className=" space-y-3 h-full  shadow-sm bg-default-light md:h-32 md:p-10 text-sm p-6 flex flex-col self-center">
                <h2>UID</h2>
                <h2>Unique identifier</h2>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
