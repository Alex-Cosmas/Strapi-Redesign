import React from 'react'
import { Tabs, Tab } from '../../vertical-tabs/configuration/tab'

export default function ModelConfigurationTab() {
  return (
    <main className='main w-full h-auto mx-auto container px-0 py-10'>

      <Tabs className=''>
        <Tab label={'recommended'} tabName={'Base'}>
          <div>
            <div>
              <h2>Display Name</h2>
              <input type="text" />
            </div>
            <hr className='my-3 text-default-primary' />

            <div>
              <h2>UUID</h2>
              <input type="number" />
            </div>
          </div>
        </Tab>
        <Tab label={'subscribed'} tabName={'Advance'}>
          <div>
            <div>
              <h1>Draft /Publish System</h1>
              <h1>Write a draft version of each entry before publishing it</h1>
            </div>
            <hr className='my-3 text-default-primary' />

            <div>
              <h1>Settings</h1>
              <p>Write a draft version of each entry before publishing it</p>

              <hr className='my-3 text-default-primary' />
              <h2>Collection Name</h2>
              <input type="text" />
              <p>Write a draft version of each entry before publishing it</p>
            </div>
          </div>
        </Tab>
        <Tab label={'subscribers'} tabName={'Confirm Settings'}>
          <div>
            <h5>Confirm settings your configuration settings before saving</h5>
          </div>

        </Tab>
      </Tabs>
    </main>
  )
}
