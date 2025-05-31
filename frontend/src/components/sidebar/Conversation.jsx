import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>

                <div className='felx flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>Kono new Aadami</p>
                        <span className='text-xl'>emoji</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0'/>
        </>
    )
}

export default Conversation
