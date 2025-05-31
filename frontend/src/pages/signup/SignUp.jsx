import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-[#e5e6e43a] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-400 '>
                    Sign Up
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Full Name</label>
                        <input
                            className='w-full input input-border h-10'
                            type="text"
                            placeholder='fullname'
                        />
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>User Name</label>
                        <input
                            className='w-full input input-border h-10'
                            type="text"
                            placeholder='username'
                        />
                    </div>

                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Password</label>
                        <input
                            className='w-full input input-border h-10'
                            type="password"
                            placeholder='password'
                        />
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Confirm Password</label>
                        <input
                            className='w-full input input-border h-10'
                            type="password"
                            placeholder='confirm password'
                        />
                    </div>

                    {/* gender checkbox */}
                    <GenderCheckbox />

                    <a href="#" className='text-sm mt-2 hover:underline hover:text-blue-400 inline-block'>
                        Already have an account
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 '>Sign Up</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default SignUp
