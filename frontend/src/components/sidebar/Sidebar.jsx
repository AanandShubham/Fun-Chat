import React from 'react'
import SerchInput from './SerchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-slate500 p-4'>
      <SerchInput />
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton />
    </div>
  )
}

export default Sidebar
